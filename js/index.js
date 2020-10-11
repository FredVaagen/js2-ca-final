import { url } from "./constants/settings.js";
import { renderTeams } from "./ui/renderTeams.js";
import { searchTeam } from "./ui/searchTeam.js";
import { displayMessage } from "./ui/displayMessage.js";

const teamsUrl = url + "teams";

async function getTeams() {
    try {
        const response = await fetch(teamsUrl);
        const json = await response.json();

        const teams = json;
      
        renderTeams(teams);
        searchTeam(teams);
       
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".teams-container");
    }
}

getTeams();

