import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Form from "./components/Form/Form";
import Nav from "./components/Nav";
import Main from "./components/Main/Main";
import Recording from "./components/Recording";
import "./App.css";





function App() {

  
  const [recordings, setRecordings] = useState([]);
  const [recording, setRecording] = useState([]);

  const [toggleFetch, setToggleFetch] = useState(false);
  
  

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
