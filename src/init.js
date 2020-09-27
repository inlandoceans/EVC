const initLoad = () => {

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const headerImg = document.createElement('img');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const liHome = document.createElement('li');
    const liJungle = document.createElement('li');
    const liPolar = document.createElement('li');
    const liOcean = document.createElement('li');
    const aHome = document.createElement('a')
    const aJungle = document.createElement('a')
    const aPolar = document.createElement('a')
    const aOcean = document.createElement('a')
    const content = document.createElement('div');
    const mainH = document.createElement('h2')
    const mainText = document.createElement('p')

    header.id = "header";
    headerImg.id = "headerImg";
    liHome.id ="liHome";
    liJungle.id = "liJungle";
    liPolar.id = "liPolar";
    liOcean.id = "liOcean";
        
    content.id = "content"
    mainH.id = "mainH";
    mainText.id = "mainText"
    
    headerImg.src = "img/biome.png"

    aHome.textContent = "Home";
    aJungle.textContent = "Jungle";
    aPolar.textContent = "Polar";
    aOcean.textContent = "Ocean"; 

    mainH.textContent = "Endangered Species"
    mainText.textContent = "An endangered species is a species that is very likely to become extinct in the near future, either worldwide or in a particular political jurisdiction. Endangered species may be at risk due to factors such as habitat loss, poaching and invasive species. The International Union for Conservation of Nature (IUCN) Red List lists the global conservation status of many species, and various other agencies assess the status of species within particular areas. Many nations have laws that protect conservation-reliant species which, for example, forbid hunting, restrict land development, or create protected areas. Some endangered species are the target of extensive conservation efforts such as captive breeding and habitat restoration."

    header.appendChild(headerImg);
    header.appendChild(nav);
    nav.appendChild(ul);
    ul.appendChild(liHome);
    ul.appendChild(liJungle);
    ul.appendChild(liPolar);
    ul.appendChild(liOcean);
    liHome.appendChild(aHome);
    liJungle.appendChild(aJungle);
    liPolar.appendChild(aPolar);
    liOcean.appendChild(aOcean);

    container.appendChild(header);
    container.appendChild(content);

    content.appendChild(mainH);
    content.appendChild(mainText);

}

export default initLoad