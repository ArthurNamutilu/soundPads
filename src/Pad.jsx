export default function Pad(props) {
  return (
    <button
      className={props.on ? "on" : undefined}
      style={{ backgroundColor: props.color }}
    ></button>
  );
}
