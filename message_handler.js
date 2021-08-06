log("Hello world!");
var b = Bugout("chat0001");
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