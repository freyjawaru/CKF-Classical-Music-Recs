import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function Form(props) {
  const [work, setWork] = useState("");
  const [composer, setComposer] = useState("");
const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // make a creature object
    // creature object have all the properties from state
    const fields = {
      composer: composer,
      work1: work,
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
      <label htmlFor="work">Work:</label>
      <input
        work="work"
        type="text"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      
      <label htmlFor="composer">Composer:</label>
      <input
        composer="composer"
        type="text"
        value={composer}
        onChange={(e) => setComposer(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;




