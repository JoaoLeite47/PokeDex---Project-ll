import express from "express";
// import req from "express/lib/request";
import path from "path";
const app = express();

app.set("view engine", "ejs");

const __dirname = path.resolve(path.dirname(""));
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
  {
    id: "0.01",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    name: "Charmander",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    type: "Fire ↑",
    height: "0.6 m",
    weight: "8.5 Kg",
    category: "Lizard",
    abilities: "Blaze",
  },
  {
    id: "0.02",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    name: "Squirtle",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    type: "Water ↑",
    height: "0.5 m",
    weight: "9.0 Kg",
    category: "Tiny Turtle",
    abilities: "Torrent",
  },
  {
    id: "0.03",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    name: "Bulbasaur",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    type: "Grass ↑",
    height: "0.7 m",
    weight: "6.9 Kg",
    category: "Seed",
    abilities: "Overgrow",
  },
];

app.get("/", (req, res) => {
  const pokemon = undefined;
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length / 100 + +0.01;
  pokedex.push(pokemon);

  res.redirect("/");
});

const port = 3001;
app.listen(port, () => console.log("Server on http://localhost:3001"));
