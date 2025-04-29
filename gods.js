const godsCollection = document.querySelector("#symbols")

const godsSymbols = [
    {image:"../group-venus-violets/images/Aphrodite-01.png", name: "Aphrodite"
    },

    {image:"../group-venus-violets/images/Athena_Symb-01.png", name: "Athena"
    },

    {image:"../group-venus-violets/images/Apollo-01.png", name: "Apollo"
    },

    {image:"../group-venus-violets/images/Ares-01.png", name: "Ares"
    },

    {image:"../group-venus-violets/images/Artemis_Symb-01.png", name: "Artemis"
    },

    {image:"../group-venus-violets/images/Zeus_Symb-01.png", name: "Zeus"
    },

    {image:"../group-venus-violets/images/hera_symb-01.png", name: "Hera"
    },
    
    {image:"../group-venus-violets/images/Posideon_Symb-01.png", name: "Poseidon"
    },

    {image:"../group-venus-violets/images/hermes-Symb-01.png", name: "Hermes"
    },

    {image:"../group-venus-violets/images/Demeter_Symb-01.png", name: "Demeter"
    },

    {image:"../group-venus-violets/images/Heph_Symb-01.png", name:  "Hephaestus"
    },

    {image:"../group-venus-violets/images/Dionysus_Symb-01.png", name:  "Dionysus"
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