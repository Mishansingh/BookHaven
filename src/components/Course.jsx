import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";


import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookhaven-backend.onrender.com/book");
        //this one written by me
        //console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 height-auto ">
        <div className="mt-20 items-center justify-center text-center">
          {/* <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1> */}
          <p className="mt-12">
          <span className="text-purple-800 font-bold text-xl">It takes a great deal of bravery to stand up to our enemies, 
            but just as much to stand up to our friends!</span>
            <br />
            <br />
          Step into the enchanting world of Harry Potter, 
          where magic and adventure await at every turn. 
          Follow Harry, Hermione, and Ron as they embark on a 
          thrilling journey filled with mystery, bravery, and friendship.
           Discover timeless tales of courage and wonder that have captivated millions around the globe.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
