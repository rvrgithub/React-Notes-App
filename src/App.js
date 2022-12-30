import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

function App() {
  const { toggleColorMode } = useColorMode();
  const Bg = useColorModeValue("orange", "black");
  return (
    <div className="App">
      <Header onClick={toggleColorMode} />
      <Home />
      <Footer Bg={Bg} />
    </div>
  );
}

export default App;
