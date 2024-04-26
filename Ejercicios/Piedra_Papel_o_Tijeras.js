jugador1 = "Papel";
jugador2 = "Piedra";

function piedraPapelTijeras(e1, e2) {
  if (e1 === "Piedra" && e2 === "Tijera") {
    console.log("Gana el Jugador 1");
  } else if (e1 == "Piedra" && e2 === "Papel") {
    console.log("Gana el Jugador 2");
  } else if (e1 == "Piedra" && e2 === "Piedra") {
    console.log("Empate!");
  } else if (e1 == "Papel" && e2 === "Tijeras") {
    console.log("Gana el Jugador 2");
  } else if (e1 == "Papel" && e2 === "Piedra") {
    console.log("Gana el Jugador 1");
  } else if (e1 == "Papel" && e2 === "Papel") {
    console.log("Empate!");
  } else {
    console.log("Opcion no valida");
  }
}

piedraPapelTijeras(jugador1, jugador2);