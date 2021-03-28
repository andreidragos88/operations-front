import useBaseStyles from '../assets/styles/base';
import useMessageStyles from '../assets/styles/message';
import IMessage from '../types/IMessage';

type Props = {
    message: IMessage;
};

function Message(props: Props): React.ReactElement {
    const classesBase = useBaseStyles();
    const classesMessage = useMessageStyles();
    return (
        <p className={props.message.error ? classesBase.error : ''}>
            {props.message.result instanceof Array
                ? props.message.result.map(el => <span className={classesMessage.messageRow} key={`${el.createdAt}`}>{el.command} = {el.result}</span>)
                : props.message.result}
        </p>
    );
}

export default Message;