import "./App.css";
import Cards from "./Components/Cards";

function App() {
  return (
    <>
      <h1>we are learning props today</h1>
      <div className="cardContainer">
        <Cards age="old enough" location="Hamburg" speaking={false}>
          Julia
        </Cards>
        <Cards
          name="Thomas"
          age="also old enough"
          location="Düsseldorf"
          speaking={true}
        ></Cards>
        <Cards
          name="Paul"
          age="older than 18, for sure"
          location="Schwerin"
          speaking={false}
        ></Cards>
      </div>
    </>
  );
}

export default App;
