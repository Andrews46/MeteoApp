import { useState } from 'react';
import styles from './App.module.scss'
import NavBar from './components/navBar'
import Card from './components/card'
import MiniCard from './components/MiniCard';
import { getWeatherData } from "./utils/https";
import {getWeatherCardMini} from "./utils/https";
function App() {
  const [info, setInfo] = useState<any>(null);
 const [miniInfo,setMiniInfo]= useState<any>({});
 
    const handleSearch = async (searchText : string) => {
     
    try {
      const data = await getWeatherData(searchText);
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
        

          
        {info && <Card info={info} />}
        
         {info && <MiniCard miniInfo={miniInfo} />}
      </div>
      
    </>
  )
}

export default App
