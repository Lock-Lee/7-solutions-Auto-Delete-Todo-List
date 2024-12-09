import { useEffect, useState } from "react";

import "./App.css";
const App: React.FC = () => {
  type Item = {
    type: "Fruit" | "Vegetable";
    name: string;
  };

  const initialItems: Item[] = [
    { type: "Fruit", name: "Apple" },
    { type: "Vegetable", name: "Broccoli" },
    { type: "Vegetable", name: "Mushroom" },
    { type: "Fruit", name: "Banana" },
    { type: "Vegetable", name: "Tomato" },
    { type: "Fruit", name: "Orange" },
    { type: "Fruit", name: "Mango" },
    { type: "Fruit", name: "Pineapple" },
    { type: "Vegetable", name: "Cucumber" },
    { type: "Fruit", name: "Watermelon" },
    { type: "Vegetable", name: "Carrot" },
  ];
  const [dataList, setdataList] = useState<Item[]>(initialItems);
  const [fruitList, setFruitList] = useState<Item[]>([]);
  const [vegetableList, setVegetableList] = useState<Item[]>([]);

  const toMove = (item: Item) => {
    console.log(item.type);
    setdataList((prev) => prev.filter((el) => el.name !== item.name));
    if (item.type == "Fruit") {
      setFruitList((prev) => [...prev, item]);
    } else {
      setVegetableList((prev) => [...prev, item]);
    }
    setTimeout(() => {
      setFruitList((prev) => prev.filter((el) => el.name !== item.name));
      setVegetableList((prev) => prev.filter((el) => el.name !== item.name));
      setdataList((prev) => [...prev, item]);
    }, 5000);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="container">
        <div
          style={{
            width: "15vw",
          }}
        >
          <div
            style={{
              gap: 10,
              display: "flex",
              flexDirection: "column",
              width: "15vw",
            }}
          >
            {dataList.map((item, idx) => {
              return (
                <div
                  className="card"
                  onClick={() => {
                    toMove(item);
                  }}
                  key={idx}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <div style={{ gap: 10, display: "flex", flexDirection: "column" }}>
            <div className="header">Fruit</div>
            <div className="table">
              {fruitList.map((item, idx) => {
                return (
                  <div className="card" key={"fruitList" + idx}>
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content">
          <div style={{ gap: 10, display: "flex", flexDirection: "column" }}>
            <div className="header">Vegetable</div>
            <div className="table">
              {vegetableList.map((item, idx) => {
                return (
                  <div className="card" key={"vegetable" + idx}>
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
