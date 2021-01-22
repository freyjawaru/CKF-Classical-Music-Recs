import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
// import Recording from "./components/Recording";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  // one state for creatures
  const [recordings, setRecordings] = useState([]);
  // one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false);
  // get data from api when toggle changes
  useEffect(() => {
    const getRecordings = async () => {
      const resp = await axios.get(baseURL, config);

      setRecordings(resp.data.records);
      console.log(recordings);
    };
    getRecordings();
  }, [toggleFetch]);
  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <form>
          <label for="composers">Choose a composer:</label>
          <select name="composers" id="composers">
            {new Set(recordings).map((recording) => (
                <option value="composer">
             
                {/* //dropdown code from https://www.w3schools.com/tags/tag_select.asp */}

                  {recording.fields.composer}
            
                </option>
            ))}
          </select>
          <input type="submit" value="Submit" />
        </form>
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>

      {/* <Route path="/recording/:id">
        <Recording recordings={recordings} />
      </Route> */}
    </div>
  );
}
export default App;
