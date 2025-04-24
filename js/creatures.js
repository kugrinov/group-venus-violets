import { app } from "./app.js";

import { getFirestore, getDocs, collection,addDoc, updateDoc, deleteDoc, doc, } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);

const creatureCollection = collection(db,"newcreatures");

const newCreatureFormRef = document.querySelector("#custom-creature");
const creaturesRef = document.querySelector("#customCreatures");

async function addNewCreature(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await addDoc(creatureCollection, {creatureName: formData.get("creatureName"),
        creatureHeads: formData.get("creatureHeads"),
        creatureColors: formData.get("creatureColors"),
        creatureAbility: formData.get("creatureAbility"),
    });

    getNewCreatures();
    
}

async function getNewCreatures() {
    creaturesRef.innerHTML ="";

    const creatureList = await getDocs(creatureCollection);

    for (let index = 0; index < creatureList.docs.length; index++) {
        const currentCreature = creatureList.docs[index];
        const creatureData = currentCreature.data();

        creaturesRef.innerHTML +=`
        <div>
        <h4>${creatureData.creatureName}</h4>
        <ul>
        <li>Number of Heads: ${creatureData.creatureHeads}</li>
        <li>Colors: ${creatureData.creatureColors}</li>
        <li>Ability: ${creatureData.creatureAbility}</li>
        </ul>
        </div>
        `
        
    }
}

newCreatureFormRef.onsubmit = addNewCreature;

getNewCreatures();





// const creaturesRef = document.querySelector("#customCreatures")
// const creatureFormRef = document.querySelector("#custom-creature")
// const creatureNameRef = document.querySelector("creature-name")
// const creatureHeadRef = document.querySelector("creature-heads")
// const creatureColorRef = document.querySelector("creature-colors")
// const creatureAbilityRef = document.querySelector("creature-ability")

// async function getCreatures() {
//     const creatureDocs = await getDocs(creatureCollection);

//     creaturesRef.innerHTML = ""
//     for (let index = 0; index < creatureDocs.docs.length; index++) {
//         const currentCreature = creatureDocs.docs[index];

//         const creatureData = currentCreature.data();
//         creaturesRef.innerHTML += "<li>" + creatureData.name + "</li>";
        
//     }

// }

// async function addNewCreature(e) {
//     e.preventDefault();

//     const creatureNameValue = creatureNameRef.value;

//     if (creatureNameValue.trim() === "") {
//         alert("Please enter a valid name");
//     } else {
    
//     const newCreature = await addDoc(creatureCollection, {name: creatureNameValue});
//     console.log(newCreature);

//     getCreatures();
//     // clear out the form box after submitting
//     creatureFormRef.reset();
//     }
// }

// creatureFormRef.onsubmit = addNewCreature;

// getCreatures();