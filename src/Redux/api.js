import axios from "axios";

const YOUR_APP_ID="7341a903";
const YOUR_APP_KEY="81b0dca8ab2ef8fe59083546ad9884cf";


export const getRecipe = async(query)=>{
    const url=`https://api.edamam.com/search?q=grapes&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    console.log("test",axios.get(url))
    return await axios.get(url)
    
}


89f551cc72931ac0642c29c0e0db8885