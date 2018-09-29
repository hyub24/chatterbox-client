var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    App.fetch(function(data=4) {
      console.log(data);
      //MessageView.render
    });
    this.$chats.append('<div>sldjf;</div>');
  },

  render: function() {
    //body here).append($chats);
  },

  renderMessage: function(message) {
    //debugger;
    var newMessage = MessageView.render(message);
    // debugger;
    //var newMessage = MessageView.render(message); 
    this.$chats.append(newMessage);
  }

};