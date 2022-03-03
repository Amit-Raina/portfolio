import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import "./assests/styling/global.scss";
import "./assests/styling/variables.scss";
import "./App.scss";

function App() {
  return (
    <div className="App flexColumn flexGrow">
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
