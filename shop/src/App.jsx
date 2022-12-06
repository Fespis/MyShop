import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/FooterComponentA";
import Header from "./component/Header/HeaderComponentA";
import Home from "./component/Main/Home";
import NotFound from "./component/Main/NotFound";
import Shop from "./component/Main/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/:id" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
