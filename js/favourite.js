import { getExisitingFavs} from "./utils/favFunctions.js";
import { CLEAR_ALL_MESSAGE } from "./constants/messages.js"
import {NO_FAVOURITES } from "./constants/messages.js"
import { displayMessage } from './ui/displayMessage.js';

const favourites = getExisitingFavs(); 

const teamContainer = document.querySelector(".team-container"); 

if(favourites.length == 0) {
    displayMessage("", NO_FAVOURITES);
    document.querySelector(".clear-all").style.display = "none";
}

// Sorting from a - z 
favourites.sort(function(a, b) { 
    return a.name - b.name  ||  a.name.localeCompare(b.name);
  });


favourites.forEach((favourite) => {
    console.log(favourite)

    teamContainer.innerHTML += `<div class="card mt-5 team favourite-card ">
                                    <img src="${favourite.logo}" alt="logo" height="130px";>
                                        <div class="card-body">
                                            <h3 class="card-text">${favourite.name}</h3>
                                            <i class="fa fa-heart"></i>
                                        </div>
                                </div>`;                               
                            }); 

const clearFavs = document.querySelector(".clear-all"); 
clearFavs.addEventListener("click", removeFavs);

function removeFavs() {

    localStorage.removeItem("favourites")

    displayMessage("", CLEAR_ALL_MESSAGE);

}

