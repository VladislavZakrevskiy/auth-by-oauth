import { useEffect, useRef, useState } from "react";
import { useSocket } from "../api/socket";
import { DocumentActions } from "../types/document.actions";
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, Typography } from "@material-tailwind/react";
import { v4 } from "uuid";

export const Editor = () => {
	const { socket } = useSocket();
	const [rooms, setRooms] = useState([]);
	const nav = useNavigate();
	const rootNode = useRef(null);

	useEffect(() => {
		socket?.on(DocumentActions.SHARE_ROOMS, ({ rooms = [] }) => {
			if (rootNode) {
				setRooms(rooms);
				console.log(rooms);
			}
		});
	}, []);

	const navRoom = (id: string) => {
		nav(`/document/${id}`);
	};

	return (
		<div className="p-2" ref={rootNode}>
			<Typography className="!text-3xl">Available Rooms</Typography>
			<Button onClick={() => navRoom(v4())}>Create new room</Button>
			<List>
				{rooms.map((roomID) => (
					<ListItem key={roomID}>
						<Typography>{roomID}</Typography>
						<Button onClick={() => navRoom(roomID)}>Join room</Button>
					</ListItem>
				))}
			</List>
		</div>
	);
};
