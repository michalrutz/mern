import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

async function getCharacter(setter, id) {
        fetch(import.meta.env.VITE_API_BASE_URL+"character/"+id, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                }
        })
        .then( (res) => res.json() )
        .then((data) => {
                console.log(Object.entries(data[0].attributes));
                setter(data[0]);
        })
        .catch((err) => {
                console.error(err);
        }); 
}

async function deleteCharacter(id) {
        console.log("delete: "+id)
        fetch('http://localhost:3000/character/'+id, {
                method: 'DELETE'
              })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Failed to delete data');
                }
              })
              .then((data) => {
                console.log(data.message);
                window.location.href = '/characters';
              })
              .catch((error) => {
                console.error(error);
                // Handle error case
              });
}


function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState("")
  const { name, attributes, skills } = character
  useEffect( ()=> { getCharacter(setCharacter, id) }, [])

  return <div className="characterSheet">
        <Link to={"/characters"}>characters</Link>
        Character: {name}
        <div className="attributes">
        {character !== "" ? (
        Object.entries(attributes).map(([key, value], index) => (
                <div key={key} className="attr" id={key}>
                        <div className="attr-h">
                                <h3>{key} </h3>
                                <h3>{value}</h3>
                        </div>
                        
                        {Object.entries(skills).map(([key, v], i) => (
                                i < 4*(index+1) && i >= index*4 ? (
                                        <div key={key} className="skill">
                                                <span key={key}>{key}</span>
                                                <span key={v}>+{v}</span> 
                                        </div>
                                )
                        : null
                ))}
                </div>
        ))
        ) : (
        ""
        )}
        </div>
        <button onClick={ ()=> {deleteCharacter(id)} }>delete</button>

        </div>;
}

export default Character;