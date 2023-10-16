/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from 'react';
import styles from './App.module.scss'
import NavBar from './components/navBar'
import Card from './components/card'
import MiniCard from './components/miniCard';
import { getWeatherData ,getWeatherCardMini } from "./utils/https";

interface WeatherData  {
  temperature:number;
tempMin:number;
tempMax:number;
velocita:number;
}
interface WeatherCardMiniData{
  city:string;
  dailyOre:number;
  dailyData:number;
}

function App() {
  const [info, setInfo] = useState<WeatherData | null>(null);
 const [miniInfo,setMiniInfo]= useState<WeatherCardMiniData| null>(null);
 
    const handleSearch = async (searchText : string) => {
     
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data  = await getWeatherData(searchText);
      setInfo(data);
      console.log("ciao dati",data);
    } catch (error) {
      
      setInfo(null); // In caso di errore, reimposta info a null
     
    }
  };


const handleSearchMiniCard = async (searchTexts : string)=>{
  try{
const data1 =await getWeatherCardMini(searchTexts);
console.log(data1)
setMiniInfo(data1);
  } catch (error){
    setMiniInfo(null);
  }
}

  return (
    <>
      <div className={styles.App}>
      <h1 className={styles.titleApp}>Previsioni</h1>
        <NavBar onSearch={handleSearch}
        onSearchs={handleSearchMiniCard}/>
        

          
        {info && <Card info ={info} />}
        
         {info && <MiniCard miniInfo={miniInfo} />}
      </div>
      
    </>
  )
}

export default App
