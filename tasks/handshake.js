function countHandshake() {
    let handshake = 0;
    for (people = 0; people < 10; people++) {
        handshake = handshake + people
    }
    return handshake
}
console.log(countHandshake());