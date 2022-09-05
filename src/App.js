import "./styles.css";
import HouseList from "./HouseList";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";
import { houseData } from "./data";

export default function App() {
  const [houses, setHouses] = useState(houseData);
  const [data, setData] = useState(houseData);

  return (
    <>
      <Header />
      <div className="App">
        <Search houses={houses} setData={setData} setHouses={setHouses} />
        <HouseList houses={houses} data={data} />
      </div>
    </>
  );
}
