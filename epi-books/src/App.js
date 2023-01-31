import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNav genre="Fantasy" />

      <MyFooter />
    </div>
  );
}

export default App;
