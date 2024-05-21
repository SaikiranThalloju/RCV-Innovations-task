
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        setArticles(response.data[0].articles); 
        console.log(response.data[0].articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (articles.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-[50%] h-screen border border-gray-200 overflow-y-scroll  scrollbar-hide">
      
      <div className="border-b border-gray-200 my-3">
        <a
          href={articles[0].url}
          className="font-semibold text-2xl my-3 mx-3 block hover:text-red-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {articles[0].title}
        </a>
        {articles[0].image && (
          <img
            src={articles[0].image}
            alt = {articles[0].title}
            className="w-full h-full"
          />
        )}
        <div className="flex items-center justify-end">
          <FaFacebook
            size="24px"
            className="text-gray-500 m-3 hover:text-blue-600"
          />
          <FaTwitter
            size="24px"
            className="text-gray-500 m-3 hover:text-blue-400"
          />
          <IoIosLink
            size="24px"
            className="text-gray-500 m-3 hover:text-gray-900"
          />
        </div>
      </div>

     
      {articles.slice(1).map((article, index) => (
        <div key={index} className="border-b border-gray-200 my-3">
          <div className="flex">
            <a
              href={article.url}
              className="w-[70%] ml-3 font-semibold block text-xl  hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-[30%] mr-3 max-h-96"
              />
            )}
          </div>

          <div className="flex justify-between items-center">

            <div >
              <h1 className="text-gray-500 font-semibold mx-3 ">Dainik Bhaskar</h1>
            </div>
          <div className="flex items-center justify-end">
            <FaFacebook
              size="24px"
              className="text-gray-500 m-3 hover:text-blue-600"
            />
            <FaTwitter
              size="24px"
              className="text-gray-500 m-3 hover:text-blue-400"
            />
            <IoIosLink
              size="24px"
              className="text-gray-500 m-3 hover:text-gray-900"
            />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
