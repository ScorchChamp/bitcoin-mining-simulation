window.addEventListener("load", function () {
    let difficulty = 1;
    let nonce = 0;
    let currentHash = 0;
    let blockFound = false;
    let data = "";
});

function mineBlock() {
    for (let index = 0; index < 1000; index++) {
        currentHash = CryptoJS.SHA256(data + nonce).toString(); // hash the nonce using CryptoJS
        document.getElementById("nonce").innerHTML = nonce;
        document.getElementById("current-hash").innerHTML = currentHash;
        if (currentHash.startsWith("0".repeat(difficulty))) { // check if the hash meets the current difficulty
            blockFound = true;
            document.getElementById("block-found").innerHTML = blockFound;
            break;
        }
        nonce++; // increment the nonce and try again
        if (!blockFound) {
            setTimeout(mineBlock, 0);
        }
    }
    document.getElementById("data").disabled = !blockFound;
}

function mine() {
    difficulty = Math.floor(Math.random() * 6) + 2; // random difficulty between 1 and 10
    nonce = 0;
    currentHash = 0;
    blockFound = false;
    data = document.getElementById("data").value;
    document.getElementById("difficulty").innerHTML = difficulty;
    document.getElementById("nonce").innerHTML = nonce;
    document.getElementById("current-hash").innerHTML = currentHash;
    document.getElementById("block-found").innerHTML = blockFound;
    mineBlock();
}