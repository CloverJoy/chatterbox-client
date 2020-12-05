var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {
    var currentMessage = MessageView.render(message);
    MessagesView.$chats.append(currentMessage);
  },

  initialize: function() {
    //somehow we need to access the data from the parse readall
    Parse.readAll((data) => {
      // examine the response from the server request:
      data.forEach(data, function() {
        var roomname = data.roomname;
        var message = data.text;
        var userName = data.username;
        //if roomname is not in rooms.storage, add roomname to list
        if (Rooms.storage.indexOf(roomname) === -1) {
          Rooms.storage.push(roomname);
        }

        //render message and add to correct room
      });

    });


  },

  render: function() {

  }

};