import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Typeahead.css";

function Typeahead(props) {
  // we need a state to store the current value of our input to use as a filter option
  const [name, setName] = useState("");
  const [category, setCategory] = useState("composer");
  // const [recordings, setRecordings] = useState("");

  console.log(category);

  useEffect(() => {
    const lastCategory = localStorage.getItem("category") || "composer";
    setCategory(lastCategory);
    setName( localStorage.getItem(lastCategory) ||"" );
  }, []);
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("category", category);
  }, [name, category]);
  // all items in source array (from props) where the name partially matches the name state
  const filteredItems = props.source.filter(
    (item) =>
      item.fields[category] &&
      item.fields[category]
        .toString()
        .toLowerCase()
        .includes(name.toLowerCase())
  );
  console.log(filteredItems);
  const categories = [
    "composer",
    "work1",
    "work2",
    "work3",
    "conductor",
    "performingGroupA",
    "performingGroupB",
    "soloistA",
    "soloistAInstrument",
    "soloistB",
    "soloistBInstrument",
    "soloistC",
    "soloistCInstrument",
    "label",
    "year",
    "notes",
  ];

  return (
    <form className="typeahead">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>

      {name && (
        <div className="show-container">
          {filteredItems.map((item, index) => (
            <Link key={index} to={`/recordings/${item.id}`}>
              {item.fields.work1} - {item.fields[category]}
            </Link>
          ))}
        </div>
      )}
    </form>
  );
}

export default Typeahead;
