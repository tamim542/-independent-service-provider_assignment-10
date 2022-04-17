import React from 'react';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;