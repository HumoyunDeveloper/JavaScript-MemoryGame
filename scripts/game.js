const GAME = {
    SleepTime: 1,
    elementsArray: [],
    CARDS: [
        "apple", "facebook", "instagram", "twitter",
        "instagram", "twitter", "apple", "facebook",
        "facebook", "twitter", "apple", "instagram",
        "instagram", "apple", "twitter", "facebook"
    ],
    chosenCards: []
};

function init() {
    const PARENT = document.querySelector("#flex");
    fillWithDiv(16, PARENT);
    initGame(PARENT);
}

function initGame(_parent) {
    GAME.elementsArray.forEach((element, index) => {
        element.dataset.card = GAME.CARDS[index];
        element.innerHTML = `<div><i class="fab fa-${GAME.CARDS[index]}"></i></div>`;
        element.addEventListener("click", clicked);
        _parent.appendChild(element);
    })
}

function checkCards() {
    var first = GAME.chosenCards[0].dataset.card;
    var isTrue = GAME.chosenCards.every((card) => card.dataset.card == first);
    if(!isTrue) {
        GAME.chosenCards.forEach((card) => {
            card.classList.remove("clicked");
            card.firstChild.style.opacity = 0;
        });
    }
}

function clicked() {
    if (GAME.chosenCards.length !== 4) {
        if (!this.classList.contains("clicked")) {
            this.classList.add("clicked");
            this.firstChild.style.opacity = 1;
            GAME.chosenCards.push(this);
        }
    } else {
        checkCards();
        GAME.chosenCards = [];
    }
}

// Fill With Divs (Div bilan to'dirish)
function fillWithDiv(_size = 1, _parent) {
    _parent.innerHTML = "";
    GAME.elementsArray = [];
    for (var _inc = 0; _inc < _size; _inc++) {
        var div = document.createElement("div");
        div.classList.toggle("item");
        GAME.elementsArray.push(div);
    }
}

// Events
window.addEventListener("load", init);
