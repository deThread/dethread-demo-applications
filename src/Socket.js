var socket;

function disconnectSocket() {
	if (socket && socket.disconnect) {
		socket.disconnect(); 
	}
}

function initSocket(io) {
	//returning a live socket connection
	socket = io('http://' + window.location.hostname + ':3000');
	return socket; 
}

export { disconnectSocket, initSocket };
