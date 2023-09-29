import { useEffect, useState } from "react";
import dummy1 from "./dummy_1.jpg";
import dummy2 from "./dummy_2.jpg";
import dummy3 from "./dummy_3.jpg";
import google from "./google.png";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [clientIP, setClientIP] = useState("");
  const [serverLocation, setServerLocation] = useState("");
  const [location, setLocation] = useState("");
  const [hasLocationPermission, setHasLocationPermission] = useState(false);


  setDefaults({
    key: "AIzaSyAfiWXxR3IZICWJD2rrChKAzZqi_LudFHY", // Your API key here.
    language: "en", // Default language for responses.
    region: "vn", // Default region for responses.
  });


  useEffect(() => {

    console.log("website render");
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setClientIP(data.ip);
      })
      .catch((error) => {
        console.error("Error fetching client IP:", error);
      });

    fetch("https://ipwho.is")
      .then((response) => response.json())
      .then((data) => {
        setServerLocation(data.region);
      })
      .catch((error) => {
        console.error("Error fetching server information:", error);
      });
  }, [serverLocation, clientIP]);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  useEffect(() => {
    if (!hasLocationPermission) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setHasLocationPermission(true);
      
        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=fb32f60e2c0248beb485cb9900c88963`)
          .then(response => response.json())
          .then(result => {
            const city = result.features[0].properties.city;
            const state = result.features[0].properties.state;
            const street = result.features[0].properties.street;
            const houseNumber = result.features[0].properties.housenumber;

            let locationString = ` ${houseNumber}  ${street} ${city}, ${state}`;
            setLocation(locationString);
          })
          .catch(error => console.log('error', error));

      });
    }
  }, [hasLocationPermission]);



  const books = [
    {
      image: dummy1,
      title: "Excel formulas",
      highlights: [
        "Chapter 1: Introduction to Excel",
        "Chapter 2: Basic Formulas",
        "Chapter 3: Advanced Functions",
      ],
    },
    {
      image: dummy2,
      title: "Building a Mobile app",
      highlights: [
        "Chapter 1: App Design Principles",
        "Chapter 2: Coding for Mobile",
        "Chapter 3: Testing and Deployment",
      ],
    },
    {
      image: dummy3,
      title: "Android App Development",
      highlights: [
        "Chapter 1: Getting Started with Android",
        "Chapter 2: User Interface Design",
        "Chapter 3: App Development Best Practices",
      ],
    },
    {
      image: dummy3,
      title: "Web Development with JavaScript",
      highlights: [
        "Chapter 1: Introduction to Web Development",
        "Chapter 2: JavaScript Fundamentals",
        "Chapter 3: Frontend Frameworks",
      ],
    }
    //generate more dummy data here

  ];

  return (
    <div className="w-4/5 m-auto border-solid border-2 border-sky-500 rounded-xl">
      <div className="text-9xl text-green-700 font-bold p-5 pt-2 flex items-center justify-center sticky top-0 bg-green-200 z-10">
        <img src={google} alt="Google" className="mr-4" />
        <div className="text-4xl text-center">Book for dummy</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        {books.map((book, index) => (
          <div
            key={index}
            className="m-10 p-5 bg-slate-100 rounded-lg hover:scale-105 text-center">
            <img src={book.image} alt={`dummy${index + 1}`} className="mx-auto" />
            <h1 className="m-2 font-bold">{book.title}</h1>

            <ul className="text-center px-10">
              {book.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <div className="text-4xl text-red-600 text-center font-bold mb-5 hover:scale-110">
          About us
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <h1 className="text-2xl font-bold mx-10">Client IP: {clientIP}</h1>
            <h1 className="text-2xl font-bold mx-10  ">City IP: {serverLocation}</h1>
            <h1 className="text-2xl font-bold text-center mx-10 ">Now is {currentTime.toLocaleTimeString()}</h1>
          </div>
       
          <h1 className="text-2xl font-bold text-center ">Your Location :  {location}</h1>
        </div>

      </div>

    </div>

  );
}

export default App;
