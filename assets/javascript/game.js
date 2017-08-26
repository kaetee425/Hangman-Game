var pokemon = ["pikachu", "celebi", "eevee", "snorlax", "ditto", "charizard", "greninja", "charmander", "squirtle", "mewtwo", "rockruff", "pichu", "gyarados", "lucario", "dragonite", "raichu", "bulbasaur", "gengar", "mew", "garchomp", "umbreon", "jigglypuff", "slowpoke", "togepi", "magikarp", "lapras", "growlithe", "vulpix", "metagross", "milotic", "blastoise", "meowth", "abra", "munchlax", "vaporeon", "alakazam", "marowak"]
var ranPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];

var string;
var count = 0;
var answer = [];

function hangman() {
	for (var i = 0; i < ranPokemon.length; i++) {
		answer[i] = "_";
	} 

	string = answer.join(" ");
	document.getElementById("word").innerHTML = string;

}



	$(".reset").on("click", function() {
        $("#display").empty()
     })