import "./App.css";
import Tasks from "./Components/Tasks/Tasks";
import StandardErrorBoundry from "./Components/LCM/StandardErrorBoundry";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <>
      <StandardErrorBoundry>
        <Tasks />
      </StandardErrorBoundry>
    </>
  );
}

export default App;
