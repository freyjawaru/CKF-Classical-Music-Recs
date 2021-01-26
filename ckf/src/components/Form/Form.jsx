import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../../services";
import { useHistory } from "react-router-dom";
import "./Form.css";

function Form(props) {
  const [composer, setComposer] = useState("");
  const [work1, setWork1] = useState("");
  const [work2, setWork2] = useState("");
  const [work3, setWork3] = useState("");
  const [conductor, setConductor] = useState("");
  const [performingGroupA, setPerformingGroupA] = useState("");
  const [performingGroupB, setPerformingGroupB] = useState("");
  const [soloistA, setSoloistA] = useState("");
  const [soloistAInstrument, setSoloistAInstrument] = useState("");
  const [soloistB, setSoloistB] = useState("");
  const [soloistBInstrument, setSoloistBInstrument] = useState("");
  const [soloistC, setSoloistC] = useState("");
  const [soloistCInstrument, setSoloistCInstrument] = useState("");
  const [label, setLabel] = useState("");
  const [year, setYear] = useState("");
  const [notes, setNotes] = useState("");
  
const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a creature object
    // creature object have all the properties from state
    const fields = {
      composer: composer,
      work1: work1,
      work2: work2,
      work3: work3,
      conductor: conductor,
      performingGroupA: performingGroupA,
      performingGroupB: performingGroupB,
      soloistA: soloistA,
      soloistB: soloistB,
      soloistC: soloistC,
      soloistAInstrument: soloistAInstrument,
      soloistBInstrument: soloistBInstrument,
      soloistCInstrument: soloistCInstrument,
      label: label,
      year: year,
      notes: notes,

    };
    // axios call to POST the new creature
    await axios.post(baseURL, { fields }, config);
    // toggling our GET request
    console.log("success!");
    props.setToggleFetch((prev) => !prev);
    history.push("/")
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter a new recording</h4>
      <label htmlFor="Composer">Composer:</label>
      <input
        composer="Composer"
        type="text"
        value={composer}
        onChange={(e) => setComposer(e.target.value)}
      />
       <label htmlFor="Work 1">Work 1:</label>
      <input
        work1="Work 1"
        type="text"
        value={work1}
        onChange={(e) => setWork1(e.target.value)}
      />
      <label htmlFor="Work 2">Work 2:</label>
      <input
        work2="Work 2"
        type="text"
        value={work2}
        onChange={(e) => setWork2(e.target.value)}
      />
      <label htmlFor="Work 3">Work 3:</label>
      <input
        work2="Work 3"
        type="text"
        value={work3}
        onChange={(e) => setWork3(e.target.value)}
      />
      <label htmlFor="Conductor">Conductor:</label>
      <input
        conductor="Conductor"
        type="text"
        value={conductor}
        onChange={(e) => setConductor(e.target.value)}
      />
      <label htmlFor="Soloist A">Soloist A:</label>
      <input
        soloistA="Soloist A"
        type="text"
        value={soloistA}
        onChange={(e) => setSoloistA(e.target.value)}
      />
     <label htmlFor="Soloist A Instrument">Soloist A Instrument:</label>
      <input
        soloistAInstrument="Soloist A Instrument"
        type="text"
        value={soloistAInstrument}
        onChange={(e) => setSoloistAInstrument(e.target.value)}
      />
      <label htmlFor="Soloist B">Soloist B:</label>
      <input
        soloistB="Soloist B"
        type="text"
        value={soloistB}
        onChange={(e) => setSoloistB(e.target.value)}
      />
      <label htmlFor="Soloist B Instrument">Soloist B Instrument:</label>
      <input
        soloistBInstrument="Soloist B Instrument"
        type="text"
        value={soloistBInstrument}
        onChange={(e) => setSoloistBInstrument(e.target.value)}
      />
      <label htmlFor="Soloist C">Soloist C:</label>
      <input
        soloistB="Soloist C"
        type="text"
        value={soloistC}
        onChange={(e) => setSoloistC(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;




