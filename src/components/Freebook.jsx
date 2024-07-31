import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookhaven-backend.onrender.com/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Unlock Premium by logging in, and dive into the enchanting world of <span className="text-purple-600">Harry Potter!</span></h1>
           
           {/* Card Display Section */}



        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://ew.com/thmb/wmFBXHaTXiQmFLMYJKRidhv_p-0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kkhp1-lg-c1cba98da86a4d8fb6a476876b072744.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Sorcerer's Stone</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://ew.com/thmb/C9RdMziv1IT-LkrfWpmvn09yzDc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9781408855669-6cfb2099b6e84a4899ce368d6facc242.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Chamber of Secrets</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card again */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/81NQA1BDlnL._SY522_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Prisoner of Azkaban</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/918vVJ3ez1L._SY522_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Cursed Child</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/51Z7ZD8xBGL._SY445_SX342_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter And The Order Of The Phoenix</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card again */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/513o4tl8HDL._SY445_SX342_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Goblet of Fire</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800 bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>
        </div>
         
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/918vVJ3ez1L._SY522_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Cursed Child</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/51Z7ZD8xBGL._SY445_SX342_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter And The Order Of The Phoenix</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card again */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/513o4tl8HDL._SY445_SX342_.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Goblet of Fire</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800 bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>
        </div>


        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://ew.com/thmb/9BG86CTLkdQf6KFSHTTjQxsta_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Philosopher's Stone</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://ew.com/thmb/6jo-tlTVjLjASvA1cZu5cvZ4wxM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kkhp3-5759be1bac844cf797bff07207d20e07.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Prisoner of Azkaban</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>

          {/* Repeat the card again */}
          <div className="card card-compact bg-base-100 shadow-xl dark:bg-gray-800">
            <figure>
              <img
                src="https://ew.com/thmb/v03WpzuR0toa_-HAIEgpGCr0SK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kkhp4-b38f8ac48a36461daaff245c8e820c15.jpg"
                alt="Shoes"
                style={{ width: '400px', height: '300px' }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Harry Potter</h2>
              <p>Harry Potter and the Goblet of Fire</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary bg-purple-800 bg-purple-800">Read Now</button>
              </div>
            </div>
          </div>
        </div>




        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
