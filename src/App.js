import Jumbotron from "./Components/Jumbotron/jumbotron";
import SearchBar from "./Components/SearchBar/searchbar";
import API from "./Util/API";

function App() {
  console.log(API.search());
  return (
    <div>
      <Jumbotron />
      <SearchBar />
    </div>

  )
}

export default App;
