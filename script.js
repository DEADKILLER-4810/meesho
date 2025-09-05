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
        "Kurtis",
        "All Kurtis",
        "Anarkali Kurtis",
        "Rayon Kurtis",
        "Cotton Kurtis",
        "Chikankari Kurtis"
    ],
    kurtaSet: [
        "KurtaSet",
        "All Kurta Sets",
        "Kurta Palazzo Sets",
        "Rayon Kurta Sets",
        "Kurta Pant Sets",
        "Cotton Kurta Sets",
        "Sharara Sets"
    ],
    dupattaSet: [
        "DupattaSet",
        "Cotton Sets",
        "Rayon Sets",
        "Printed Sets"
    ],
    suitsAndDressMaterial: [
        "Suits & Dress Material",
        "All Suits & Dress Material",
        "Cotton Suits",
        "Embroidered Suits",
        "Crepe Suits",
        "Silk Suits",
        "Patiala Suits"
    ],
    lehengas: [
        "lehengas",
        "Lehenga Cholis",
        "Net Lehenga",
        "Bridal Lehenga"
    ],
    otherEthnic: [
        "otherEthnic",
        "Blouses",
        "Dupattas",
        "Lehanga",
        "Gown",
        "Skirts & Bottomwear",
        "Islamic Fashion",
        "Petticoats"
    ]
};






const womenEthicSarees = womenEthnic.sarees;

// console.log(womenEthicSarees)
womenEthicSarees.forEach(content =>{
    const white = document.querySelector(".white-1")
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
    white.firstElementChild.classList.add("main-category")

});
    
const womenEthnicKurtis = womenEthnic.kurtis;

womenEthnicKurtis.forEach(content =>{
    const grey = document.querySelector(".grey-1");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content

    grey.firstElementChild.classList.add("main-category")
})

const womenEthnicKurtaSet = womenEthnic.kurtaSet;
     
 womenEthnicKurtaSet.forEach(content =>{
    const white = document.querySelector(".white-2");
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
  white.firstElementChild.classList.add("main-category")

})

const womenEthnicDupattaSet = womenEthnic.dupattaSet;

womenEthnicDupattaSet.forEach(content =>{
    const grey = document.querySelector(".grey-2");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content
  grey.firstElementChild.classList.add("main-category")
})

const womenEthnicsuitsAndDressMaterial = womenEthnic.suitsAndDressMaterial;
 womenEthnicsuitsAndDressMaterial.forEach(content =>{
    const white = document.querySelector(".white-3");
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
   white.firstElementChild.classList.add("main-category")

})

const womenEthniclehengas = womenEthnic.lehengas;

womenEthniclehengas.forEach(content =>{
    const grey = document.querySelector(".grey-3");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content
 grey.firstElementChild.classList.add("main-category")

})

 const womenEthnicOtherEthnic = womenEthnic.otherEthnic;
 womenEthnicOtherEthnic.forEach(content =>{
    const white = document.querySelector(".white-4");
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
     white.firstElementChild.classList.add("main-category")

 });





const womenWestern = {
topwear: [
    "Topwear",
    "All Topwear",
    "Tops",
    "Dresses",
    "T-shirts",
    "Jumpsuits"
],
bottomwear: [
    "Bottomwear",
    "All Bottomwear",
    "Jeans & Jeggings",
    "Palazzos",
    "Shorts",
    "Skirts"
],
InnerWear: [
    "Innerwear",
    "Bra",
    "Women Innerwear",
    "Briefs"
],
sleepwear: [
    "Sleepwear",
    "Nightsuits",
    "Women Nightdress"
],
maternityWear: [
    "Maternity Wear",
    "All Maternity & Feedingwear",
    "Maternity bottomwear & Dresses"
],
sportsWear: [
    "Sports Wear",
    "All Women Sportwear",
    "Sports Bra"
]

};



 const womenWesterntopwear = womenWestern.topwear;

// console.log(womenEthictopwear)
womenWesterntopwear.forEach(content =>{
    const white = document.querySelector(".white2-1")
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
    white.firstElementChild.classList.add("main-category")

});
    
const womenWesternbottomwear = womenWestern.bottomwear;

womenWesternbottomwear.forEach(content =>{
    const grey = document.querySelector(".grey2-1");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content

    grey.firstElementChild.classList.add("main-category")
})

const womenWesternInnerWear = womenWestern.InnerWear;
     
 womenWesternInnerWear.forEach(content =>{
    const white = document.querySelector(".white2-2");
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
  white.firstElementChild.classList.add("main-category")

})

