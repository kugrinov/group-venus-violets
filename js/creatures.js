import { app } from "./app.js";

import { getFirestore, getDocs, collection, updateDoc, deleteDoc, doc, } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const db = getFirestore(app);



// const creatureCollection = collection(db, "creatures")

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