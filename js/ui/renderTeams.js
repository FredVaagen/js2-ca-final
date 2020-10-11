import { EMPTY_FILTER_RESULTS } from "../constants/messages.js";
import { displayMessage }  from './displayMessage.js';
import { getExisitingFavs} from "../utils/favFunctions.js" ;


const favourites = getExisitingFavs(); 

const teamContainer = document.querySelector(".team-container");

export function renderTeams (teamsToRender) {
    teamContainer.innerHTML = "";

    if ( teamsToRender.length == 0) {
        displayMessage("", EMPTY_FILTER_RESULTS);
    }

    
    // Sorting from a - z 
    teamsToRender.sort(function(a, b) { 
        return a.name - b.name  ||  a.name.localeCompare(b.name);
      });

    teamsToRender.forEach(function(team) {
        let cssClass = "far"


        const doesObjectExist = favourites.find(function(fav) {
            return parseInt(fav.id) === team.id;
        });

        if(doesObjectExist) {
            cssClass="fa";
        }
        const logo = `http://localhost:1337${team.logo.formats.thumbnail.url}`
        
        teamContainer.innerHTML += `<div class="card team ">
                                       <img src=${logo} alt="logo" height="130px";>
                                            <div class="card-body ">
                                                <h3 class="card-text ">${team.name}</h3>
                                                <p class="card-text">City: ${team.city}</p>
                                                <p class="card-text">Stadium: ${team.stadium}</p>
                                                <i class= "${cssClass} fa-heart" data-id="${team.id}" data-name="${team.name}" data-logo="${logo}"></i>
                                        </div>
                                    </div>`;                               
    }); 

    const favButtons = document.querySelectorAll(".team i");

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {
       
       this.classList.toggle("fa")
       this.classList.toggle("far")

       const id = this.dataset.id;
       const name = this.dataset.name;
       const logo = this.dataset.logo
       

      const currentFavs = getExisitingFavs();


        const teamInfoExist = currentFavs.find(function(fav) {
            return fav.id === id; 
        });

        if(teamInfoExist === undefined) {
            const teamInfo = { id: id, name: name, logo: logo};
            currentFavs.push(teamInfo);
            saveFavs(currentFavs);   
        } else {
            const newFavs = currentFavs.filter((fav) => fav.id !== id);
            saveFavs(newFavs);
        }
    }

    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }

}   

