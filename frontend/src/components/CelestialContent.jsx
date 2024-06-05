const CelestialContent = ({ oneBody }) => {
  return (
    <div>
      <h1>The {oneBody.name}</h1>
      <p>Name: {oneBody.name}</p>
      <p>Facts: {oneBody.fact}</p>
      <p>Explanation: {oneBody.explanation}</p>
      <p>Curiosa: {oneBody.additional_info}</p>
    </div>
  );
};

export default CelestialContent;
