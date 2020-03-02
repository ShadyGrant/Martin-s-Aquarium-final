const tipCollection=[
    

    {tip: "Make sure tank has clean water"},
   
    {tip: "Make sure the tank has the right tempreature"},
   
    {tip: "Make sure to feed them daily"},

    {tip: "Make sure to clean the tank once a week"}
   
       
   ]
   
   // making a copy of tipCollection and putting it into useTips
   export const useTips = () => {
       return tipCollection.slice()
   }