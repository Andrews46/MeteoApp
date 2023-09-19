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

const API_KEYS = "15197af3f30fed8dd93686eaa72c9ce9";
const BASE_URLS = `https://api.openweathermap.org/data/2.5/forecast`;

const getWeatherCardMini = async (city) => {
  console.log("Chiamata a getWeatherCardMini con città:", city);
  const params = new URLSearchParams({
    q: city,
    appid: API_KEYS,
  });

  const url = `${BASE_URLS}?${params}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (res.status === 200) {
    const data = await res.json();
    console.log("dati ricevuti", data);
    return data;
  } else {
    throw new Error(`Error fetching weather data: ${res.status}`);
  }
};

  export { getWeatherCardMini };