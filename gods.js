const godsCollection = document.querySelector("#symbols")

const godsSymbols = [
    {image:"../group-venus-violets/images/Aphrodite-01.png", name: "Aphrodite"
    },

    {image:"", name: "Athena"
    },

    {image:"../group-venus-violets/images/Apollo-01.png", name: "Apollo"
    },

    {image:"../group-venus-violets/images/Ares-01.png", name: "Ares"
    },

    {image:"", name: "Artemis"
    },

    {image:"", name: "Zeus"
    },

    {image:"", name: "Hera"
    },
    
    {image:"", name: "Poseidon"
    },

    {image:"", name: "Hermes"
    },

    {image:"", name: "Demeter"
    },

    {image:"", name:  "Hephaestus"
    },

    {image:"", name:  "Dionysus"
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