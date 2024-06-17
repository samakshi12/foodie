import React,{useState,useEffect} from 'react'
import Navbar from '../Navbar'
import Content from '../Content'
import Footer from '../Footer'
import Img1 from './images/food1.jpg';
import Img2 from './images/food2.jpg';
import Img3 from './images/food3.jpg';

export default function Home() {
  
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () =>{
       let response = await fetch ("http://localhost:4000/api/foodData",{
       method: "POST",
       headers: {
        'Content-Type' : 'application/json'
       }
  })
  
  response = await response.json();

  setFoodCat(response.food_categories);
  setFoodItem(response.food_items);


}

useEffect(()=>{
 loadData()

},[])




  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value ={search}
                onChange={(e)=>{setSearch(e.target.value )}}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-item active">
              <img
                src={Img1}
                className="d-block w-100"
                style={{ filter: "brightness(30%)"}}
                alt="..."

              />
            </div>
            <div className="carousel-item">
              <img
                src={Img2}
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img3}
                className="d-block w-100 "
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> 

      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter((item) => item.CategoryName === data.CategoryName&& (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Content foodItem={filterItems}
                              options={filterItems.options[0]}
                              imgSrc={filterItems.img}
                            ></Content>
                          </div>
                        );
                      })
                  ) : (
                    <div> Not found! </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
