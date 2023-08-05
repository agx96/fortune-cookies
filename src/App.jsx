import quotes from "./db simulation/fortunePhrases.json";
import { useState } from "react";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import { getRandom } from "./utils/random"; //function for get random index
import o from "./utils/o.png";
import "./App.css";

const imgBgArray = ["bg", "bg2", "bg3", "bg4"];

function App() {
  const [quote, setQuote] = useState(getRandom(quotes));
  const [currentImg, setCurrentImg] = useState(getRandom(imgBgArray));

  const handleRandomPhrase = () => {
    setQuote(getRandom(quotes));
    setCurrentImg(getRandom(imgBgArray));
  };

  return (
    <main className={`app ${currentImg}`}>
      <h1 className="app__title animated-heading">
        Fortune C
        <span className="animated-heading">
          <img className="donnutLetter" src={o} alt="" />
        </span>
        <span className="animated-heading">
          <img className="donnutLetter" src={o} alt=""></img>
        </span>
        kies
      </h1>
      <QuoteBox quote={quote} handleRandomPhrase={handleRandomPhrase} />
    </main>
  );
}

export default App;
