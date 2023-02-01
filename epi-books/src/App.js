import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="body-container">
      <MyNav genre="Fantasy" />
      <Welcome />
      <BookList />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
