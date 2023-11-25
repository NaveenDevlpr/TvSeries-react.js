import Navbar from "./components/Navbar";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="container">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/tvserie/:id' element={<DetailsPage/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
