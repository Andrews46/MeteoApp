// export const BASE_URL="https://api.openweathermap.org/data/2.5/weather?q=Palermo&appid="
//  export const API_KEY="15197af3f30fed8dd93686eaa72c9ce9";
// export const GET = async () => {
//     const res = await fetch(BASE_URL + API_KEY);
//     const data = await res.json();
  
//     return data;
//   };

// const API_KEY = "15197af3f30fed8dd93686eaa72c9ce9";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=genova&appid=";
// console.log(BASE_URL);
// const GET = async () => {
//   const res = await (`${BASE_URL}?api_key=${API_KEY}`);
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// export { GET };
// const API_KEY = "15197af3f30fed8dd93686eaa72c9ce9";
// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=genova&appid=${API_KEY}`;

// const getWeatherData = async (city) => {
//   const res = await fetch(`${BASE_URL}&q=${city}`);
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// export { getWeatherData };

const API_KEY = "15197af3f30fed8dd93686eaa72c9ce9";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const getWeatherData = async (city) => {
  const params = new URLSearchParams({
    q: city,
    appid: API_KEY,
  });

  const url = `${BASE_URL}?${params}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (res.status === 200) {
    const data = await res.json();
    console.log(data);
    return data;
  } else {
    throw new Error(`Error fetching weather data: ${res.status}`);
  }
};

export { getWeatherData };