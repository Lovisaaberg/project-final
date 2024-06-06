import styled from "styled-components";

const SunAndMoonPage = styled.div`
    background: #000000;
    h1.space-mono-bold {
      font-family: "Space Mono";
      color: #FFFFFF;
    }
    p.roboto-mono {
      font-family: "Roboto Mono";
    }
  }`;

const CelestialContent = ({ oneBody }) => {
  return (
    <div>
      <SunAndMoonPage>
        <h1 className="space-mono-bold">The {oneBody.name}</h1>
        <p className="roboto-mono">Name: {oneBody.name}</p>
        <p className="roboto-mono">Facts: {oneBody.fact}</p>
        <p className="roboto-mono">Explanation: {oneBody.explanation}</p>
        <p className="roboto-mono">Curiosa: {oneBody.additional_info}</p>
      </SunAndMoonPage>
    </div>
  );
};

export default CelestialContent;
