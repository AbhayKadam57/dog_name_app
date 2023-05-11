import "./App.css";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Breed from "./pages/Breed";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1faee;
`;

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breed" element={<Breed />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
