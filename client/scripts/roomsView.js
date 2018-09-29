var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //this.$select.append(`<option${}</option>`);
  },

  // roomRender: function(roomNames) {
  //   var rooms = RoomsView.render(roomNames);
  //   this.$select.append(rooms);
  // },

  // render: _.template(`
  //     <option class="roomSelect"><%-roomname%></option>
  //   `),

  renderRoom: function(roomName) {
    this.$select.append(`<option>${roomName}</option>`);
  }

};
