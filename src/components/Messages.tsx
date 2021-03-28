import { Box } from '@material-ui/core';
import Message from './Message';
import IMessage from '../types/IMessage';

type Props = {
    messages: IMessage[];
}

function Messages(props: Props): React.ReactElement {
    return (
        <Box>
            {props.messages.map(message => <Message key={`${message.action}${message.timestamp}`} message={message} />)}
        </Box>
    );
}

export default Messages;