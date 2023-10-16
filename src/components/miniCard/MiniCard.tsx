/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from "react";
import styles from "./index.module.scss";


const MiniCard  =  ({ miniInfo } : { miniInfo: { city:{
  name:"nome della citta"
},list: any[]
,forecast:number;
} }) => {
  
  
  const [dailyData, setDailyData] = useState<number[]>([]);
const [dailyOre,setDailyOre] = useState<string[]>([]);

  useEffect(() => {
    const fetchData =() => {
      try {
        if (miniInfo && miniInfo.list && miniInfo.list.length > 0) {
          // Estrai i dati giornalieri
          const dailyForecast = miniInfo.list.filter((forecast
            , index) => index % 8 === 0);
 const dailyOreImpostazione = dailyForecast.map((forecast) => {
            const data = new Date(forecast.dt_txt);
            console.log(data)
            // return data.toLocaleTimeString([], { hour: '2-digit' });
            
            return data.toDateString([],{day: ""});
          });
          // Imposta i dati giornalieri nello stato
          setDailyData(dailyForecast);
setDailyOre(dailyOreImpostazione);
        } else {
          setDailyData([]); 
          setDailyOre([])
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (miniInfo) {
      fetchData();
    }
  }, [miniInfo]);

  const convertKelvinToCelsius = (kelvin : number) => {
    return kelvin - 273.15;
  };
  // console.log("ciao sono l orario",dailyOre)
  return (
    <div className={styles.MiniCard}>
     
      {dailyData.map((day, index) => (
        <div className={styles.MiniCardContainer}>
        <div key={index} className={styles.container}>

          <h3>{miniInfo?.city?.name}</h3>
          <h3>{` ${dailyOre[index]}`}</h3>
          <h3>{`Temperatura: ${convertKelvinToCelsius(day.main.temp).toFixed(1)}°C`}</h3>
          {day.weather && (
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          )}
          <h4>{`Min Temp: ${convertKelvinToCelsius(day.main.temp_min).toFixed(1)}°C`}</h4>
          <h4>{`Max Temp: ${convertKelvinToCelsius(day.main.temp_max).toFixed(1)}°C`}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniCard;




