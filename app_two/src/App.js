// import {Routes,Route} from 'react-router-dom'
// import Home from './Routing/home'
// import Form from './Routing/form';
// import Post from './Routing/post'; 
// import Navbar from './Routing/Nav_bar';
// import Carousel from './carousel/carousel';
// import Footer from './Routing/footer';
// import Api from './Api/api'
import Api_store from './Api/api_img'
// import BmiProj from './form/controled_method';
// import Ref_form from './form/forn_ref';
// import Useeff from './form/useEffect';
// import Prac from './practise/practice'
// import Reducermain from './Hooks/usereducer'
import './App.css';  
import Headers from './Api/headers';
import Footers from './Api/footers';


const App = ()=> {
  return (
    <div className="App">
      {/* <Ref_form/> */}
      {/* <Useeff/> */}
      {/* <Api/> */}
      <Headers/>
      <Api_store/>
      <Footers/>
      {/* <BmiProj/> */}
      {/* <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/post' element={<Post/>}/>
      </Routes>
      <Carousel/>
      <Footer/> */}
      {/* <Reducermain/> */}
    </div>
  );
}
export default App;
