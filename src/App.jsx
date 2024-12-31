import { useState } from "react";
import Pad from "./Pad";
import padsData from "./pads";

function App() {
  const [pads, setPads] = useState(padsData);

  function toggle() {
    return console.log("clicked!");
  }
  const buttonElement = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} toggle={toggle} />
  ));
  return (
    <main>
      <div className="pad-container">{buttonElement}</div>
    </main>
  );
}

export default App;
