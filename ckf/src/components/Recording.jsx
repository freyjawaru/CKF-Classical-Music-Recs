// import { useParams } from "react-router-dom";
// function Creature(props) {
//   const params = useParams();
//   const recording = props.recording.find(
//     (recording) => recording.id === params.id
//   );
//   if (!recording) {
//     return (
//       <div>
//         <h4>Loading...</h4>
//       </div>
//     );
//   }

//   let rating = '';
//   for (let i = 0; i < recording.fields.rating; i++){
//     rating += "🦑";
// }
//   return (
//     <div>
//       <h4>{recording.fields.name}</h4>
//       <h5>
//         <em>{recording.fields.author}</em>
//       </h5>
//       <p>{recording.fields.rating}</p>
//     </div>
//   );
// }
// export default Recording;