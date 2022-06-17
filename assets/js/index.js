/* Créer un conteneur div et l'ajouter au corps. */
const body = document.querySelector("body");
const container = document.createElement("div");
container.id = "container";
body.appendChild(container);
const content = {
    name: [
        "Accueil",
        "Séries",
        "Films",
        "Nouveautés les plus populaires",
        "Ma Liste",
    ],
    title: ["Séries >", "Tendances actuelles", "Revoir"],
};

/**
 * Pour chaque section, affichez la section et pour chaque image, affichez l'image.
 * @param nbSection - nombre de sections à créer
 */
const createSection = (nbSection = 3) => {
    for (let i = 0; i < nbSection; i++) {
        displaySection(i);
    }
    let imageTab = document.querySelectorAll(".img__netflix");
    imageTab.forEach((image) => {
        displayImage(image);
    });
};

/**
 * Il crée un élément de section, y ajoute un élément h3, puis ajoute 5 éléments div à l'élément de
 * section.
 * @param index - le nombre de sections que vous souhaitez afficher
 */
const displaySection = (index) => {
    let section = document.createElement("section");
    container.appendChild(section);
    let h3 = document.createElement("h3");
    h3.innerText = content.title[index];
    section.before(h3);
    for (let i = 0; i < 5; i++) {
        let containerImg = document.createElement("div");
        container.classList.add("container__img");
        section.appendChild(containerImg);
        let img = document.createElement("img");
        img.classList.add("img__netflix");
        containerImg.appendChild(img);
    }
};

/**
 * Cette fonction crée une barre de navigation avec un logo, une liste de liens et une fonction de
 * zoom.
 * @param logo - le logo du site
 * @param content - {
 * @param zoom - une valeur booléenne qui détermine si la barre de navigation doit être agrandie ou
 * non.
 */
const createNavigation = (content) => {
    const logo = "./assets/img/netflix.png";
    const zoom = "./assets/img/zoom.png";
    let nav = document.createElement("nav");
    container.prepend(nav);
    createBurgerMenu(nav);
    let imgLogo = document.createElement("img");
    imgLogo.src = logo;
    imgLogo.id = "logo";
    nav.appendChild(imgLogo);
    let ul = document.createElement("ul");
    ul.classList.add("list__unstyled");
    nav.appendChild(ul);
    for (let index = 0; index < content.name.length; index++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        ul.appendChild(a);
        li.innerText = content.name[index];
        a.appendChild(li);
    }
    const searchImg = document.createElement("img");
    searchImg.src = zoom;
    searchImg.id = "search";
    nav.appendChild(searchImg);
};

let count = 1;
/**
 * Il prend une image comme argument et change ses attributs source et alt
 * @param image - l'élément d'image
 */
const displayImage = (image) => {
    image.src = `./assets/img/${count}.jpg`;
    image.alt = "une image de Netflix";
    count++;
};

const createBurgerMenu = (nav) => {
    let link = document.createElement("a");
    link.id = "link";
    nav.appendChild(link);
    let span = document.createElement("span");
    span.id = "burger";
    link.appendChild(span);
};

const createNavMobileBurger = () => {
    /* Sélection des éléments HTML */
    let link = document.getElementById("link");
    let burger = document.getElementById("burger");
    let ul = document.querySelector("ul");

    /* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open au ul et au span#burger */
    link.addEventListener("click", (event) => {
        event.preventDefault();
        burger.classList.toggle("open");
        ul.classList.toggle("open");
    });
};

window.addEventListener("resize", () => {
    console.log(window.innerWidth);
});
createNavigation(content);
createSection();
