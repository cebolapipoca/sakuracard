
const pokemon = require("pokemontcgsdk");

pokemon.configure({apiKey: "34b24c5b-9f85-4cc4-9bf6-d15f006584c7"})


async function GetCardsPokemon()
{
   await fetch("https://api.pokemontcg.io/v2/cards", {
        method: "GET",
        mode: "cors"
    }).then(result => result.json()).then(cards => {
        return cards;
    })
}


