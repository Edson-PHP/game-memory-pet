const cards = [
    "https://images.dog.ceo/breeds/poodle-standard/n02113799_1568.jpg",
    "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_4929.jpg",
    "https://images.dog.ceo/breeds/beagle/n02088364_5572.jpg",
    "https://images.dog.ceo/breeds/rottweiler/n02106550_8116.jpg",
    "https://images.dog.ceo/breeds/dachshund/dog-1083690_640.jpg",
    "https://images.dog.ceo/breeds/bulldog-boston/n02096585_2177.jpg",
    "https://images.dog.ceo/breeds/chihuahua/n02085620_4919.jpg",
    "https://images.dog.ceo/breeds/pug/n02110958_609.jpg",
];

const cardsDoubled = [...cards, ...cards]; 
let openCards = [];

const cardsPet = () => {
    const box = document.querySelector(".box");
    box.innerHTML = "";

    const cardsPets = cardsDoubled.sort(() => Math.random() - 0.5);

    cardsPets.forEach(item => {
        box.innerHTML += `
            <div class="petImg item">
                <img src="${item}" class="imgDog" />
            </div>
        `;
    });

    document.querySelectorAll(".petImg").forEach(card => {
        card.addEventListener("click", (e) => {
            const clickedCard = e.currentTarget;

            if (openCards.length < 2) {
                clickedCard.classList.add("boxOpen");
                openCards.push(clickedCard);

                if (openCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        });
    });
}

const checkMatch = () => {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === cardsDoubled.length) {
        alert("Você Venceu!");
    }
}

document.querySelector(".start").addEventListener("click", cardsPet);

cardsPet();
