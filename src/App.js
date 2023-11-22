import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Minion Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search"
        className="search-box"
      />
      <CardList minions={filteredMinions} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       minions: [],
//       searchField: "", // Initialize searchString state
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {minions: users};
//           },
//         )
//         );
//         }
//         onSearchChange = (event) =>{
//           const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(
//         () => {
//           return {searchField};
//         });
//       }
//   render() {
//     console.log('render');

//     const {minions, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMinions = minions.filter((minion) => {
//       return minion.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Minion Rolodex</h1>
//       <SearchBox onChangeHandler={onSearchChange} placeholder="search-minions" className="search-box"/>
//       <CardList minions={filteredMinions}/>
// </div>
//     );
//   }
//   };
export default App;
