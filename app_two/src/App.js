import {Routes,Route} from 'react-router-dom'
import Home from './Routing/home'
import Form from './Routing/form';
import Post from './Routing/post'; 
import Navbar from './Routing/Nav_bar';
import Carousel from './carousel/carousel';
import Footer from './Routing/footer';
import './App.css'; 


const App = ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/post' element={<Post/>}/>
      </Routes>
      <Carousel/>
      <Footer/>
      
    </div>
  );
}
export default App;
