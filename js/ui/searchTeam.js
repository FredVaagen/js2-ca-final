import { renderTeams } from "./renderTeams.js";

export function searchTeam (teams) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        
        const searchValue = event.target.value.trim().toLowerCase(); 

        const filteredTeams = teams.filter(function (team) {
                if ( team.name.toLowerCase().startsWith(searchValue)) {
                    return true;
                } 
        });

        renderTeams(filteredTeams);
    };
    
}





