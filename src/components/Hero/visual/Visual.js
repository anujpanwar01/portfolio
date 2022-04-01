import "./visual.css";
import Name from "./Name";
import FileName from "../fileName/File";
import Span from "../../header/toggleBtn/Span";

function Visual() {
  return (
    <div className="visual">
      <FileName />
      <div style={{ marginBottom: "0.5rem" }}>
        <Span cl="cl" value="class" />
        &nbsp;&nbsp;
        <Span cl="cl-n" value="Person" />
        &nbsp;
        <Span cl="cl-big-brac" value="{" />
      </div>

      <div className="cons">
        <Span cl="cl-n cl-m" value="constructor" />
        <Span cl="cl-sec-brac" value="( )" />
        &nbsp;
        <Span cl="cl-sec-brac" value="{" />
      </div>

      <Name title="firstName" value="Anuj" />
      <Name title="lastName" value="Panwar" />
      <Name title="age" value={2001} />

      <div className="cl-sec-brac-close">{"}"}</div>

      <div className="method" style={{ marginBottom: "0.5rem" }}>
        <Span cl="cl-n cl-m" value="calcAge" />
        <Span cl="cl-sec-brac" value="( )" />
        &nbsp;
        <Span cl="cl-sec-brac" value="{" />
      </div>

      <div className="method-data">
        <Span cl="dot" value="return" />
        &nbsp;&nbsp;
        <Span cl="dot" value="new" />
        &nbsp;
        <Span cl="cl" value="Date( )" />
        <Span cl="dot" value="." />
        <Span cl="cl-n cl-m" value="getFullYear( )" />
        &nbsp;
        <Span cl="dot" value="-" />
        &nbsp;
        <Span cl="this" value="this" />
        <Span cl="dot" value="." />
        <Span cl="title" value="age" />
        &nbsp;
        <Span cl="title" value=";" />
      </div>

      <div className="cl-sec-brac-close">{"}"}</div>

      <div className="cl-big-brac cl-big-brac-close">{"}"}</div>
    </div>
  );
}
export default Visual;
