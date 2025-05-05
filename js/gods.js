import { app } from "./app.js";

import { getFirestore, getDocs, collection, addDoc, updateDoc, deleteDoc, doc, } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const godTypeCollection = collection(db, "newGod")

const newGodFormRef = document.querySelector("#yourGod")

const newGodRef = document.querySelector("#urGod")

async function addNewGod(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    await addDoc(godTypeCollection, {godName: formData.get("godlyPower")});

getNewGod();
}

async function getNewGod() {
    newGodRef.innerHTML = "";

    const godList = await getDocs (godTypeCollection)

    for (let index = 0; index < godList.docs.length; index++) {
        const currentGod= godList.docs[index];
        const godData = currentGod.data();

        newGodRef.innerHTML += `
        <div>
        <ul>
        <li>${godData.godName}</li>
        </ul>
        </div>`
    }
}

newGodFormRef.onsubmit = addNewGod

getNewGod();


//////////////////////////////////
const godsCollection = document.querySelector("#symbols")

const godsSymbols = [
    {image:"../group-venus-violets/images/Aphrodite-01.png", name: "Aphrodite", likes: 0,
    },

    {image:"../group-venus-violets/images/Athena_Symb-01.png", name: "Athena", likes: 0,
    },

    {image:"../group-venus-violets/images/Apollo-01.png", name: "Apollo", likes: 0,
    },

    {image:"../group-venus-violets/images/Ares-01.png", name: "Ares", likes: 0,
    },

    {image:"../group-venus-violets/images/Artemis_Symb-01.png", name: "Artemis", likes: 0,
    },

    {image:"../group-venus-violets/images/Zeus_Symb-01.png", name: "Zeus", likes: 0,
    },

    {image:"../group-venus-violets/images/hera_symb-01.png", name: "Hera", likes: 0,
    },
    
    {image:"../group-venus-violets/images/Posideon_Symb-01.png", name: "Poseidon", likes: 0,
    },

    {image:"../group-venus-violets/images/hermes-Symb-01.png", name: "Hermes", likes: 0,
    },

    {image:"../group-venus-violets/images/Demeter_Symb-01.png", name: "Demeter", likes: 0,
    },

    {image:"../group-venus-violets/images/Heph_Symb-01.png", name:  "Hephaestus", likes: 0,
    },

    {image:"../group-venus-violets/images/Dionysus_Symb-01.png", name:  "Dionysus", likes: 0,
    },
]

godsCollection.innerHTML = "";

for (let index = 0; index < godsSymbols.length; index++) {
    const symbol = godsSymbols[index];

    const newArticle = document.createElement("article")
    const newImg = document.createElement("img");
    newImg.src = symbol.image;
    newArticle.appendChild(newImg);

    const newP = "<p>" + symbol.name + "</p>";
    newArticle.innerHTML += newP;

    godsCollection.appendChild(newArticle);
}

