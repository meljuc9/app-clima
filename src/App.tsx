import { useEffect, useState } from "react";
import { getWaetherByCoords } from "./api/fetchWeather";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAN = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWaetherByCoords(LAN, LON);
        setFetchedData(data);
      } catch (err) {
        setError("Por favor revise su conexión a internet 💻");
      }
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox />
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </div>
  );
}

export default App;
