import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import CategoriesRouter from "./components/CategoriesRouter";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
