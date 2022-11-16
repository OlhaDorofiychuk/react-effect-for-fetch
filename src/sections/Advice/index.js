import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState({});
  const [favoriteAdvices, setFavoriteAdvices] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((dataAdvice) => setAdvice(dataAdvice.slip));
  }, []);

  const handleClick = (event) => {
    const buttonText = event.target.innerText;

    // If get more advice: call another advice
    if (buttonText === "Get More Advice") {
      fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((dataAdvice) => setAdvice(dataAdvice.slip));
    }
    // Favorite
    else {
      if (favoriteAdvices.includes(advice)) return;

      setFavoriteAdvices([...favoriteAdvices, advice]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      {/* // props: advice, handleClick */}
      <AdviceSlip advice={advice} handleClick={handleClick} />

      {/* props: favoriteAdvices */}
      <FavouriteSlipsList favoriteAdvices={favoriteAdvices} />
    </section>
  );
}

export default AdviceSection;
