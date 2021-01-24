import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { useParams } from "react-router-dom";


function Typeahead(props) {
  // we need a state to store the current value of our input to use as a filter option
  const [name, setName] = useState("");
  const [category, setCategory] = useState("composer");
  const [recordings, setRecordings] = useState("");
  
  console.log(category);
  useEffect(() => {
    const lastCategory = localStorage.getItem("category") || "composer";
    setCategory(lastCategory);
    setName(localStorage.getItem(lastCategory) || "");
  }, []);
  useEffect(() => {
    localStorage.setItem(category, name);
    localStorage.setItem("category", category);
  }, [name, category]);
  // all items in source array (from props) where the name partially matches the name state
  const filteredItems = props.source.filter((item) =>
    item.fields[category] && item.fields[category].toString().toLowerCase().includes(name.toLowerCase())
  );
  console.log(filteredItems)
  const categories = ["composer", "soloistA", "soloistB"];
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
  return (
    <form className="typeahead">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
      {name && ( // if name is not an empty string, then...
        <div>
          {filteredItems.map((
            item,
            index // for each matching item, render a p tag with the item's name
          ) => (

            <Route exact path="/recordings/">
        <main>
        {recordings.map((recording) => (
          <Link key={index} to={`/recording/${item.id}`}>
          {item.fields.work1} - {item.fields[category]}
          <Recording recordings={recordings} />
        </Link>
        ))}
          </main>
        </Route>
          
        
      
           
              
          ))}
        </div>
      )}
    </form>
  );
}
export default Typeahead;
