import useBaseStyles from '../assets/styles/base';
import Command from '../components/Command';
import socketIOClient from 'socket.io-client';
import { useEffect, useState, useCallback } from 'react';
import Messages from '../components/Messages';
import { socketEndpoint } from '../config/env';

const socket = socketIOClient(socketEndpoint);

function Home() {
    const classes = useBaseStyles();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('event://get-message', (message) => {
            setMessages(prevState => [...prevState, message]);
        });
    }, []);

    const sendCommand = useCallback((input) => socket.emit('event://command', input), []);

    return (
        <div className={classes.main}>
            <Messages messages={messages} />
            <Command handleCommand={sendCommand} />
        </div>
    );
}

export default Home;