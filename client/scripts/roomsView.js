var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(roomName) {
    this.$select.append(`<div>${roomName}</div>`);
  }

};
