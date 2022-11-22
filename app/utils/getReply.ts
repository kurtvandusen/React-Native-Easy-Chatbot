import { IMessage } from 'react-native-gifted-chat'
import { chatbotUser } from '../store/messages/messagesSlice'
import { Post } from '../services/api'
import { context } from '../utils/context'
import { newId } from './newId'

export const getReply = async (message: IMessage) => {
    let body = {
      inputs:{
        question: message.text,
        context: context
      }
    }
    let reply = await Post.getAnswer(body)

    let replyMessages = {
        _id: newId(),
        text: reply.answer,
        createdAt: new Date(),
        user: chatbotUser
      }

      return replyMessages
  }