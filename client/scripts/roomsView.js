var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $room: $('#rooms'),

  renderRoom: function(room) {
    RoomsView.$select.append(new Option(`${room}`, `${room}`));
  },


  initialize: function() {

    // go through data, look at the room of each message
    RoomsView.$button.on('click', function() {
      RoomsView.newRoom();
    });

    RoomsView.$select.on('change', function() {
      RoomsView.render();
    });

    Parse.readAll((data) => {
      var uniqueArray = [];
      for (var i = 0; i < data.results.length; i++) {

        if (uniqueArray.indexOf(data.results[i].roomname) === -1) {
          if (data.results[i].roomname === undefined || data.results[i].roomname === null) {
            continue;
          }
          uniqueArray.push(data.results[i].roomname);
          RoomsView.renderRoom(data.results[i].roomname);
        }
      }
    });
    //if room is not in our select, add to select using renderRoom

  },

  newRoom: function() {
    var newRoom = window.prompt("New Room Name");
    RoomsView.renderRoom(newRoom);
    // <script>console.log('say something')</script>
  },

  render: function() {
    MessagesView.$chats.html('');
    var currentRoom = $('#rooms select').val();
    // Parse.readAll((data) => {
    //   for (var i = 0; i < data.results.length; i++) {
    //     var index = data.results[i];
    //     if (index.roomname === currentRoom) {
    //       MessagesView.renderMessage(index);
    //     }
    //   }
    Parse.readAll((data) => {
      //check the current value of room
      //iterate through the data, append messages that match with the room.
      for (var currentData of data.results) {
        if (currentRoom === currentData.roomname) {
          MessagesView.renderMessage(currentData);
        }
      }
    });
  },

};
