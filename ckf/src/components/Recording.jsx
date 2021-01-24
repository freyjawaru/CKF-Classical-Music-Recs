import { useParams } from "react-router-dom";
// import { Link, Route } from "react-router-dom";
// import Typeahead from "./components.Typeahead";

function Recording(props) {
  const params = useParams();
  const recording = props.recordings.find(
    (recording) => recording.id === params.id
  );

  return (
    <div>
      <h4>{recording.fields.composer}</h4>
      <h5>
        <em>{recording.fields.work1}</em>
      </h5>
      <p>{recording.fields.work2}</p>
    </div>
  );
}
export default Recording;
