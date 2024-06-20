
import { useLoaderData } from "react-router";


const Homepage = () => {
//Pwede sya kahit saaang components, nilagay ko sya sa main

const items = useLoaderData();
console.log(items)

  return (
    <>
  
  {items.map(loads =>{
    return(
        <div key={loads.id}>
            <span>{loads.id}</span>
        <p>{loads.title}</p>
        </div>
    )
  })}
    
    </>
  )
}

export const loads = async() =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
  
        const data = await response.json();
        //need ng returnnnnnnnnn else mag eerors
       //pag na return na available na sya sa component na 2     
        return data;
    }catch(error){
        console.log(error)
    }
}

export default Homepage