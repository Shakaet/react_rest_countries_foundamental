// rsc

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./country.css"



const Countries = () => {

    let[value,setCountries]= useState([])

    let [visitedCountry,setVisitedCountry] =useState([])

    let [visitedFlag,setVisitedFlag]=useState([])

    useEffect(()=>{

        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))

    },[])


    let handleVisitedCountry=(country)=>{

        console.log("add this your visited country")
        let newA=[...visitedCountry,country]
          setVisitedCountry(newA)

    }

    let handleVisitedFlag= (country)=>{

         let newArr= [...visitedFlag,country]
         setVisitedFlag(newArr)


    }


    return (
        <div>

            <p>Countries:{value.length}</p>

            <div>
                <h3>Visited Country :{visitedCountry.length}</h3>

                
                <ul>
            


                    {
                        visitedCountry.map(country=><li>{country.name.common}</li>)
                    }


                   


                </ul>
                
            </div>

            <div>
                {
                    visitedFlag.map(flag=><img  style={{width:"100px"}} src={flag.flags.png}></img>)
                }
            </div>


            <div className="country-container">
            {
                value.map(item=><Country key={item.cca3}
                     handleVisitedCountry={handleVisitedCountry} 
                     handleVisitedFlag={handleVisitedFlag}
                    country={item}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;