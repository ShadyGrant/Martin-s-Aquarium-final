const fishCollection = [
    {
        name: "Betty",
        Species: "Longtooth Barracuda",
        Location: "Cumberland River",
        Length: 3,
        food: "Dirt",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80"
    },

    {
        name: "Nemo",
        Species: "Clownfish",
        Location: "Great Barrier Reef",
        Length: 9,
        food: "Plankton",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7xhhlta3q-wVKpgzGdTlpAHaFj%26pid%3DApi&f=1"
    },


    {
        name: "Dory",
        Species: "Blue Tang",
        Location: "New Zealand Sea",
        Length: 11,
        food: "Clownfish",
        image:"https://3.imimg.com/data3/IW/XT/GLADMIN-105863/fish-125x125.jpg"
    },


    {
        name: "Larry",
        Species: "Unicorn Fish",
        Location: "Camen Islands",
        Length: 5,
        food: "algae",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthedisneyinme.files.wordpress.com%2F2013%2F12%2Fdory.jpg&f=1&nofb=1"
    },


    {
        name: "Bob",
        Species: "Anglerfish",
        Location: "20,000 leaques under the sea",
        Length: 1,
        food: ["bottom feeders"],
        image: "https://www.petbarn.com.au/petspot/app/uploads/2011/09/summer-fish-keeping-800x533px.jpg"
    },

    {
        name: "Karen",
        Species: "Lionfish",
        Location: "New Zealand Sea",
        Length: 6,
        food: "Scad",
        image: "https://aerosouldzines.files.wordpress.com/2010/07/coral-fish2.jpg"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}