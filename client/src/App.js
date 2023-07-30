import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList/ProductList";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <div>
      <header className="sticky-top">
        <NavigationBar />
      </header>
      <main>
        <Container className="mt-5">
          <ProductList />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
