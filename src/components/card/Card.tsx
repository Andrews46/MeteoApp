// import { useState, useEffect } from "react";
// import styles from "./index.module.scss";
// import { getWeatherData } from "../../utils/https.js";
// import {FaTemperatureHigh}from "react-icons/fa"
// const Card = ({info,setInfo}) => {
//   const convertKelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };
  

//   return (
//     <div className={styles.Card}>
//       <h3>Card Meteo</h3>
//       <span>lon-{info.coord?.lon}</span>
//       <hr />
//       <span>lat-{info.coord?.lat}</span>
//       <h3>
//         <FaTemperatureHigh />
//         temp-{convertKelvinToCelsius(info.main?.temp_max).toFixed(1)}°C
//       </h3>
//         <h3>{`Umidità: ${info.main?.humidity}%`}</h3>
//         <h3>{`Vento:${info.wind?.speed} m/s`}</h3>
//         {info.weather && (
//         <img
//           src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
//           alt="Weather Icon"
//         />
//       )}
//       <h3>{info?.name}</h3>

//     </div>
//   );
// };

// export default Card;





// import { useState, useEffect } from "react";
// import styles from "./index.module.scss";
// import { getWeatherData } from "../../utils/https.js";
// import { FaTemperatureHigh } from "react-icons/fa";

// const Card = ({ info, setInfo }) => {
//   const [temperature, setTemperature] = useState(null);

//   useEffect(() => {
//     const data = getWeatherData(info.city);
//     setTemperature(data.main);
//   }, [info.city]);

//   const convertKelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };

//   return (
//     <div className={styles.Card}>
//       <h3>Card Meteo</h3>
//       <span>lon-{info.coord?.lon}</span>
//       <hr />
//       <span>lat-{info.coord?.lat}</span>
//       <h3>
//         <FaTemperatureHigh />
//         temp-{convertKelvinToCelsius(temperature).toFixed(1)}°C
//       </h3>
//       <h3>{`Umidità: ${info.main?.humidity}%`}</h3>
//       <h3>{`Vento:${info.wind?.speed} m/s`}</h3>
//       {info.weather && (
//         <img
//           src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
//           alt="Weather Icon"
//         />
//       )}
//       <h3>{info?.name}</h3>
//     </div>
//   );
// };

// export default Card;


import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { getWeatherData } from "../../utils/https.js";


const Card = ({ info }) => {
  const [temperature, setTemperature] = useState(null);
 const [tempMin,setTempMin] = useState(null);
 const [tempMax,setTempMax] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Info:", info);
        
        setTemperature(info.main.temp);
        setTempMin(info.main?.temp_min);
        setTempMax(info.main.temp_max);
      } catch (error) {
        console.error(error);
      }
    };

    if (info) {
      fetchData();
    }
  }, [info]);

  const convertKelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };
  const showTemperature = temperature !== null ? convertKelvinToCelsius(temperature).toFixed(1) : "--";
  const showTempMin = tempMin !== null ? convertKelvinToCelsius(tempMin).toFixed(1) : "--";
  const showTempMax = tempMax !== null ? convertKelvinToCelsius(tempMax).toFixed(1) : "--";

  return (
    <div className={styles.Card}>
       <h4>{info?.name}</h4>
      
      <h1 className={styles.CardTemperatura}>
        
        {showTemperature}°C
      </h1>
      <h3>lon-{info?.coord?.lon}</h3>
      
      <h3>lat-{info?.coord?.lat}</h3>
      <h3>{`Umidità: ${info?.main?.humidity}%`}</h3>
      <h3>{`Vento:${info?.wind?.speed} m/s`}</h3>
      <h3>min-{showTempMin}°C</h3>
      <h3>max-{showTempMax}°C</h3>
      {info?.weather && (
        <img className={styles.imgCard}
          src={`http://openweathermap.org/img/wn/${info?.weather[0]?.icon}.png`}
          alt="Weather Icon"
        />
      )}
     
    </div>
  );
};

export default Card;