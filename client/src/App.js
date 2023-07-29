import "bootstrap/dist/css/bootstrap.min.css";

import ProductList from "./components/ProductList/ProductList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <header>
        <a href="/">Jewelry Shop</a>
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
