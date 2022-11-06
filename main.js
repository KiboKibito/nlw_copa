document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "portugal") +
      createGame("southkorea", "19:00", "argentina")
  ) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "camaroon"));

function createCard(date, day, games) {
  return `
    <div class="card">
  <h2> ${date}<span>${day}</span></h2>
  <ul>
    ${games}
    </ul>
</div>
    
    `;
}

function createGame(team1, hour, team2) {
  return `
    <li>
      <img src="./assets/icon_${team1}.svg" alt="bandeira_${team1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon_${team2}.svg" alt="bandeira_${team2}" />
    </li>
    
    `;
}
