import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Typeahead from "./components/Typeahead";
import Recording from "./components/Recording";
import "./App.css";
import { propTypes } from "react-bootstrap/esm/Image";




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
        <Main
        recordings={recordings}>


        </Main>
      {/* <Typeahead source={recordings} /> */}
        
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/recordings/:id">
        <Recording recordings={recordings} />
      </Route>
      </div>
    
  );
}
export default App;
