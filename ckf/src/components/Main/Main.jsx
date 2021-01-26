
import Typeahead from "../Typeahead/Typeahead";
import "./Main.css";

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