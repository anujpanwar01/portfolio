import Span from "../../header/toggleBtn/Span";
function brac(value) {
  console.log(value);
  return value === 2001 ? value : `' ${value} '`;
}
function Name(props) {
  return (
    <div className="my-name">
      <Span cl="this" value="this" />
      <Span cl="dot" value="." />
      <Span cl="title" value={props.title} />
      &nbsp;
      <Span cl="dot" value="=" />
      &nbsp;
      <Span
        cl={props.value === 2001 ? "number" : "str"}
        value={brac(props.value)}
      />
      &nbsp;
      <Span cl="title" value=";" />
    </div>
  );
}
export default Name;
