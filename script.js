// ENTER THE UNIVERSE

function enterUniverse() {

    const main = document.getElementById("mainContent");

    main.style.display = "block";

    main.scrollIntoView({
        behavior: "smooth"
    });

}


// VERIFICATION GAME

function verification(correct) {

    const message = document.getElementById(
        "verificationMessage"
    );

    if (correct) {

        message.innerHTML =
            "Access granted! Welcome to your universe, Aainu. ❤️";

    } else {

        message.innerHTML =
            "Hmm... are you sure? Try again! ✨";

    }

}


// SECRET MESSAGE

function revealSecret() {

    const secret = document.getElementById(
        "secretMessage"
    );

    secret.innerHTML =
        "jodi moi next life pao..thn i will chose to be ur man in evrey universe... ❤️";

}


// FINAL PROPOSAL

function sayYes() {

    const message = document.getElementById(
        "finalMessage"
    );

    message.innerHTML =
        "yayyyy!!!toi yes koboe lagibo huhh!!. ❤️ tuke biya koram moi sai lobi!";

    createHearts();

}


function notYet() {

    const message = document.getElementById(
        "finalMessage"
    );

    message.innerHTML =
        "That's completely okay. Take your time. Your feelings matter, and there's no pressure. ❤️";

}


// FLOATING HEARTS

function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";

        heart.style.color = "#d8a5ff";
        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const duration = Math.random() * 3000 + 2000;

        heart.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(-110vh) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);

    }

}


// WELCOME MESSAGE IN CONSOLE

console.log("Welcome to Aainu's Universe ❤️");