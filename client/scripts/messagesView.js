var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log(Messages.dataResults);
    // for(var i = 0; i<Messages.dataResults.length; i++) {
    //   MessagesView.initialRender(Messages.dataResults[i]); 
    // }
    Parse.readAll((data) => {
      for(var i = 0; i<data.results.length; i++) {
        MessagesView.initialRender(data.results[i]);
      }
    })
    // $(document).ready(function() {
    //   $(".refresh").click(this.initialize);
    // })
    $(".refresh").click(function() {
          Parse.readAll((data) => {
      for(var i = 0; i<data.results.length; i++) {
        MessagesView.initialRender(data.results[i]);
      }
    })
    });
  },

  initialRender: function(messages) {
    var newMessage = MessageView.render(messages);
    this.$chats.append(newMessage);
  },

  renderMessage: function(message) {
    //debugger;
    var newMessage = MessageView.render(message);
    // debugger;
    //var newMessage = MessageView.render(message); 
    this.$chats.append(newMessage);
  },

  refresh: function() {
    // should this be stored inside this method?
    // when is MessagesView.refresh being called?
  }

};