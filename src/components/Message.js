import React from 'react';
import useBaseStyles from '../assets/styles/base';
import useMessageStyles from '../assets/styles/message';

function Message(props) {
    const classesBase = useBaseStyles();
    const classesMessage = useMessageStyles();
    const isListResults = Array.isArray(props.message.result);

    return (
        <p className={props.message.error ? classesBase.error : null}>
            {isListResults
                ? props.message.result.map(el => <span className={classesMessage.messageRow} key={`${el.createdAt}`}>{el.command} = {el.result}</span>)
                : props.message.result}
        </p>
    );
}

export default Message;