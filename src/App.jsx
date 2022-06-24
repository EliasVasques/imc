import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { StyledCard } from "./components/Card/Card.style";
import { Button } from "./components/Button/Button";

function App() {
  const results = [
    { name: "Magreza", bgColor1: "#909EA7", bgColor2: "#808B95", msg: "IMC está entre 0 e 18.5", thumbUp: false },
    { name: "Normal", bgColor1: "#02A860", bgColor2: "#049456", msg: "IMC está entre 18.5 e 24.9", thumbUp: true },
    { name: "Sobrepeso", bgColor1: "#E2AC30", bgColor2: "#C79826",  msg: "IMC está entre 24.9 e 30", thumbUp: false },
    { name: "Obesidade", bgColor1: "#C13735", bgColor2: "#A93130",  msg: "IMC está entre 30 e 99", thumbUp: false },
  ];

  return (
    <div className="container">
      <div className="get-info">
        <img src="src/assets/img/powered.png" className="logo" alt="logo" />
        <h1>Calcule o seu IMC.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          architecto, consequatur ullam vel distinctio obcaecati ad officia
          dolorem, eius placeat voluptatem sunt modi, blanditiis dolores
          consequuntur veniam voluptatibus sequi dignissimos.
        </p>
        <Input placeholder="Digite sua altura. Ex: 1.5 (em metros)" type="number" />
        <Input placeholder="Digite seu peso. Ex: 85 (em kg)" type="number" />
        <Button className="button-calcular">Calcular</Button>
      </div>

      <div className="result">
        {results.map((result) => (
          <StyledCard name={result.name} msg={result.msg} bgColor1={result.bgColor1} bgColor2={result.bgColor2}thumbUp={result.thumbUp} key={result.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
