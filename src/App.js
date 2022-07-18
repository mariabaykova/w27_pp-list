import * as React from "react";
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
  // Мы будем хранить id выбранной карточки во внутреннем состоянии этого компонента
  // это состояние, которое мы подняли из PPCard
  // то есть если мы кликнули на карту с иденттификатором тарифа id=1, то храним
  // {
  //   ppId: '1'
  // }
  const [checkedPP, setCheckedPP] = React.useState({ ppId: "0" });
  function handleCardClick(ppId) {
    console.log("handleCardClick ppId " + ppId.ppId);
    setCheckedPP(ppId);
  }

  return (
    <div className="App">
      <header className="App-header">
        It's just to show the example of conditional rendering
      </header>
      <main className="App-main">
        {ppList &&
          ppList.map(
            ({
              ppName,
              subscrFee,
              speed,
              trafficVolume,
              // selected,
              width,
              ppId,
            }) => (
              <PPCard
                // onClick={() => console.log("click")}
                ppName={ppName}
                key={ppId}
                trafficVolume={trafficVolume}
                speed={speed}
                subscrFee={subscrFee}
                isSelected={checkedPP}
                width={width}
                ppId={ppId}
                onCardClick={handleCardClick}
              />
            )
          )}
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
