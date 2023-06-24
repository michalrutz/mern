import { useEffect, useState } from "react"

function App() {
  const [ data, setData ] = useState()

  useEffect( () => {
    (async () => {
            try {
              const response = await fetch( 'http://localhost:3000/' );
              console.log(response)
              const jsonData = await response.json();
              setData(jsonData);
            } catch (error) {
              console.log('Error:', error);
            }
    })();
  }, []);

  return (
    <>
      <div>
        {  data ? data.message : "" }
      </div>    
    </>
  )
}

export default App
