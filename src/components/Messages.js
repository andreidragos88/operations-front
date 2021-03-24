import React from 'react';
import { Box } from '@material-ui/core';
import Message from './Message';

function Messages(props) {
    return (
        <Box>
            {props.messages.map(message => <Message key={`${message.action}${message.timestamp}`} message={message} />)}
        </Box>
    );
}

export default Messages;