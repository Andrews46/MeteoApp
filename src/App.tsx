import { useState } from 'react';
import './App.scss'
import NavBar from './components/navBar'
import Card from './components/card'
import { getWeatherData } from "./utils/https";
function App() {
  const [info, setInfo] = useState<any>(null);
 
  // useEffect(() => {
  //   getWeatherData("/city")
  //   const fetchData = async () => {
  //      const data = await getWeatherData();
  //     setInfo(data);
  //   };

  //   fetchData();
  // }, []);


 
    const handleSearch = async (searchText : string) => {
     
    try {
      const data = await getWeatherData(searchText);
      setInfo(data);
      
    } catch (error) {
      
      setInfo(null); // In caso di errore, reimposta info a null
     
    }
  };

  

  return (
    <>
      <div>
        
        <h1>
          MeteoApp
        </h1>
        <NavBar onSearch={handleSearch}/>
        

          
        {info && <Card info={info} />}
          
        
      </div>
      
    </>
  )
}

export default App
