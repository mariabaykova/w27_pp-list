import logo from "./logo.svg";
import "./App.css";
import PPCard from "./assets/components/PPCard";

const ppList = [
  {
    ppId: 1,
    ppName: "Безлимитный 300",
    subscrFee: 300,
    speed: 10,
    trafficVolume: "не ограничен",
    selected: false,
  },
  {
    ppId: 2,
    ppName: "Безлимитный 450",
    subscrFee: 450,
    speed: 50,
    trafficVolume: "не ограничен",
    selected: false,
  },
  {
    ppId: 3,
    ppName: "Безлимитный 550",
    subscrFee: 550,
    speed: 100,
    trafficVolume: "не ограничен",
    selected: true,
  },
  {
    ppId: 4,
    ppName: "Безлимитный 1000",
    subscrFee: 1000,
    speed: 200,
    trafficVolume: "не ограничен",
    selected: false,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        It's just to show the example of conditional rendering
      </header>
      <main className="App-main">
        {ppList &&
          ppList.map(
            ({ ppName, subscrFee, speed, trafficVolume, selected }) => (
              <PPCard />
            )
          )}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
