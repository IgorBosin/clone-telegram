import React, {useState} from 'react';
import Button from "./Button";
import Input from "./Input";
import {v1} from "uuid";
import s from './App.module.css'

type MessageType = {
    id: string
    message: string
}

const App = () => {

    const [title, setTitle] = useState('')
    const [message, setMessage] = useState<MessageType[]>([])
    const [error, setError] = useState('')

    const sendMessage = (title: string) => {
        if (message.length < 5) {
            setError('')
            if (title.trim() !== '') setMessage([{id: v1(), message: title}, ...message])
            setTitle('')
        } else setError('Limit messages is exceeded')
    }

    const clearButton = () => {
        setTitle('')
    }

    const deleteLastMessageButton = () => {
        const AllMessages = [...message]
        AllMessages.splice(0, 1)
        setMessage(AllMessages)
        setError('')
    }

    const addMessage = (value: string) => {
        setTitle(value)
    }

    let disabledSendButton = title.trim().length === 0
    let disabledClearButton = title.trim().length === 0
    let disabledDeleteMessage = message.length === 0

    return (
        <div>
            {error && <div className={s.error}>{error}</div>}
            <Input title={title} sendMessage={sendMessage} addMessage={addMessage}/>
            <Button
                name='send'
                callBack={() => sendMessage(title)}
                disabledButton={disabledSendButton}/>
            <Button
                name='clear'
                callBack={clearButton}
                disabledButton={disabledClearButton}/>
            <Button
                name='Delete last message'
                callBack={deleteLastMessageButton}
                disabledButton={disabledDeleteMessage}/>
            <ul>
                {message.map(el => {


                    return (
                        <li key={el.id}>
                            {el.message}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default App;