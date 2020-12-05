var MessagesView = {

  $chats: $('#chats'),

  renderMessage: function(message) {
    var currentMessage = MessageView.render(message);
    console.log(message);
    MessagesView.$chats.append(currentMessage);

  },

  initialize: function() {


  },

  render: function() {

  }

};