// turns code like this
function sendMessage (to: User, message: string): boolean {
  return socket.send(to, message);
}

// into code like this
function sendMessage(to, message) {
  var _socket$send;

  if (!(to instanceof User)) throw new TypeError("Value of argument 'to' violates contract.");
  if (typeof message !== "string") throw new TypeError("Value of argument 'message' violates contract.");
  _socket$send = socket.send(to, message);
  if (typeof _socket$send !== "boolean") throw new TypeError("Function 'sendMessage' return value violates contract.");
  return _socket$send;
}
