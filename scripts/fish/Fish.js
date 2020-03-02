/**
 *  Fish which renders individual fish objects as HTML
 */
const Fish = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name}">Details</button>
            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.Species}</div>
                <div>Location: ${fish.Location}</div>
                <div>Length: ${fish.Length}</div>
                <div>Food: ${fish.food}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Fish