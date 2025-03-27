import image from "./luxuryChocolatePic.jpg";

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
        contentDiv.style.height = "88%";
        contentDiv.style.position = "relative";

        //image properties:
        const luxChocImg = document.createElement("img");
        luxChocImg.src = image;
        luxChocImg.style.display = "";
        luxChocImg.style.height = "100%";
        luxChocImg.style.width = "100%";
        luxChocImg.style.objectFit = "cover";
        luxChocImg.style.position = "absolute";
        luxChocImg.style.zIndex = "-1";
        luxChocImg.style.opacity = "0.6";

        //text properties:
        const textDiv1 = document.createElement("div");
        textDiv1.style.position = "absolute";
        textDiv1.textContent = "Fresh.";
        textDiv1.style.fontWeight = "900";
        textDiv1.style.fontSize = "5rem";
        textDiv1.style.right = "75%";
        const textDiv2 = document.createElement("div");
        textDiv2.style.position = "absolute";
        textDiv2.textContent = "Crisp."
        textDiv2.style.fontWeight = "900";
        textDiv2.style.fontSize = "5rem";
        textDiv2.style.top = "25%";
        textDiv2.style.right = "25%";
        const textDiv3 = document.createElement("div");
        textDiv3.style.position = "absolute";
        textDiv3.textContent = "Delicioso!";
        textDiv3.style.fontWeight = "900";
        textDiv3.style.fontSize = "5rem";
        textDiv3.style.top = "55%"
        textDiv3.style.right = "40%";

        //order button:
        const order = document.createElement("button");
        order.style.position = "absolute";
        order.textContent = "PLACE ORDER";
        order.style.top = "85%";
        order.style.right = "41%";
        order.style.fontSize = "xxx-large";
        
        
        contentDiv.appendChild(textDiv1);
        contentDiv.appendChild(textDiv2);
        contentDiv.appendChild(textDiv3);
        contentDiv.appendChild(order);
        contentDiv.appendChild(luxChocImg);


        body.appendChild(contentDiv);
    });

    menuButton.addEventListener("click", () => {
        body.removeChild(contentDiv);
        contentDiv = document.createElement("div");

        body.appendChild(contentDiv);
    });

    aboutButton.addEventListener("click", () => {
        body.removeChild(contentDiv);
        contentDiv = document.createElement("div");

        contentDiv.style.display = "flex";
        contentDiv.style.alignItems = "center";
        contentDiv.style.justifyContent = "center";
        contentDiv.style.marginTop = "5rem";

        //homeDiv properties:
        const homeDiv = document.createElement("div");
        homeDiv.style.width = "75%";
        homeDiv.style.border = "5px solid gold";
        homeDiv.style.borderRadius = "15px";
        homeDiv.textContent = "HOME";
        homeDiv.style.textAlign = "center";

        //homeDivContentSection properties:
        const homeDivContentSection = document.createElement("div");
        homeDivContentSection.style.display = "grid";
        homeDivContentSection.style.gridTemplateColumns = "3fr 1fr";
        homeDivContentSection.style.justifyContent = "center";
        homeDivContentSection.style.alignItems = "center";

        //para properties:
        const para = document.createElement("p");
        para.style.color = "white";
        para.textContent = "Hailing from the upper west side of the neighborhood comes your favorite restaurant by the name of DeLuxe Desire. Your one-stop shop of eating, baking, chocolates and all things savory. Come join us for a meal. You will NOT regret it!"
        para.style.textAlign = "left";
        para.style.fontWeight = "900";
        para.style.padding = "10px";

        homeDivContentSection.appendChild(para);
        homeDiv.appendChild(homeDivContentSection);

        contentDiv.appendChild(homeDiv);

        body.append(contentDiv);
    });

})();

export { loadLogic };