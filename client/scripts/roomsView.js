var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
      // initial rooms in selector
    Parse.readAll((data) => {
      var roomsArr = [];
      for(var i = 0; i<data.results.length; i++) {
        if(!data.results[i].roomname) {
          data.results[i].roomname = 'no name';
        }
        roomsArr.push(this.render(data.results[i]));
      }

      var uniqRooms = _.uniq(roomsArr); 
  
      for(var j = 0; j<uniqRooms.length; j++) {
        RoomsView.$select.append(uniqRooms[j]);
      }
    });
    
    //sorts messages by room
    $(".roomSelect").change(function() {
      console.log(typeof $(this).val());

      $("#chats").empty();

      Parse.readAll((data) => {
        var roomMessages = [];
        for(var i = 0; i<data.results.length; i++) {
          if(data.results[i].roomname === $(this).val()) {
            roomMessages.push(data.results[i]);
          }
        }
        for(var j = 0; j<roomMessages.length; j++) {
          MessagesView.initialRender(roomMessages[j]);
        }
      })
    });

    $(".addRoom").click(function() {
      var roomInput = document.getElementById("roomInputBox").value;
      RoomsView.$select.append(`<option>${roomInput}</option>`);
    });

    // $(document.body).on('click', '.addRoom', function() {
    //   var roomInput = document.getElementById("roomInputBox").value;
    // console.log(roomInput);
    // console.log('sdf');

    // }
    // )
    

    // $(".addRoom").click(function() {
    //   var room = window.prompt('sldkjf');
    // })


  },

  // roomRender: function(roomNames) {
  //   var rooms = RoomsView.render(roomNames);
  //   this.$select.append(rooms);
  // },

  render: _.template(`
      <option class='roomname'><%-roomname%></option>
    `),

  renderRoom: function(roomName) {
    this.$select.append(`<option>${roomName}</option>`);
  }

};
