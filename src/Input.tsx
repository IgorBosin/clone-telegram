import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    addMessage: (title: string) => void
    sendMessage: (title: string) => void
}

const Input = (props: InputType) => {

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.addMessage(e.currentTarget.value)
        }

        const onKeyDownHandler = (e: any) => {
            e.key === 'Enter' && props.sendMessage(props.title)
        }

        return (
            <div>
                <input onKeyDown={onKeyDownHandler}
                       value={props.title}
                       onChange={onChangeHandler}/>
            </div>
        );
    }
;

export default Input;