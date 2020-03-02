import { useTips } from "./TipDataProvider.js"
import Tips from "./Tip.js"

// putting a function into a variable named TipList
const TipList = () => {

    // searching the html with querySelector for an element with the class of "tipList" 
    const contentElement = document.querySelector(".tipList")
    // invoking the useTips function that returns the array of tips in the variable arrayOfTips
    const arrayOfTips = useTips()
    // looping over arrayOfTips
    for (const tipObject of arrayOfTips) {
        // each tipObject is being added to html
        contentElement.innerHTML += Tips(tipObject)
    }
}

export default TipList