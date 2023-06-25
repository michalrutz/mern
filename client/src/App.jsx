import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function App() {
  const [ data, setData ] = useState()

  useEffect( () => {
    (async () => {
            try {
              const response = await fetch( import.meta.env.VITE_API_BASE_URL+'characters' );
              console.log(response)
              const jsonData = await response.json();
              console.log(jsonData)
              setData(jsonData);
            } catch (error) {
              console.log('Error:', error);
            }
    })();
  }, []);

  return (
    <>
      <div>
        { data ? data.map( character => (
          <div key={character._id }>
            <Link to={"character/"+character._id} >{character.name}</Link>
          </div>
          ) )
          : ""
        }
      </div>    
    </>
  )
}

export default App
