log("Hello world!");
var b = Bugout("chat");
b.on("seen", function (address) { log(address + " [ seen ]"); });
log(b.address() + "[ me ]");

b.on("message", function (address, message) {
    log(address + ": " + message);
});

document.getElementById("input").onkeydown = function (ev) {
    if (ev.code == "NumpadEnter") {
        if (b.lastWireCount) {
            b.send(ev.target.textContent);
            ev.target.textContent = "";
        }
        ev.preventDefault();
    }
}

