class App extends Component {
  state = {
    array: [],
    items: [
      { id: uuid(), composer: "{ recording.fields.composer }" },
      { id: uuid(), work1: "{ recording.fields.work1 }" }, 
      { id: uuid(), work2: "{ recording.fields.work2 }" }, 
      // Convert to an object of { id: { id, name, price } }
      ].reduce((memo, item) => ({
          ...memo,
          [item.id]: item
      }), {}),
  }

//   addItem = id => {
//       const { cart, } = this.state

//       this.setState({
//           cart: [ ...cart, id ]
//       })
//   }
//   addItem = id => {
//     const { cart, } = this.state

//     this.setState({
//         cart: [ ...cart, id ]
//     })
// }

// removeItem = removeId => {
//     const { cart, } = this.state
//     this.setState({
//         cart: cart.filter(({ id }) => id !== removeId)
//     })
// }render() {
//   const { cart, items, total, addToCartMessage, removeFromCartMessage } = this.state

//   // Given an array of item IDs in our cart, group them into an object
//   // with the total count and price for each item, and overall count
//   const accumulatedItems = items.reduce((memo, item) => {
//       const { id, price } = item;
//       const { count, price, } = memo[id] || {};
//       return {
//           ...memo,
//           cartTotal: memo.cartTotal + price,
//           [id]: {
//               count: (count || 0) + 1,
//               total: (price || 0) + price,
//           }
//       };
//   // Starting object to reduce
//   }, {
//       cartTotal: 0, });

//       return (
//           <div className="App">
//               {cart.length === 0 ? <h3>No items in cart</h3> : (
//                   <div>
//                       <h1>Cart:</h1>
//                       {Object.keys(accumulatedItems).sort().map(id => (
//                           <div key={id}>
//                               <h1>{items[id].name} x {accumulatedItems[id].total}</h1>
//                               <p>${accumulatedItems[id].total}</p>
//                               <button onClick={() => this.removeItem(id)}>Remove From Cart</button>
//                           </div>
//                       ))}
//                   </div>
//               )}
//           </div>
//       );
//   }
// }