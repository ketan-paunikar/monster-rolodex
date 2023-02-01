import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  // side effect, as we are fetching foriegn data(in this case, users)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users)
      ), []
  })

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newFilteredMonster);

  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    //console.log(searchField);
  };

  return (
    <div className="App">
      <h1 className='title'> Friendly Monsters </h1>

      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />



      <CardList monsters={filteredMonster} />

    </div>
  )
}










// class App extends Component {
//   constructor() {
//     super();


//     // the only purpose of consturctor is that it will contain the state object for the component, and inside the 
//     // state object these(below) will be initial value.
//     //state object
//     this.state = { // this.state object will store the data that will be fetched.
//       // every time state of an object is changed, react re-render the component. i.e. componentDidMount() method for updated data.
//       monsters: [], // empty array
//       searchField: '' // it stores the input form the variable searchFiled
//     };
//   }



//   // react lifecycle (componentDidMount()), it will run after first render(), compenentDidMount will fetch the data from API.
//   // once data is fetched it will change the data in state object by calling the setState() method.
//   componentDidMount() {
// fetch('https://jsonplaceholder.typicode.com/users') // fetch method - to collect data to servers/APIs (promises)
//   // fetch method will return promise which will be resolved with response object.
//   // but response object contains entire http server response of the useless data.
//   .then((response) => response.json())
//   // using the .json() method,it will return the 2nd promise which will contain the parsed data that we wanted.
//   .then((users) =>
//     // once we have the data we wanted, will mount the data in this.state() object.
//     // to mount the data we use setState() method, setState() method will change the state of the object.
//     this.setState(
//       // will be using callback fuction inside of setState() method to mount the data in state object.
//       () => {
//         return { monsters: users };
//       }
//     )
//   )
//   }


//   //using the 'event' hanlder to search the perticular montser 
//   // making onchange event an individual componenet, assigining it to variable onSearchChange.
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     // storing the searched strings in the empty 'searchField', present in this.state object
//     this.setState(() => {
//       return { searchField };
//     });
//   };



//   // render() will display the visual UI on the web page.
//   render() {

//     // array destructing.
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     //using filter() method to filter the array of 'monsters', and adding the filtered monster in new 'filterMonster', filter()
//     // method won't change origional array.
//     const filteredMonster = monsters.filter((monster) => {

//       // filter and return the monsters, depends on the input string from onSearchChange event.
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (

//       // both onChangeHandler & monster are the props that is used to pass th data from parent component (SearchBox & CardList)
//       //  to the chld component.
//       <div className="App">
//         <h1 className='title'> Friendly Monsters </h1>

//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box' />
//         <CardList monsters={filteredMonster} />

//       </div>
//     );
//   }
// }
export default App;
