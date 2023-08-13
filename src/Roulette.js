import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

const Roulette = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);
  const [started, setStarted] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setStarted(true);
  };

  useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={[0.2]}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["#CCCCCC"]}
          outerBorderWidth={[8]}
          innerBorderColor={["#F2F2F2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#F5F5F5"]}
          textDistance={75}
          fontSize={[10]}
          backgroundColors={[
            "#272A4B",
            "#C4CBD4",
            "#7A9AAC",
            "#5C6795",
            "#354655",
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
          <img className="roulette-logo" src={require('./assets/images/img_logo.png')} />
        </button>
      </div>
      <br />
      <button
        className="prize-message"
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
      {!mustSpin ? (!started ? "撳呢到" : rouletteData[prizeNumber].completeOption) : "轉緊喇..."}
      </button>
    </>
  );
};

export default Roulette;
