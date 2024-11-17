const getpokemonbutton = document.getElementById('get-pokemon');
const pokedata = document.getElementById('pokedata');
const pokelist = document.getElementById('pokelist');


getpokemonbutton.addEventListener('click', () => {
    const selectedpokemon = document.getElementById('pokemon-select').value;
    console.log(selectedpokemon);
    getPokeData(selectedpokemon);
})

function getPokeData(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then(response => {
        if (!response.ok) {
        throw new Error(`httpr error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.name);
        const listItem = document.createElement('li');
        pokelist.innerHTML=``;
        listItem.innerHTML = `
        <div class="pokemon-card">
            <img src="${data.sprites.front_default}" alt="${data.name} Image" class="pokemon-img"/>
            <div class="pokemon-info">
                <h3 class="pokemon-name"><strong>Name:</strong> ${data.name}</h3>
                <p><strong>Type:</strong> ${data.types[0].type.name}</p>
                <p><strong>Height:</strong> ${data.height} decimeters</p>
                <p><strong>Weight:</strong> ${data.weight} hectograms</p>
            </div>
        </div>
        `;
        pokelist.appendChild(listItem);
    })
    .catch(error => {
        console.error('error:', error);
    });
}