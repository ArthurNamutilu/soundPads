import { useState } from "react";

export default function Pad(props) {
  const [on, setOn] = useState(props.on);

  return (
    <button
      className={on ? "on" : undefined}
      style={{ backgroundColor: props.color }}
      onClick={props.toggle}
    ></button>
  );
}
