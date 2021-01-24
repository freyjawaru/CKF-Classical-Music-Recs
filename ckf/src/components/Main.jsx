import { useState } from "react";
// import Show from "./Components/Show.jsx";
import { Link } from "react-router-dom";
import Typeahead from "./Typeahead";

function Home(props) {
  console.log(props)
  return (
    <div>
      <Typeahead source={props.recordings}>
        
</Typeahead>
        </div>   
        
   

       

  )

}

export default Home;