let delay = -0.4;
function createCard(date, day, games) {
  delay += 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span> ${day} </span></h2>
    <ul>
      ${games}
    </ul>
  </div>
     `
}


function createGame(team1, hour, team2) {
  return `
      <li>
        <img src="./assets/icon-${team1}.svg" alt="${team1} Logo" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${team2}.svg" alt="${team2} Logo" />
      </li>
       `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia"))
  +
  createCard("28/11", "Segunda", createGame("brazil", "13:00", "switzerland") + createGame("portugal", "16:00", "uruguay"))
  +
  createCard("02/12", "Sexta", createGame("brazil", "16:00", "cameroon")) 
