import { useState } from "react";
// import Show from "./Components/Show.jsx";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props)
  return (
    <div>
  {/* <div className="home">
      <p>CKF Recordings</p>
       
    </div>
  <div className="grid">
    {props.recordingInfo.map((recording) => {
        return (
          <div className="grid">
          < Link to={`/${recording.name}`}>
          <img src={bird.image} />
            </Link>
          </div>
        )

      })}
      </div> */}
        </div>   
        
   

       

  )

}

export default Home;