import { useState } from "react";

export default function Pad(props) {
  const [on, setOn] = useState(props.on);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <button
      className={on ? "on" : undefined}
      style={{ backgroundColor: props.color }}
      onClick={toggle}
    ></button>
  );
}
