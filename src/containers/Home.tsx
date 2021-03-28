import useBaseStyles from '../assets/styles/base';
import Command from '../components/Command';
import socketIOClient from 'socket.io-client';
import { useEffect, useState, useCallback } from 'react';
import Messages from '../components/Messages';
import { socketEndpoint } from '../config/env';
import IMessage from '../types/IMessage';

const socket = socketIOClient(socketEndpoint);

function Home(): React.ReactElement {
    const classes = useBaseStyles();
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        socket.on('event://get-message', (message: IMessage):void => {
            setMessages((prevState) => [...prevState, message]);
        });
    }, []);

    const sendCommand = useCallback((input:string) => socket.emit('event://command', input), []);

    return (
        <div className={classes.main}>
            <Messages messages={messages} />
            <Command handleCommand={sendCommand} />
        </div>
    );
}

export default Home;