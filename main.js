import initializeDetailButtonEvents from './dialog.js'
import { useFish } from './scripts/fish/FishDataProvider.js'
import FishList from './scripts/fish/FishList.js'
import TipList from './scripts/tips/TipList.js'
TipList()



const arrayOfTheFishObjects = useFish()


FishList()

initializeDetailButtonEvents()
