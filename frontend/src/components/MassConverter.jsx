import { useState } from "react";
import styled from "styled-components";

const MassConverterFont = styled.div`
    background: #000000;
    h2.space-mono-bold {
      font-family: "Space Mono";
      color: #FFFFFF;
    }
    p.roboto-mono {
      font-family: "Roboto Mono";
    }
    input.roboto-mono {
      background: #000000;
      border: 2px solid #FFFFFF;
      border-radius: 5px;
      margin-right: 5px;
    }
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
        <h2 className="space-mono-bold">TRY THE MASS CONVERTER:</h2>
        <p className="roboto-mono">
          Enter the weight of any object in kilograms to see its equivalent
          weight on each planet.
        </p>
        <input
          className="roboto-mono"
          type="number"
          value={weight}
          onChange={handleChange}
          placeholder="Enter kilos in here"
        />
        <button onClick={handleCalculate}>Calculate</button>
        <div>
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
