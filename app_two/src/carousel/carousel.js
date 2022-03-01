import './carousel.css'
import Pic1 from './1.jpg'
import Pic2 from './2.jpg'
import Pic3 from './3.jpg'
const Carousel = () => {
    return (

    <div className='base'>
<div className="container border m-3 ">
    
    <div  >

    <div id="demo" className="carousel slide" data-bs-ride="carousel" >
    <div className="carousel-indicators" >
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" ></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" className="active" ></button> 
    </div>

    <div className="carousel-inner">
        <div className="carousel-item ">
            <img src={Pic1} alt="image1" className="d-block w-100"/>
        </div>

        <div className="carousel-item ">
            <img src={Pic2} alt="image2" className="d-block w-100" />
        </div>

        <div className="carousel-item active">
            <img src={Pic3} alt="image3" className="d-block w-100" />
        </div>
    </div>

    <button type="button" className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
    </button>    
    <button type="button" className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
    </button>
</div>
</div>
</div>
</div>
    )
}
export default Carousel;