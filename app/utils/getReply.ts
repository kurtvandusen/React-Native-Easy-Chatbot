import { IMessage } from 'react-native-gifted-chat'
import { chatbotUser } from '../store/messages/messagesSlice'
import { api } from '../services/api'
import { context } from '../utils/context'
import { newId } from './newId'

export const getReply = async (message: IMessage) => {
    let body = {
      inputs:{
        question: message.text,
        context: context
      }
    }
    let reply = await api.getAnswer(body)

    let replyMessages = {
        _id: newId(),
        text: reply.answer,
        createdAt: new Date(),
        user: chatbotUser
      }

      return replyMessages
  }