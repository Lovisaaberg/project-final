import { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const MassConverterFont = styled.div`
    background: #000000;

    h2.space-mono-bold {
      font-family: "Space Mono";
      color: #FFFFFF;
    };
    p.roboto-mono {
      font-family: "Roboto Mono";
    };
    input.roboto-mono {
      font-style: italic;
      background: #000000;
      border: 2px solid #FFFFFF;
      border-radius: 5px;
      padding: 5px;
      margin-right: 5px;
      margin-bottom: 10px;
    };
    div.results {
      background: #000000;
      font-family: "Roboto Mono";
      color: #FFE4C4;
    };
  }`;

const gravityFactors = {
  Mercury: 0.38,
  Venus: 0.91,
  Earth: 1.0,
  Mars: 0.38,
  Jupiter: 2.34,
  Saturn: 1.06,
  Uranus: 0.92,
  Neptune: 1.19,
  Pluto: 0.063,
};

const calculateWeight = (weight, gravityFactor) => {
  return weight * gravityFactor;
};

export const MassConverter = () => {
  const [weight, setWeight] = useState("");
  const [results, setResults] = useState({});

  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  const handleCalculate = () => {
    const weightInKilos = weight;
    if (weightInKilos === null || weightInKilos <= 0) {
      alert("Please enter any items' weight in kilos, perhaps your pet? 🐩 🐾");
      return;
    }

    const newResults = {};
    for (const [planet, gravityFactor] of Object.entries(gravityFactors)) {
      newResults[planet] = calculateWeight(
        weightInKilos,
        gravityFactor
      ).toFixed(2);
    }
    setResults(newResults);
  };

  return (
    <div>
      <MassConverterFont>
        <h2 className="space-mono-bold">TRY OUT THE MASS CONVERTER:</h2>
        <p className="roboto-mono">
          Have you ever wondered how much you or your belongings would weigh on
          different planets? With the Mass Converter, you can explore the
          fascinating variations in weight caused by the different gravitational
          forces of each celestial body in our solar system. Simply enter the
          weight of any object in kilograms, and instantly find out its
          equivalent weight on the planets in our solar system. Whether it's
          your pet, a favorite item, or just your curiosity, this tool provides
          a fun and educational way to understand the effects of gravity beyond
          Earth. Try it now and see how your weight changes across the cosmos!
        </p>
        <input
          className="roboto-mono"
          type="number"
          value={weight}
          onChange={handleChange}
          placeholder="Enter kilograms here"
        />
        <Button onClick={handleCalculate}>CALCULATE</Button>
        <div className="results">
          {Object.entries(results).map(([planet, weight]) => (
            <div key={planet}>
              {planet}: {weight} kilos
            </div>
          ))}
        </div>
      </MassConverterFont>
    </div>
  );
};
