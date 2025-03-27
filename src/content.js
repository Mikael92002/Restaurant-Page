//Wrap the the page load logic in to one IIFE:

const loadLogic = (function () {
    let contentDiv = document.querySelector("#content");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");
    const body = document.querySelector("body");

    homeButton.addEventListener("click", () => {
        body.removeChild(contentDiv);
        contentDiv = document.createElement("div");
        contentDiv.textContent = "hello motophiles";
        const homeDiv = document.createElement("div");
        const para = document.createElement("p");
        homeDiv.style.border = "5px solid gold";
        homeDiv.style.borderRadius = "15px";
        para.style.color = "gold"
        para.textContent = "Hailing from the upper west side of the continent comes a great restaurant by the name of DeLuxe Desire. Your one-stop shop of eating, baking, chocolates and all things savory. Come join us for a meal. You will NOT regret it!"
        body.appendChild(contentDiv);
    });

    menuButton.addEventListener("click", () =>{
        body.removeChild(contentDiv);
        contentDiv = document.createElement("div");
        contentDiv.textContent = "Oh what is goin on here gang?";
        body.appendChild(contentDiv);
    });

    aboutButton.addEventListener("click", () => {
        body.removeChild(contentDiv);
        contentDiv = document.createElement("div");
        contentDiv.textContent = "Ya got me when I wasn't lookin'!";
        body.append(contentDiv);
    });

})();

export {loadLogic};