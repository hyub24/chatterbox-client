var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // console.log(Messages.dataResults);

    var showMessages = function() {
      Parse.readAll((data) => {
        for(var i = 0; i<data.results.length; i++) {
          if(!data.results[i].username) {
            data.results[i].username = 'no username';
          }
          if(!data.results[i].text) {
            data.results[i].text = 'no message';
          }
          MessagesView.initialRender(data.results[i]);
        }
      })
    }

    showMessages();

    $(document.body).on('click',  '.username', function(){
      console.log('you have a friend');
      $("#chats").empty();
      //Friends.friendStorage.push($(this).text());
      Parse.readAll((data) => {
    
        for(var i = 0; i<data.results.length; i++) {
          if(data.results[i].username === $(this).text()) {
            MessagesView.initialRender(data.results[i]);
          }
        }
      })

    });

    $(".refresh").click(function() {
      $("#chats").empty();
      showMessages();
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