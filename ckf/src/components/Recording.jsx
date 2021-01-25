
import { baseURL, config } from "../services";
import { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import axios from "axios";
import Form from "./Form/Form";
import Nav from "./Nav";
import Main from "./Main/Main";
import Typeahead from "./Typeahead/Typeahead";


// import { Link, Route } from "react-router-dom";
// import Typeahead from "./components.Typeahead";

function Recording(props) {
  // const fields = {
  //   Composer: { composer },
  //   "Work 1": { work1 },
  //   "Work 2": { work2 },
  // };
  const params = useParams();
  console.log(params);
  const recording = props.recordings.find(
    (recording) => recording.id === params.id
  );
  if (!recording) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div>
      <h4>{recording.fields.composer}</h4>
      <h5>
        <em>{recording.fields.work1}</em>
      </h5>
      <h5>
        <em>{recording.fields.work2}</em>
      </h5>
      <h5>
        <em>{recording.fields.work3}</em>
      </h5>
      <p>
        {recording.fields.conductor}
      </p>
      <p>
        {recording.fields.soloistA}
      </p>
      <p>
        {recording.fields.soloistAInstrument}
      </p>
      <p>
        {recording.fields.soloistB}
      </p>
      <p>
        {recording.fields.soloistBInstrument}
      </p>
      <p>
        {recording.fields.soloistC}
      </p>
      <p>
        {recording.fields.soloistCInstrument}
      </p>
      <p>
        {recording.fields.label}
      </p>
      <p>
        {recording.fields.year}
      </p>
      <p>
        {recording.fields.notes}
      </p>

    </div>
  );
}
export default Recording;