const womenWesternsleepwear = womenWestern.sleepwear;

womenWesternsleepwear.forEach(content =>{
    const grey = document.querySelector(".grey2-2");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content
  grey.firstElementChild.classList.add("main-category")
})

const womenWesternmaternityWear = womenWestern.maternityWear;
 womenWesternmaternityWear.forEach(content =>{
    const white = document.querySelector(".white2-3");
    const para = document.createElement("p")
    white.appendChild(para)
    para.textContent = content
   white.firstElementChild.classList.add("main-category")

})

const womenWesternsportsWear = womenWestern.sportsWear;

womenWesternsportsWear.forEach(content =>{
    const grey = document.querySelector(".grey2-3");
    const para = document.createElement("p")
    grey.appendChild(para)
    para.textContent = content
 grey.firstElementChild.classList.add("main-category")

})


const men = {
    topWear: [
        "Top Wear",
        "All Top Wear",
        "Tshirts",
        "Shirts",
        "Winter Wear",
        "Jackets",
        "Sweater and Sweatshirts"
    ],
    bottomWear: [
        "Bottom Wear",
        "All Bottom Wear",
        "Jeans",
        "Trousers",
        "Track Pants",
        "Shorts"
    ],
    accessories: [
        "Men Accessories",
        "All Men Accessories",
        "Watches",
        "Belts & Wallets",
        "Jewellery",
        "Bags"
    ],
    footwear: [
        "Men Footwear",
        "Casual Shoes",
        "Sports Shoes",
        "Flip Flops & Sandals",
        "Formal Shoes",
        "Loafers"
    ],
    ethnicWear: [
        "Ethnic Wear",
        "Kurtas Sets",
        "Ethnic Jackets",
        "Bottomwear"
    ],
    innerAndSleepWear: [
        "Inner & Sleep Wear",
        "All Inner & Sleep Wear",
        "Boxers",
        "Underwears"
    ]

}

const menTopWear = men.topWear;

