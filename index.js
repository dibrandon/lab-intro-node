const express = require("express");
const app = express();
const port = 8008;

app.use(express.static("public")); //todos mis elementos estaticos estan en public

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Pagina de Home");
});

app.get("/casa", (req, res) => {
  res.send("Esta es mi casa");
});

app.get("/friends/:friendParam", (req, res) => {
  console.log(req.params);
  //res.send("My friends")
  if (req.params.friendParam === "Victor") {
    res.send("Información sobre Victor");
  } else if (req.params.friendParam === "Curro") {
    res.send("Información sobre Curro");
  } else {
    res.send("No tengo mas amigos");
  }
});

app.get("/speak/:languageParam", (req, res) => {
  if (req.params.languageParam === "pig") {
    res.send("The pig says 'Oink!'");
  } else if (req.params.languageParam === "cow") {
    res.send("The cow says 'Moo'");
  } else if (req.params.languageParam === "dog") {
    res.send("The dog says 'Woof Woof!'");
  } else {
    res.send("I dont have that lenguage'");
  }
});

app.get("/hola", (req,res) => {
    res.status(302).send("Esto lo escribi yo");
})

//greet/hola/3

app.get("/greet/:greetWord/:timesGreet", (req, res) => {
  const { greetWord, timesGreet } = req.params;
  let fullMessage = greetWord.repeat(timesGreet);
  res.send(fullMessage);
});

app.get("/mi-pagina", (req, res) => {
  res.sendFile(__dirname + "/views/mi-pagina.html"); //ruta absoluta del elemento
});

app.get("/sobre-mi", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/sobre-mi.html"); //ruta absoluta del elemento
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/hola", (req, res) => {
  console.log(req.params);
  //res.send("My friends")
  if (req.params.friendParam === "hola") {
    res.send("esto lo he escrito yo");
  } else if (req.params.friendParam === "Curro") {
    res.send("Información sobre Curro");
  } else {
    res.send("No tengo mas amigos");
  }
});

//Actividad
//1.Crea una coleccion de postman que llame a todas los endpoint. hecho
//2.Crea un endpoint nuevo GET /hola que devuelva: 
// codigo 302 y 'Esto lo he escrito yo'. hecho
//3.Crea un endpoint nuevo GET /sobre-mi que devuelva:
// codigo 200 y la pagina sobre mi que esta en views. hecho
//Llama con Postman a estos endpoints. hecho

