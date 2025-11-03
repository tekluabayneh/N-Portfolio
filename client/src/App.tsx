import "./App.css";
import Portfolio from "./pages/home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Portfolio />
<Toaster position="top-right" />
    </>
  );
}

export default App;
