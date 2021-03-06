function Signaller(){
  var socket = io.connect('/manager');
  socket.on('error', function(err){
    console.log('socket error', err);
  });

	return {
    socket:socket,
		send: function(evt, data){
      socket.emit(evt, data);
		},
		receive: function(evt, callback){
			socket.on(evt, callback);
		},
    on: function(evt, callback){
      socket.on(evt, callback);
    },
    off: function(evt){
      socket.off(evt);
    }
	};
}

module.exports = Signaller;