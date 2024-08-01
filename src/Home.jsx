import { useEffect, useState, useCallback } from "react";
import dummy1 from "./dummy_1.jpg";
import dummy2 from "./dummy_2.jpg";
import dummy3 from "./dummy_3.jpg";
import google from "./google.png";
import { Outlet, Link } from "react-router-dom";
import dummy4 from "./dummy_4.jpg";

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
        image: dummy4,
        title: "iOS App Development",
        highlights: [
            "Chapter 1: Getting Started with iOS",
            "Chapter 2: User Interface Design",
            "Chapter 3: App Development Best Practices",
        ],
    },
];

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [clientIP, setClientIP] = useState("");
    const [serverLocation, setServerLocation] = useState("");
    const [temperature, setTemperature] = useState("");

    const fetchData = useCallback(async () => {
        try {
            const responses = await Promise.all([
                fetch("https://api.ipify.org?format=json"),
                fetch("http://ip-api.com/json"),
                fetch(
                    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/binh%20d%C6%B0%C6%A1%C6%A1ng?unitGroup=metric&include=days&key=6NFNS78EEKY57Z7KEHHNKVJ35&contentType=json"
                ),
            ]);

            const [ipData, locationData, weatherData] = await Promise.all(
                responses.map((response) => response.json())
            );

            setClientIP(ipData.ip);
            setServerLocation(locationData.city);
            setTemperature(weatherData.days[0].temp + "°C");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("website render");
            fetchData();
        }, 3000);

        return () => clearInterval(interval);
    }, [fetchData]);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div className="m-auto border-spacing-7 border-2 border-sky-500 rounded-xl">
            <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-10 text-9xl text-green-700 font-bold p-10 pt-2">
                <div className="flex items-center">
                    <img src={google} alt="Google" className="mr-4" />
                    <div className="text-4xl text-center">Book for dummy</div>
                </div>
            </div>
            <div className="mt-20 justify-center flex flex-col sm:flex sm:flex-row sm:justify-center">
                {books.map((book, index) => (
                    <div key={index} className="m-10 px-30 py-10 bg-slate-200 rounded-lg hover:scale-105 w-full sm:w-1/3">
                        <img src={book.image} alt={`dummy${index + 1}`} className="w-[18em] h-[18em] mx-auto" />
                        <h1 className="m-1 font-bold text-center">{book.title}</h1>
                        <ul className="text-center px-0">
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
                <div className="text-center font-bold">
                    <h1>Client IP: {clientIP}</h1>
                    <h1>City IP: {serverLocation}</h1>
                    <h1>Bây giờ là {currentTime.toLocaleTimeString()}</h1>
                    <h1>Nhiệt độ bây hôm nay: {temperature}</h1>
                <h1>ahihi test app </h1>
                </div>
            </div>
            <div className="font-bold text-center mt-10">
                <h1>
                    <Link to="/button" className="bg-green-400 p-2">
                        Button
                    </Link>
                </h1>
            </div>
        </div>
    );
};

export default Home;