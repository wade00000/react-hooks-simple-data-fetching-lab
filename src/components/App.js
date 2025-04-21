import { useEffect,useState } from "react";

// create your App component here
function App(){
    const [isLoaded,setIsLoaded] = useState(false)
    const [fetchInfo,setFetchInfo] = useState([])
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>{
             setFetchInfo(data.message)
             setIsLoaded(true)
        })
    },[])

    if(!isLoaded){return <p>Loading...</p>}

        return(
            <img src={fetchInfo} alt="A Random Dog"/>
        )


}

export default App