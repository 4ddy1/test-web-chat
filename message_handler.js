log("Hello world!");
var b = Bugout("SpaceTradersAPI-Chatroom", {announce: ["wss://spacetradersapi-chatbox.herokuapp.com"]});
b.on("seen", function (address) { log(address + " [ seen ]"); });
log(b.address() + "[ me ]");

b.on("message", function (address, message) {
    log(address + ": " + message);
});

document.getElementById("input").onkeyup = function (ev) {
    if (ev.key == "Enter") {
        b.send(ev.target.textContent);
        ev.target.textContent = "";
        ev.preventDefault();
    }
}
