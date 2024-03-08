import { useEffect, useState } from "react";

const api = {
  key: "0c2c0ef7446f486792d100235240803",
  base: "https://api.weatherapi.com/v1/",
};
const useWeatherApi = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${api.base}current.json?key=${api.key}&q=London`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setWeather(result);
      });
  }, []);
  return weather;
};

export default useWeatherApi;
