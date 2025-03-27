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