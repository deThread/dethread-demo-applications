var socket;

function disconnectSocket() {
	if(socket && socket.disconnect) {
		socket.disconnect(); 
	}
}

function initSocket(io) {
	socket = io();
	return socket; 
}
export { disconnectSocket, initSocket, socket }; 