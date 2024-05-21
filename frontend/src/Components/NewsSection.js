// import React, { useState, useEffect } from "react";
// import  from "axios";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoIosLink } from "react-icons/io";

// const NewsSection = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=bf704ca9dca62b04f44580e79f5a6900"
//         );
//         setArticles(response.data.articles);
//         console.log(response.data.articles);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // fetchData();
//   }, []);

//   return (
//     <div className="w-[50%] border border-gray-200">
//       {/* <h1>Top Headlines</h1> */}
//       <div>
//         {/* {articles.length > 0 ? ( */}
//         <div className="border-b border-gray-200 my-3">
//           <p className="font-semibold text-2xl my-3 mx-3">
//             Taiwan's new president inherits a strong foreign policy position but
//             political gridlock at home
//           </p>
//           {/* {articles[0].image && ( */}
//           <img
//             src="https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/imagegallery/29_02_2020_16_56_48_7796591.jpg?width=920&format=jpeg"
//             ="title"
//           />

//           <div className="flex items-center justify-end">
//               <FaFacebook  size= "24px" className="text-gray-500 m-3 hover:text-blue-600 "/>
//               <FaTwitter size= "24px" className="text-gray-500 m-3   hover:text-blue-400"/>
//               <IoIosLink size= "24px" className="text-gray-500 m-3   hover:text-gray-900"/>
//           </div>
//           {/* )} */}
//         </div>

//         <div className="flex w-[100%]">
//           <p className="w-[70%] ml-3 font-semibold text-lg">
//             Virat Kohli on critics: ‘Don’t need anyone’s approval or assurance…
//             Performance is my only currency
//           </p>
//           <img className="w-[30%] mr-3"
//             src="https://images.indianexpress.com/2024/05/VIRAT-KOHLI-ORANGE-CAP-PTI-CROP-1.jpg"
//             ="virat"
//           />
//         </div>
//         <div className="flex items-center justify-end">

//         {/* ) : ( */}
//         {/* <p>Loading...</p> */}
//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default NewsSection;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoIosLink } from "react-icons/io";

// const NewsSection = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=bf704ca9dca62b04f44580e79f5a6900"
//         );
//         setArticles(response.data.articles);
//         console.log(response.data.articles);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     // fetchData();
//   }, []);

//   if (articles.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="w-[50%] h-screen border border-gray-200 overflow-y-scroll ">
//       {/* First Article */}
//       <div className="border-b border-gray-200 my-3">
//         <a
//           href={articles[0].url}
//           className="font-semibold text-2xl my-3 mx-3 block"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {articles[0].title}
//         </a>
//         {articles[0].image && (
//           <img
//             src={articles[0].image}
//             ={articles[0].title}
//             className="w-full h-full"
//           />
//         )}

//         <div className="flex items-center justify-end">
//           <FaFacebook
//             size="24px"
//             className="text-gray-500 m-3 hover:text-blue-600 "
//           />
//           <FaTwitter
//             size="24px"
//             className="text-gray-500 m-3   hover:text-blue-400"
//           />
//           <IoIosLink
//             size="24px"
//             className="text-gray-500 m-3   hover:text-gray-900"
//           />
//         </div>
//       </div>

//       {/* Rest of the Articles */}
//       <div>
//         <div>
//         {articles.slice(1).map((article, index) => (
//           <div key={index} className="border-b border-gray-200 my-3 flex">
//             <a
//               href={article.url}
//               className="w-[70%] ml-3 font-semibold block"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {article.title}
//             </a>
//             {article.image && (
//               <img
//                 src={article.image}
//                 ={article.title}
//                 className="w-[30%] mr-3"
//               />
//             )}
//           </div>

//         ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsSection;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { IoIosLink } from "react-icons/io";

// const NewsSection = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=20&apikey=bf704ca9dca62b04f44580e79f5a6900"
//         );
//         setArticles(response.data.articles);
//         console.log(response.data.articles);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (articles.length === 0) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="w-[50%] h-screen border border-gray-200 overflow-y-scroll">
//       {/* First Article */}
//       <div className="border-b border-gray-200 my-3">
//         <a
//           href={articles[0].url}
//           className="font-semibold text-2xl my-3 mx-3 block"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {articles[0].title}
//         </a>
//         {articles[0].image && (
//           <img
//             src={articles[0].image}
//             ={articles[0].title}
//             className="w-full h-full"
//           />
//         )}
//         <div className="flex items-center justify-end">
//           <FaFacebook
//             size="24px"
//             className="text-gray-500 m-3 hover:text-blue-600"
//           />
//           <FaTwitter
//             size="24px"
//             className="text-gray-500 m-3 hover:text-blue-400"
//           />
//           <IoIosLink
//             size="24px"
//             className="text-gray-500 m-3 hover:text-gray-900"
//           />
//         </div>
//       </div>

//       {/* Rest of the Articles */}
//       {articles.slice(1).map((article, index) => (
//         <div key={index} className="border-b border-gray-200 my-3">
//           <div className="flex">
//             <a
//               href={article.url}
//               className="w-[70%] ml-3 font-semibold block text-xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {article.title}
//             </a>
//             {article.image && (
//               <img
//                 src={article.image}
//                 ={article.title}
//                 className="w-[30%] mr-3 max-h-96"
//               />
//             )}
//           </div>
//           <div className="flex items-center justify-end">
//             <FaFacebook
//               size="24px"
//               className="text-gray-500 m-3 hover:text-blue-600"
//             />
//             <FaTwitter
//               size="24px"
//               className="text-gray-500 m-3 hover:text-blue-400"
//             />
//             <IoIosLink
//               size="24px"
//               className="text-gray-500 m-3 hover:text-gray-900"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsSection;

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
      {/* First Article */}
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

      {/* Rest of the Articles */}
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
