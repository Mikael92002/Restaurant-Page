import image from "./luxuryChocolatePic.jpg";
import caramelChoc from "./menu1img.jpg";
import shake from "./menu2img.jpg";
import beeseChurger from "./menu3img.jpg";
import snowman from "./menu4img.jpg";
import kokoLatte from "./menu5img.jpg";
import chocFish from "./menu6img.jpg";
import proteinBite from "./menu7img.jpg";

//Wrap the the page load logic in to one IIFE:
const loadLogic = (function () {
    let contentDiv = document.querySelector("#content");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");
    const body = document.querySelector("body");

    //call homeClick to set first page upon load as home:
    homeClick();

    //homeButton functionality:
    function homeClick() {
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
        textDiv1.style.top = "10%";
        textDiv1.style.transform = "translateY(-50%)";
        textDiv1.style.left = "15%";
        const textDiv2 = document.createElement("div");
        textDiv2.style.position = "absolute";
        textDiv2.textContent = "Crisp."
        textDiv2.style.fontWeight = "900";
        textDiv2.style.fontSize = "5rem";
        textDiv2.style.top = "30%";
        textDiv2.style.right = "25%";
        textDiv2.style.transform = "translateY(-50%)";
        const textDiv3 = document.createElement("div");
        textDiv3.style.position = "absolute";
        textDiv3.textContent = "Delicious!";
        textDiv3.style.fontWeight = "900";
        textDiv3.style.fontSize = "5rem";
        textDiv3.style.top = "55%"
        textDiv3.style.left = "50%";
        textDiv3.style.transform = "translate(-50%, -50%)";
        //order button:
        const order = document.createElement("button");
        order.style.position = "absolute";
        order.textContent = "PLACE ORDER";
        order.id = "place-order-button";
        order.style.top = "85%";
        order.style.left = "50%";
        order.style.transform = "translate(-50%,-50%)";
        order.style.fontSize = "xxx-large";


        contentDiv.appendChild(textDiv1);
        contentDiv.appendChild(textDiv2);
        contentDiv.appendChild(textDiv3);
        contentDiv.appendChild(order);
        contentDiv.appendChild(luxChocImg);


        body.appendChild(contentDiv);

        //undesirable sticky header fix:
        body.style.height = "100vh";
    }

    homeButton.addEventListener("click", homeClick);

    menuButton.addEventListener("click", () => {
        body.removeChild(contentDiv);

        //contentDiv properties:
        contentDiv = document.createElement("div");

        //pickup/delivery buttons:
        const buttonContainerDiv = document.createElement("div");
        buttonContainerDiv.style.display = "flex";
        buttonContainerDiv.style.marginLeft = "1rem";
        buttonContainerDiv.style.marginTop = "4rem"
        const pickupButton = document.createElement("button");
        const deliveryButton = document.createElement("button");
        pickupButton.textContent = "Pick-up";
        pickupButton.style.color = "white";
        pickupButton.style.backgroundColor = "black";
        pickupButton.style.border = "1px solid gold";
        deliveryButton.textContent = "Delivery";
        deliveryButton.style.color = "white";
        deliveryButton.style.backgroundColor = "black";
        deliveryButton.style.border = "1px solid gold";
        pickupButton.addEventListener("click", () => {
            pickupButton.style.backgroundColor = "gold";
            deliveryButton.style.backgroundColor = "black";
        });
        deliveryButton.addEventListener("click", () => {
            pickupButton.style.backgroundColor = "black";
            deliveryButton.style.backgroundColor = "gold";
        })
        //menu items:
        const menuGridDiv = document.createElement("div");
        const menu1 = document.createElement("div");
        const menu2 = document.createElement("div");
        const menu3 = document.createElement("div");
        const menu4 = document.createElement("div");
        const menu5 = document.createElement("div");
        const menu6 = document.createElement("div");
        const menu7 = document.createElement("div");
        menuGridDiv.append(menu1, menu2, menu3, menu4, menu5, menu6, menu7);
        menuGridDiv.style.display = "grid";
        menuGridDiv.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 400px))"
        menuGridDiv.style.justifyContent = "space-evenly";
        menuGridDiv.style.rowGap = "100px";
        menuGridDiv.style.marginTop = "2rem";
        menuGridDiv.style.marginBottom = "2rem";

        for (let i = 0; i < menuGridDiv.children.length; i++) {

            //menu content:
            const titleOfFoodDiv = document.createElement("div");
            titleOfFoodDiv.id = "food-title";
            const menuContent = document.createElement("div");
            menuContent.style.display = "grid";
            menuContent.style.gridTemplateColumns = "2fr 1fr";
            menuContent.style.gap = "5px";
            const menuContentPara = document.createElement("p");
            menuContentPara.id = "food-para";
            const menuImg = document.createElement("img");
            menuImg.id = "food-img";
            menuContent.append(menuContentPara, menuImg);

            const priceButton = document.createElement("button");
            priceButton.id = "price-button";
            const priceButtonDivContainer = document.createElement("div");
            priceButtonDivContainer.id = "price-div-container";
            priceButtonDivContainer.append(priceButton);
            menuGridDiv.children[i].append(titleOfFoodDiv, menuContent, priceButtonDivContainer);

            //menu-item container:
            menuGridDiv.children[i].id = "menu-item";
        }
        
        //to access menuContent: menu1.children[1];
        //to access menuContentPara: menu1.children[1].children[0];
        //to access menuImg:menu1.children[1].children[1];
        //to access priceButton: menu1.children[2].children[0];

        //tiresome work:
        menu1.children[0].textContent = "Caramel Chocolate";
        menu1.children[1].children[0].textContent = "Let the taste of this rich chocolate melt in your mouth and absorb you whole as every fiber of your being transcends the space-time continuum the moment your mortal tongue touches this exotic treat."
        menu1.children[1].children[1].src = caramelChoc;
        menu1.children[2].children[0].textContent = "$7.99";

        menu2.children[0].textContent = "Choco-Shake"
        menu2.children[1].children[0].textContent = "A tasty refreshment perfect to cure a mysterious sickness or a nasty headache. With bits and pieces of chocolate and macadamia scattered throughout, you'll be wanting the bottom of this drink to be endless."
        menu2.children[1].children[1].src = shake;
        menu2.children[2].children[0].textContent = "$3.99";

        menu3.children[0].textContent = "BeeseChurger";
        menu3.children[1].children[0].textContent = "Our signature dish, the BeeseChurger\u2122, is the most stuffed, packed, and delicious abomination you will ever taste! Features melted cheesecake chocolate, chocolate drizzle, fried chocolate, chocolate stuffing, chocolate parmesan, and Chocolate-y chocolate."
        menu3.children[1].children[1].src = beeseChurger;
        menu3.children[2].children[0].textContent = "$15.99";

        menu4.children[0].textContent = "Chocolate Snowman";
        menu4.children[1].children[0].textContent = "Who needs water when you've got the Chocolate Snowman? This addictive drink makes you a choc-a-holic! Featuring A three-layer solution to the age old problem of not having enough flavor in shakes. Contains trace amount of peanuts."
        menu4.children[1].children[1].src = snowman;
        menu4.children[2].children[0].textContent = "$3.99";

        menu5.children[0].textContent = "Holy Koko-Latte"
        menu5.children[1].children[0].textContent = "Tasting the assortment of treats present in the Holy Koko-Latte will leave you PRAYING for more! There is nothing finer than a hand-picked selection of our world-famous chocolates, all available in a carefully curated and divine package."
        menu5.children[1].children[1].src = kokoLatte;
        menu5.children[2].children[0].textContent = "$49.99";

        menu6.children[0].textContent = "ChocFish"
        menu6.children[1].children[0].textContent = "Originating from little Tokyo comes the star of the menu. The ChocFish is considered a delicacy by the ancient Tibetan people. The ChocFish is crispy, yet hard. Smooth yet rough. Fishy yet reptilian. Taste it for yourself to see what you've been missing out on!";
        menu6.children[1].children[1].src = chocFish;
        menu6.children[2].children[0].textContent = "$9.99";

        menu7.children[0].textContent = "Protein Bite"
        menu7.children[1].children[0].textContent = "This special treat is for all the gym folk out there. Contains 500g of protein. You'll NEVER care about your protein intake EVER again. A single bite of this nutrient-filled dish, and you'll be hitting the gym everyday with unlimited strength. Consume now to get the full benefits!";
        menu7.children[1].children[1].src = proteinBite;
        menu7.children[2].children[0].textContent = "$5.99";



        //pickup/delivery button appending:
        buttonContainerDiv.appendChild(pickupButton);
        buttonContainerDiv.appendChild(deliveryButton);
        contentDiv.appendChild(buttonContainerDiv);
        contentDiv.appendChild(menuGridDiv);
        body.appendChild(contentDiv);

        //undesirable sticky header fix:
        body.style.minHeight = "100vh";
        body.style.height = "auto";
    });

    aboutButton.addEventListener("click", () => {
        body.removeChild(contentDiv);
        contentDiv = document.createElement("div");

        contentDiv.style.display = "flex";
        contentDiv.style.flexDirection = "column";
        contentDiv.style.alignItems = "center";
        contentDiv.style.justifyContent = "center";
        contentDiv.style.marginTop = "5rem";
        contentDiv.style.color = "gold";

        //homeDiv properties:
        const homeDiv = document.createElement("div");
        homeDiv.style.width = "75%";
        homeDiv.style.border = "2px solid gold";
        homeDiv.style.padding = "10px";
        homeDiv.style.borderRadius = "15px";
        homeDiv.textContent = "ABOUT";
        homeDiv.style.fontSize = "xx-large";
        homeDiv.style.fontWeight = "900";
        homeDiv.style.color = "gold";
        homeDiv.style.textAlign = "center";

        //homeDivContentSection properties:
        const homeDivContentSection = document.createElement("div");
        // homeDivContentSection.style.display = "grid";
        // homeDivContentSection.style.gridTemplateColumns = "3fr 1fr";
        // homeDivContentSection.style.justifyContent = "center";
        // homeDivContentSection.style.alignItems = "center";

        //para properties:
        const para = document.createElement("p");
        para.id = "about-para";
        para.textContent = "Hailing from the upper west side of the neighborhood comes your favorite restaurant by the name of DeLuxe Desire. Your one-stop shop containing eatery, bakery, and all things chocolatey. Come sign your life away to us for a meal. You will NOT regret it!"

        homeDivContentSection.appendChild(para);
        homeDiv.appendChild(homeDivContentSection);

        //storeHoursDiv:
        const storeHours = document.createElement("div");
        storeHours.id = "store-hours";
        //storeHoursh1 properties:
        const storeHoursh1 = document.createElement("h1");
        storeHoursh1.textContent = "Store hours";
        storeHoursh1.style.marginTop = "5rem";
        storeHoursh1.textAlign = "center";
        const mondayDiv = document.createElement("div");
        mondayDiv.textContent = "Monday: 3 a.m. - 3 p.m.";
        const tuesdayDiv = document.createElement("div");
        tuesdayDiv.textContent = "Tuesday: 9 a.m. - 5 p.m.";
        const wednesdayDiv = document.createElement("div");
        wednesdayDiv.textContent = "Wednesday: 9 a.m. - 5 p.m.";
        const thursdayDiv = document.createElement("div");
        thursdayDiv.textContent = "Thursday: 9 a.m. - 5 p.m.";
        const fridayDiv = document.createElement("div");
        fridayDiv.textContent = "Friday: Open 24/7";
        const saturdayDiv = document.createElement("div");
        saturdayDiv.textContent = "Saturday: Closed all day";
        const sundayDiv = document.createElement("div");
        sundayDiv.textContent = "Sunday: 9 a.m. - 2 p.m.";

        storeHours.append(storeHoursh1, mondayDiv, tuesdayDiv, wednesdayDiv, thursdayDiv, fridayDiv, saturdayDiv, sundayDiv);

        contentDiv.append(homeDiv, storeHours);

        body.append(contentDiv);

        //undesirable sticky header fix:
        body.style.minHeight = "100vh";
        body.style.height = "auto";
    });

})();

export { loadLogic };