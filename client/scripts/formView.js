var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    //do some logic here
    //var message = {};
    //name, message, room
    //message.name = App.name
    //message.text = what we input
    //message.room = the current room when
    //Parse.create(message)
    var message = {};
    message.username = App.username;
    message.text = $('#message').val();
    message.roomname = $('#rooms select').val();
    Parse.create(message);

    $('#message').val('');

    var currentRoom = $('#rooms select').val();
    RoomsView.renderRoom(currentRoom);


    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};