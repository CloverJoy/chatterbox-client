var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $room: $('#rooms'),

  renderRoom: function(room) {
    RoomsView.$select.append(new Option(`${room}`, `${room}`));
  },


  initialize: function() {
  },

  render: function() {
  },

};
