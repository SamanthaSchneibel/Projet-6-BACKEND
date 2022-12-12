import { useEffect, useState } from "react";
import { addedpokemon, updatepokemon, deletepokemon } from "../api/pokedexapi";

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const recupokemon = addedpokemon();
        recupokemon
            .then(result => setPokemons(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <div className="pokemon-list">
        <img className="background-pc" src="https://pixelmongenerations.com/wiki/images/9/9e/PC_Background_Forest.png"></img>
        <div className="flex"> {
            pokemons.map((pokemon, key) => {
                return <div key={key} className="bloc-pokedex">
                    <img className="avatar" src={pokemon.img1} alt="" />
                    <img className="avatar-pixel" src={pokemon.img2} alt="" />
                    <img className="type" src={pokemon.type} alt="" />
                    <h2>{pokemon._id}<br/>Numéro du pokedex: {pokemon.num} <br/>Nom: {pokemon.name} <br/> Description: {pokemon.description}</h2>
                    <input type="text" id={key} name="Nom" required className="required text"/>
                    <button onClick={() => updatepokemon(pokemon, key)}>Donner un surnom:</button>
                    <button onClick={() => deletepokemon(pokemon)}>Supprimer le pokemon:</button>
                </div>
            })}
        </div>
    </div>;
};

export default Pokedex;