menTopWear.forEach(content => {
    const white = document.querySelector(".white3-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const menBottomWear = men.bottomWear;

menBottomWear.forEach(content => {
    const grey = document.querySelector(".grey3-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const menAccessories = men.accessories;

menAccessories.forEach(content => {
    const white = document.querySelector(".white3-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const menFootwear = men.footwear;

menFootwear.forEach(content => {
    const grey = document.querySelector(".grey3-2");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const menEthnicWear = men.ethnicWear;

menEthnicWear.forEach(content => {
    const white = document.querySelector(".white3-3");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const menInnerAndSleepWear = men.innerAndSleepWear;

menInnerAndSleepWear.forEach(content => {
    const grey = document.querySelector(".grey3-3");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});



const kids = {
    boysGirls: [
        "Boys & Girls 2+ Years",
        "Dresses",
        "Boys Sets",
        "Girls Sets",
        "Ethnicwear",
        "Nightwear",
        "Winter Wear",
        "Top Wear",
        "Bottomwear"
    ],
    infant: [
        "Infant 0-2 Years",
        "Rompers",
        "Baby Sets",
        "Ethnicwear"
    ],
    toysAndAccessories: [
        "Toys & Accessories",
        "Soft Toys",
        "Footwear",
        "Stationery",
        "Watches",
        "Bags & Backpacks"
    ],
    babyCare: [
        "Baby Care",
        "Baby Bedding & Accessories",
        "All Baby Care",
        "Newborn Care"
    ]
}

const kidsBoysGirls = kids.boysGirls;

kidsBoysGirls.forEach(content => {
    const white = document.querySelector(".white4-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const kidsInfant = kids.infant;

kidsInfant.forEach(content => {
    const grey = document.querySelector(".grey4-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const kidsToysAndAccessories = kids.toysAndAccessories;

kidsToysAndAccessories.forEach(content => {
    const white = document.querySelector(".white4-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const kidsBabyCare = kids.babyCare;

kidsBabyCare.forEach(content => {
    const grey = document.querySelector(".grey4-2");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});


const homeAndKitechen = { 
kitchenAndAppliances: [
    "Kitchen & Appliances",
    "View All",
    "Kitchen Tools",
    "Storage & Organizers",
    "Appliances",
    "Cookware",
    "Dinnerware",
    "Bakeware",
    "Glasses & Barware"
],
homeFurnishing: [
    "Home Furnishing",
    "Bedsheets",
    "Curtains & Sheers",
    "Pillows, Cushions & Covers",
    "Cushions & Cushion Covers",
    "Carpets & Doormats",
    "Mattress Protectors",
    "Sofa & Diwan Sets",
    "Towels & Bathrobes",
    "Blankets, Quilts & Dohars"
],
homeDecor: [
    "Home Decor",
    "All Home Decor",
    "Appliances Covers",
    "Clocks",
    "Storage & Organizers",
    "Showpieces",
    "Paintings & Photoframes",
    "Stickers & Wallpapers",
    "Lights",
    "Gifts & Mugs"
],
kitchenAndDining: [
    "Kitchen & Dining",
    "Kitchen Storage",
    "Cookware & Bakeware"
],
homeImprovement: [
    "Home Improvement",
    "All Home Essentials",
    "Cleaning Supplies",
    "Gardening",
    "Bathroom Accessories",
    "Insect Protection",
    "Home Tools"
]

  }

const homeAndKitchenKitchenAndAppliances = homeAndKitechen.kitchenAndAppliances;

homeAndKitchenKitchenAndAppliances.forEach(content => {
    const white = document.querySelector(".white5-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const homeAndKitchenHomeFurnishing = homeAndKitechen.homeFurnishing;

homeAndKitchenHomeFurnishing.forEach(content => {
    const grey = document.querySelector(".grey5-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const homeAndKitchenHomeDecor = homeAndKitechen.homeDecor;

homeAndKitchenHomeDecor.forEach(content => {
    const white = document.querySelector(".white5-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const homeAndKitchenKitchenAndDining = homeAndKitechen.kitchenAndDining;

homeAndKitchenKitchenAndDining.forEach(content => {
    const grey = document.querySelector(".grey5-2");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const homeAndKitchenHomeImprovement = homeAndKitechen.homeImprovement;

homeAndKitchenHomeImprovement.forEach(content => {
    const white = document.querySelector(".white5-3");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const beautyAndPersonalCare = {
    makeup: [
        "Make up",
        "Face",
        "Eyes",
        "Lips",
        "Nails",
        "Make up Kits",
        "Brushes & Tools",
        "Makeup Accessories"
    ],
    skincare: [
        "Skincare",
        "View All",
        "Face Masks & Peels",
        "Facecare",
        "Haircare",
        "Bath & Shower"
    ],
    babyAndMom: [
        "Baby & Mom",
        "Baby Personal Care",
        "Mom Care"
    ],
    mensCare: [
        "Mens Care",
        "Beard Care",
        "Fragrances for Men"
    ],
    healthcare: [
        "Healthcare",
        "Ear Buds & Cleaners",
        "Condoms",
        "Sanitary Pads",
        "Dental Care",
        "Weight Management",
        "Health Monitors"
    ]
}

const beautyAndPersonalCareMakeup = beautyAndPersonalCare.makeup;

beautyAndPersonalCareMakeup.forEach(content => {
    const white = document.querySelector(".white6-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const beautyAndPersonalCareSkincare = beautyAndPersonalCare.skincare;

beautyAndPersonalCareSkincare.forEach(content => {
    const grey = document.querySelector(".grey6-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const beautyAndPersonalCareBabyAndMom = beautyAndPersonalCare.babyAndMom;

beautyAndPersonalCareBabyAndMom.forEach(content => {
    const white = document.querySelector(".white6-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const beautyAndPersonalCareMensCare = beautyAndPersonalCare.mensCare;

beautyAndPersonalCareMensCare.forEach(content => {
    const grey = document.querySelector(".grey6-2");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const beautyAndPersonalCareHealthcare = beautyAndPersonalCare.healthcare;

beautyAndPersonalCareHealthcare.forEach(content => {
    const white = document.querySelector(".white6-3");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const JewelleryAccessories = {
    jewellery: [
        "Jewellery",
        "All Jewellery",
        "Jewellery Set",
        "Earrings & Studs",
        "Mangalsutras",
        "Bangles",
        "Necklaces",
        "Rings",
        "Kamarbandh & Maangtika",
        "Anklets",
        "Men Jewellery",
        "Oxidised"
    ],
    menAccessories: [
        "Men Accessories",
        "View All",
        "Watches",
        "Belts & Wallets",
        "Caps & Hats"
    ],
    womenAccessory: [
        "Women Accessory",
        "Watches",
        "Hair Accessories",
        "Sunglasses",
        "Socks",
        "Scarves and Stoles"
    ]
}

const jewelleryAccessoriesJewellery = JewelleryAccessories.jewellery;

jewelleryAccessoriesJewellery.forEach(content => {
    const white = document.querySelector(".white7-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const jewelleryAccessoriesMenAccessories = JewelleryAccessories.menAccessories;

jewelleryAccessoriesMenAccessories.forEach(content => {
    const grey = document.querySelector(".grey7-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const jewelleryAccessoriesWomenAccessory = JewelleryAccessories.womenAccessory;

jewelleryAccessoriesWomenAccessory.forEach(content => {
    const white = document.querySelector(".white7-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const bagsAndFootwear = {
    womenBags: [
        "Women Bags",
        "All Women Bags",
        "Handbags",
        "Clutches",
        "Slingbags",
        "Wallets",
        "Backpacks"
    ],
    menBags: [
        "Men Bags",
        "Men Wallets",
        "Crossbody Bags & Sling Bags",
        "Waist Bags",
        "Travel Bags, Luggage and Accessories",
        "View All",
        "Duffel & Trolley Bags"
    ],
    menFootwear: [
        "Men Footwear",
        "Sports Shoes",
        "Casual Shoes",
        "Formal Shoes",
        "Sandals",
        "Loafers"
    ],
    womenFootwear: [
        "Women Footwear",
        "Flats",
        "View All",
        "Bellies",
        "Heals and Sandals",
        "Boots",
        "Flipflops & Slippers"
    ],
    kidsFootwear: [
        "Kids Footwear",
        "View All",
        "Boys Shoes",
        "Girls Shoes",
        "Casual Shoes",
        "Flipflops & Slippers",
        "Sandals"
    ]
};

const bagsAndFootwearWomenBags = bagsAndFootwear.womenBags;
bagsAndFootwearWomenBags.forEach(content => {
    const white = document.querySelector(".white8-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const bagsAndFootwearMenBags = bagsAndFootwear.menBags;
bagsAndFootwearMenBags.forEach(content => {
    const grey = document.querySelector(".grey8-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const bagsAndFootwearMenFootwear = bagsAndFootwear.menFootwear;
bagsAndFootwearMenFootwear.forEach(content => {
    const white = document.querySelector(".white8-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const bagsAndFootwearWomenFootwear = bagsAndFootwear.womenFootwear;
bagsAndFootwearWomenFootwear.forEach(content => {
    const grey = document.querySelector(".grey8-2");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const bagsAndFootwearKidsFootwear = bagsAndFootwear.kidsFootwear;
bagsAndFootwearKidsFootwear.forEach(content => {
    const white = document.querySelector(".white8-3");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});
const electronics = {
    audio: [
        "Audio",
        "Bluetooth Headphone & Earphones",
        "Wired Headphones & Earphones",
        "Speakers"
    ],
    mobileAndAccessories: [
        "Mobile & Accessories",
        "Smartwatches",
        "Mobile Holders",
        "Mobile cases and covers",
        "Mobile Chargers",
        "Mobile & Accessories - View All"
    ],
    smartWearables: [
        "Smart Wearables",
        "VR Box",
        "Tripod",
        "Microphone",
        "Photo & Video Accessories"
    ]
};

const electronicsAudio = electronics.audio;
electronicsAudio.forEach(content => {
    const white = document.querySelector(".white9-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const electronicsMobileAndAccessories = electronics.mobileAndAccessories;
electronicsMobileAndAccessories.forEach(content => {
    const grey = document.querySelector(".grey9-1");
    const para = document.createElement("p");
    grey.appendChild(para);
    para.textContent = content;
    grey.firstElementChild.classList.add("main-category");
});

const electronicsSmartWearables = electronics.smartWearables;
electronicsSmartWearables.forEach(content => {
    const white = document.querySelector(".white9-2");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});

const sportsAndFitness = {
    fitness: [
        "Fitness",
        "Yoga",
        "Hand Grip Strengthener",
        "Tummy trimmers",
        "Skipping Ropes",
        "Sweat Belts"
    ],
    sports: [
        "Sports",
        "Badminton",
        "Skating",
        "Football",
        "Cricket"
    ]
};

const sportsAndFitnessFitness = sportsAndFitness.fitness;
sportsAndFitnessFitness.forEach(content => {
    const white = document.querySelector(".white10-1");
    const para = document.createElement("p");
    white.appendChild(para);
    para.textContent = content;
    white.firstElementChild.classList.add("main-category");
});



  const slider = document.getElementById('slider');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  nextBtn.addEventListener('click', () => {
    slider.scrollLeft += 230; // adjust based on image width + margin
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= 230;
  });

