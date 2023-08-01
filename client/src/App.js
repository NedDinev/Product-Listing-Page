import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import CategoriesRouter from "./components/CategoriesRouter/CategoriesRouter";

function App() {
  return (
    <div>
      <header className="sticky-top">
        <NavigationBar />
      </header>
      <main>
        <Container className="mt-5">
          <CategoriesRouter />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
