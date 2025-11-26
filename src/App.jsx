import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/NavBar"; 
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Middle from "./pages/Middle";
import Footer from "./pages/Footer";
import Footer1 from "./pages/Footer1";
import Chimneys from "./pages/Chimneys";
import Hobtops from "./pages/Hobtops";
import CubeChimney from "./pages/CubeChimney";
import Stores from "./pages/Stores";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import S1 from "./pages/S1";
import S2 from "./pages/S2";
import S3 from "./pages/S3";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Home />
              <Middle />
              <Footer />
              <Footer1 />
            </>
          }
        />

        {/* Other Pages WITHOUT Navbar */}
        <Route
  path="/chimneys"
  element={
    <>
      <Navbar />
      <Chimneys />
    </>
  }
/>

        <Route path="/hobtops"
         element={
          <>
           <Navbar />
           <Hobtops />
         </>
        }
         />
         
        <Route path="/cube-chimney"
         element={
         <>
         <Navbar />
         <CubeChimney />
         </>
         }
          />
        <Route path="/stores"
         element={
         <>
         <Navbar />
         <Stores />
            <Footer1 />
         </>
         }
          />
        <Route path="/blogs"
         element={
         <>
          <Navbar />
         <Blogs />
         <Footer1 />
         </>
         }
          />
        <Route path="/contact"
         element={
         <>
         <Navbar />
         <Contact />
         <Footer1 />
         </>
         } 
         />

         <Route path="/s1"
         element={
         <>
         <Navbar />
         <S1 />
         <Footer1 />
         
         </>
         } 
         />
             <Route path="/s2"
         element={
         <>
         <Navbar />
         <S2 />
        <Footer1 />
         
         </>
         } 
         />
             <Route path="/s3"
         element={
         <>
         <Navbar />
         <S3 />
        
         
         </>
         } 
         />
      </Routes>
    </Router>
  );
}

export default App;


