var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {
    var currentMessage = MessageView.render(message);
    MessagesView.$chats.append(currentMessage);
  },

  initialize: function() {

    Parse.readAll((data) => {
      //check the current value of room
      var currentRoom = $('#rooms select').val();
      //iterate through the data, append messages that match with the room.
      for (var currentData of data.results) {
        if (currentRoom === currentData.roomname) {
          currentData.createdAt = MessagesView.formatDate(currentData.createdAt);
          MessagesView.renderMessage(currentData);

        }
      }
    });
    var $user = $('.username');


    $user.on('click', function(event) {
      console.log(event);
      console.log('test');
      Friends.toggle(this.val());
    });



  },

  render: function() {

  },

  formatDate: function(date) {
    var newDate = '';
    newDate = date.slice(11, 19);
    return newDate;
  }

};