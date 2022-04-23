import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

let pokedex = [
  {
    id: 0.01,
    nome: "Mewtwo ",
    tipo: "Psychic",
    descricao:
      "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
    altura: "2.0 m",
    peso: "122.0 kg",
    categoria: "Genetic",
    habilidade: "Pressure",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
  },
  {
    id: 0.02,
    nome: "Arbok ",
    tipo: "Poison",
    descricao:
      "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    altura: "3.5 m",
    peso: "65.0 kg",
    categoria: "Cobra",
    habilidade: "Shed Skin",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
  },
  {
    id: 0.03,
    nome: "Ninetales  ",
    tipo: "Psychic",
    descricao:
      "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
    altura: "1.1 m",
    peso: "19.9 kg",
    categoria: "Fox",
    habilidade: "Flash Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
  },
  {
    id: 0.04,
    nome: "Sawk",
    tipo: "Fighting",
    descricao:
      "If you see a Sawk training in the mountains in its single-minded pursuit of strength, it's best to quietly pass by.",
    altura: "1.4 m",
    peso: "51.0 kg",
    categoria: "Karate",
    habilidade: "Inner Focus",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/539.png",
  },
  {
    id: 0.05,
    nome: "Cyndaquil",
    tipo: "Fire",
    descricao:
      "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
    altura: "0.5 m",
    peso: "7.9 kg",
    categoria: "Fire Mouse",
    habilidade: "Blaze",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    pokedex,
  });
});

app.get("/detalhes/:id", (req, res) => {
  let pokemon;
  pokedex.filter((element) => {
    if (element.id == req.params.id) {
      pokemon = element;
    }
  });
  console.log(pokemon);
  res.render("detalhes.ejs", {
    pokemon,
  });
});
app.get("/cadastro", (req, res) => {
  res.render("cadastro.ejs");
});
app.post("/cadastro", (req, res) => {
  const pokemon = req.body;
  pokemon.id = (pokedex.length / 100 + +0.01).toFixed(2);
  pokedex.push(pokemon);
  res.redirect("/");
});

const port = 3003;
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
