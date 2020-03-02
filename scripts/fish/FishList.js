 
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
import Fish from "./Fish.js";

const contentTarget = document.querySelector(".fishList")

const FishList = () => {
    let fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation

    }

    fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }

    fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

export default FishList