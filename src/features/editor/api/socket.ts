import {io, Socket} from 'socket.io-client';
import { useState, useEffect } from 'react';

export const useSocket = () => {
    const [socket, setSocket] = useState<Socket | null>(null)

    useEffect(() => {
        const socket = io('http://localhost:3000');
        setSocket(socket)
        console.log(socket)

        return () => {
            socket.disconnect();
            setSocket(null);
        }
    }, [])

    return {socket}
}