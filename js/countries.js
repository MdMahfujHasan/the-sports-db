const loadCountries = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=')
        .then(res => res.json())
        .then(data => displayTeams(data.teams))
}
loadCountries();

const displayTeams = allTeams => {
    allTeams.map(team => showTeams(team))
}

const showTeams = team => {
    const displayCountries = document.getElementById('display-countries');
    const div = document.createElement('div');
    div.innerHTML = `
     <div id="singleTeam">
        <h2>${team.strAlternate}</h2>
        <p>${team.strDescriptionEN}</p>
     </div>
    `
    displayCountries.appendChild(div);
}
