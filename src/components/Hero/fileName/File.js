import Span from "../../header/toggleBtn/Span";
import "./file.css";
function FileName() {
  return (
    <div className="file-name">
      <div>
        <Span cl="circle circle-1" />
        <Span cl="circle circle-2" />
        <Span cl="circle circle-3" />
      </div>
      <div>
        <Span cl="file-js" value="JS" />
        &nbsp;&nbsp;App.jsx
      </div>
    </div>
  );
}

export default FileName;
