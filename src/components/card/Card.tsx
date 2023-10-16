/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState, useEffect } from "react";
import styles from "./index.module.scss";


const Card=({ info }: { info: { city:{
  name:"nome della citta"
},main: any[];
}
 }) => {
  const [temperature, setTemperature] = useState(null);
const [tempMin, setTempMin] = useState(null);
const [tempMax, setTempMax] = useState(null);
const [velocita, setVelocita] = useState<number | null>(null);
//  const declareVariable = (
//   setTemperature: number,
//   setTempMin: number ,
//   setTempMax: number ,
//   setVelocita: number,
// )
 useEffect(() =>{
    const fetchData =()=>{  
        setTemperature(info.main.temp);
        setTempMin(info.main.temp_min);
        setTempMax(info.main.temp_max);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setVelocita(info.wind.speed)
     
    }

    if (info) {
      fetchData();
    }
  }, [info]);

  const convertKelvinToCelsius = (kelvin : number) => {
    return kelvin - 273.15;
  };
  const convertToMetriInkmh = (ms : number)=> {
    return ms * 3.6;
  }
  
  const showTemperature = temperature !== null ? convertKelvinToCelsius(temperature).toFixed(1) : "--";
  const showTempMin = tempMin !== null ? convertKelvinToCelsius(tempMin).toFixed(1) : "--";
  const showTempMax = tempMax !== null ? convertKelvinToCelsius(tempMax).toFixed(1) : "--";
const showVelocita =  velocita !== null? convertToMetriInkmh(velocita).toFixed(1) : "--";


  return (
    <div className={styles.Card}>
      <div className={styles.container}>

      <div className={styles.CardTemperatura}>

       <h2>{info?.name}</h2>
      
      <h1 >
        
        {showTemperature}°C
      </h1>
      </div>
      <div className={styles.longLat}>
      <h3>lon-{info?.coord?.lon}</h3>
      <h3>lat-{info?.coord?.lat}</h3>
      </div>
      <div className={styles.longLat}>
      <h3>{`Umidità: ${info?.main?.humidity}%`}</h3>
      <h3>{`Vento:${showVelocita} km/h`}</h3>
      </div>
      <div className={styles.tempMedio}>

      <h3 >min-{showTempMin}°C</h3>
      <h3 >max-{showTempMax}°C</h3>
      </div>
      {info?.weather && (
        <img className={styles.imgCard}
        src={`http://openweathermap.org/img/wn/${info?.weather[0]?.icon}.png`}
        alt="Weather Icon"
        />
      )}
        <h3 className={styles.descImage}>
        {`${info?.weather[0]?.description}`}
        </h3>
        </div>
        <div>
        <h2 className={styles.Title}>Giornaliero</h2>

        </div>
    </div>
  );
};

export default Card;