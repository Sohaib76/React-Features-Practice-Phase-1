import React, {useState,useEffect} from 'react'
import Recipie from './Recipie'

const ApiFetchUsingUseEffect = () =>{

    const APP_ID = '1d7bff0f'
    const API_KEY = '689bd435b22c129be0918d98f936429a'
    const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`


    const [recipies, setRecipies] = useState([])


    useEffect(() => {
        loadData()
        
    }, [])


    const loadData = async()=>{
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
        setRecipies(data.hits)
    }

    console.log(recipies)

    return(
       
        <div>
            
            {
                
                recipies.map((r,id)=>(
                    
                    <Recipie key={id} title={r.recipe.label} source={r.recipe.source} calories={r.recipe.calories} image={r.recipe.image}/>
                ))
            }
        </div>
    )

}


export default ApiFetchUsingUseEffect;