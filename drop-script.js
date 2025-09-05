const womenEthnic = {
    sarees: [
        "Sarees",
        "All Sarees",
        "Silk Sarees",
        "Banarasi Silk Sarees",
        "Cotton Sarees",
        "Georgette Sarees",
        "Chiffon Sarees",
        "Heavy Work Sarees",
        "Net Sarees"
    ],
    kurtis: [
        "All Kurtis",
        "Anarkali Kurtis",
        "Rayon Kurtis",
        "Cotton Kurtis",
        "Chikankari Kurtis"
    ],
    kurtaSet: [
        "All Kurta Sets",
        "Kurta Palazzo Sets",
        "Rayon Kurta Sets",
        "Kurta Pant Sets",
        "Cotton Kurta Sets",
        "Sharara Sets"
    ],
    dupattaSet: [
        "Cotton Sets",
        "Rayon Sets",
        "Printed Sets"
    ],
    // suitsAndDressMaterial: [
    //     "All Suits & Dress Material",
    //     "Cotton Suits",
    //     "Embroidered Suits",
    //     "Crepe Suits",
    //     "Silk Suits",
    //     "Patiala Suits"
    // ],
    // lehengas: [
    //     "Lehenga Cholis",
    //     "Net Lehenga",
    //     "Bridal Lehenga"
    // ],
    // otherEthnic: [
    //     "Blouses",
    //     "Dupattas",
    //     "Lehanga",
    //     "Gown",
    //     "Skirts & Bottomwear",
    //     "Islamic Fashion",
    //     "Petticoats"
    // ]
};




const womenEthicSarees = womenEthnic.sarees;

// console.log(womenEthicSarees)
womenEthicSarees.forEach(content =>{
    const white = document.querySelector(".white-1")
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
    white.firstElementChild.classList.add("main-category")
    console.log(white.firstElementChild)

});
    
const womenEthnicKurtis = womenEthnic.kurtis;

womenEthnicKurtis.forEach(content =>{
    const grey = document.querySelector(".grey-1");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content

    
})

const womenEthnicKurtaSet = womenEthnic.kurtaSet;
     
 womenEthnicKurtaSet.forEach(content =>{
    const white = document.querySelector(".white-2");
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
 
})

const womenEthnicDupattaSet = womenEthnic.dupattaSet;

womenEthnicKurtis.forEach(content =>{
    const grey = document.querySelector(".grey-2");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content
  
})

