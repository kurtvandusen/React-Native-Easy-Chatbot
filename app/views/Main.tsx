import React, { useCallback } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage, MessagesState, defaultUser } from '../store/messages/messagesSlice'

export default function Main() {
    const dispatch = useDispatch()   
    const messages = useSelector((state: MessagesState) => state.messages)

    const onSend = (messages: IMessage[] = []) => {
        dispatch({ type: sendMessage.toString(), payload: messages[0]})
    }

    return (
        <GiftedChat
            messages={messages}
            onSend={onSend}
            user={defaultUser}
        />
    )
}