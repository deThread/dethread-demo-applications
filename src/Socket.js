var socket;

function disconnectSocket() {
	if (socket && socket.disconnect) {
		socket.disconnect(); 
	}
}

function initSocket(io) {
	//returning a live socket connection
	socket = io();
	return socket; 
}

export { disconnectSocket, initSocket, socket };
