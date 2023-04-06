import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          {/* when use 'a' tag in react router dom, the browser will refresh everytime 'a' tag is clicked.
          to overcome this issue, replace 'a' tag with 'Link' tag */}
          {/* <a href="/">e-shopee</a> */}
          <Link to="/">e-shopee</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
