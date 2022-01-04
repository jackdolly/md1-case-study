let hinhtron = new Hinhtron(100, 100, 20);
hinhtron.draw();
let hinhchunhat = new Hinhchunhat(200, 350, 100, 20);
hinhchunhat.draw();

function play() {
    switch (hinhtron._flag) {
        case "Down":
            hinhtron.moveDown();
            break;
        case "Up":
            hinhtron.moveUp();
            break;
    }
    hinhchunhat.draw();
    hinhchunhat.checkImpactHinhtron(hinhtron)
}

window.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 37:
            hinhchunhat.moveLeft();
            break;
        case 39:
            hinhchunhat.moveRight();
            break
    }
})
setInterval(play, 100)