import React from 'react';
import { Link } from 'react-router-dom';
import useService from '../../Hooks/useService';
import './Home.css';
const Home = () => {
    const [service,setService]=useService();
    console.log(service);
    return (
        <div>
            {/* -------------carousel------------ */}

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/NT9YyX4/arrangement-professional-photographer-equipment-23-2149033291.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/YjcYs81/detail-view-young-man-eyeglasses-taking-photos-street-8353-6507.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/bNqL7Zz/happy-asian-woman-vacation-photographing-with-camera-beach-with-horizon-background-1253-1357.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<h2 className='title'>Creative Palash Photography</h2>
        {/* --------card home page---------- */}

        <div className='card-design'>
            
       { 
       service.map(service1=><div class="card" style={{width: "18rem;"}}>
  <img src={service1.img} className="card-img-top img-size" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Service Name: <span style={{color:'#00008B'}}>{service1.name}</span></h5>
    <h5 className="card-title">Price: <span style={{color:'red'}}>{service1.price}</span></h5>
    <p className="card-text">{service1.service}</p>
    <Link to="/checkout" class="btn btn-primary">Check Out</Link>
  </div>
  </div>)

    }
    </div>

        </div>
    );
};

export default Home;