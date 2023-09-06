import dummy1 from "./dummy_1.jpg";
import dummy2 from "./dummy_2.jpg";
import dummy3 from "./dummy_3.jpg";
import google from "./google.png";

function App() {
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
  ];

  return (
    <div className="w-4/5 m-auto border-solid border-2 border-sky-500 rounded-xl">
      <div className="text-9xl text-green-700 font-bold p-10 flex items-center justify-center">
        <img src={google} alt="Google" className="mr-4" />
        <div className="text-4xl text-center">Book for dummy</div>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        {books.map((book, index) => (
          <div key={index} className="m-10 p-5 bg-slate-100 rounded-lg hover:scale-105 text-center">
            <img src={book.image} alt={`dummy${index + 1}`} />
            <h1 className="m-2 font-bold">{book.title}</h1>
         
            <ul className="text-left px-10">
              {book.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex} >{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <div className="text-4xl text-red-600 text-center font-bold mb-10">About us</div>
      </div>
    </div>
  );
}

export default App;
