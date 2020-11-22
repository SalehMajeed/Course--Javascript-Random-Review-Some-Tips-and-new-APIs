function fetch_messages(chat_room_id) {
  return fetch(
    `login.php?chatRoomId=${encodeURIComponent(chat_room_id)}`
  ).then((response) => response.text());
}

fetch_messages(15).then((html) => {
  document.querySelector("body").innerHTML = html;
});
