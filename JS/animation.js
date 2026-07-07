const container = document.getElementById("flower-container");

const totalPetals = 30;

for(let i = 0; i < totalPetals; i++){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration = (8 + Math.random() * 10) + "s";

    petal.style.animationDelay = Math.random() * 10 + "s";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    container.appendChild(petal);

}