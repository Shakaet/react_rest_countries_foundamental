
import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {

    console.log(country)

    let {name,flags,population,area,cca3} = country

           let[visited,setVisited]= useState(false)

          let handleBtn=()=>{

            // setVisited(true)
            setVisited(!visited)

          }

          console.log(handleVisitedCountry)


    return (
        <div className={`country ${visited ? "visited":"non-visited"}`}>

            <h1 style={{color: visited ?"purple":"blue"}}>Name: {name.common}</h1>

            <img style={{borderRadius:"10px"}} src={flags.png} alt="" />
            <p className={`${visited && "visited-text-color"}`}>Population: {population}</p>
            <p className={`${visited && "visited-text-color"}`}>Area: {area}</p>
            <p className={`${visited && "visited-text-color"}`}><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlag(country)}>Add Flag</button>
            <button onClick={handleBtn}>{visited ? "Visited":"Going"}</button>

            {visited ? <p className={`${visited && "visited-text-color"}`}>I have already visited this country</p>: ""}
            
            
        </div>
    );
};

export default Country;