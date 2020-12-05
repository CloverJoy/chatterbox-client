var MessageView = {
  //template <%= variable>
  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="messages"><%- text %></div>
        <div class="roomname"><%- roomname %></div>
        <div class="createdAt"><%- createdAt %></div>
      </div>
    `)

};