import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { Button } from "../components/Navigation/Button.jsx"

const MassConverterFont = styled.div`
  font-family: var(--font-family-main);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  margin: 20px 20px;
`

const Heading = styled.h1`
  font-size: var(--font-size-h1-desktop);
  font-family: var(--font-family-headlines);
  color: #ffffff;
  text-align: center;
  margin: 8px 0;
`

const Description = styled.p`
  font-size: var(--font-size-medium);
  font-family: var(--font-family-text);
  color: var(--text-color-secondary);
  color: var(--text-color-secondary);
  text-align: center;
  max-width: 1000px;
`

const Input = styled.input`
  font-family: "Roboto Mono", monospace;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 280px;
  height: 30px;
`

const Results = styled.div`
  margin-top: 20px;
  padding: 20px 20px;
  color: var(--text-color-primary);
  font-family: var(--font-family-text);
  background-color: var(--textbox-background);
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  div {
    margin: 5px 0;
  }
`

const EnteredWeight = styled.div`
  color: #cf4b14;
`

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
}

const calculateWeight = (weight, gravityFactor) => {
  return weight * gravityFactor
}

export const MassConverter = () => {
  const [weight, setWeight] = useState("")
  const [results, setResults] = useState({})
  const resultsRef = useRef(null)

  const handleChange = (e) => {
    setWeight(e.target.value)
  }

  const handleCalculate = () => {
    const weightInKilos = weight
    if (weightInKilos === null || weightInKilos <= 0) {
      alert("Please enter any item's weight in kilos, perhaps your pet? 🐩 🐾")
      return
    }

    const newResults = {}
    for (const [planet, gravityFactor] of Object.entries(gravityFactors)) {
      newResults[planet] = calculateWeight(
        weightInKilos,
        gravityFactor
      ).toFixed(2)
    }
    setResults(newResults)
  }

  useEffect(() => {
    if (Object.keys(results).length > 0 && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [results])

  return (
    <MassConverterFont>
      <Heading>THE MASS C0NVERTER</Heading>
      <Description>
        Have you ever wondered how much you or your belongings would weigh on
        different planets? With the Mass Converter, you can explore the
        fascinating variations in weight caused by the different gravitational
        forces of each celestial body in our solar system. Simply enter the
        weight of any object in kilograms, and instantly find out its equivalent
        weight on the planets in our solar system. Whether it's your pet, a
        favorite item, or just your curiosity, this tool provides a fun and
        educational way to understand the effects of gravity beyond Earth. Try
        it now and see how your weight changes across the cosmos!
      </Description>
      <Input
        type="number"
        value={weight}
        onChange={handleChange}
        placeholder="Enter kilograms here"
      />
      <Button onClick={handleCalculate}>CALCULATE</Button>
      {Object.keys(results).length > 0 && ( // Conditionally render Results if results is not empty
        <Results ref={resultsRef}>
          <EnteredWeight>Entered Weight: {weight} kilos</EnteredWeight>
          {Object.entries(results).map(([planet, weight]) => (
            <div key={planet}>
              {planet}: {weight} kilos
            </div>
          ))}
        </Results>
      )}
    </MassConverterFont>
  )
}
