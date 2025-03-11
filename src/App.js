import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./App.css";
import gifImage from "./assets/9f848fc9236ccf99b090961065c59e9b.gif";

const SurpriseApp = () => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");
  const [isFirstTry, setIsFirstTry] = useState(true);
  const [showHearts, setShowHearts] = useState(false);
  const [shake, setShake] = useState(false);
  const correctName1 = "Ananthi";
  const correctName2 = "Suji";

  const handleSubmit = () => {
    if (
      input.trim().toLowerCase() === correctName1.toLowerCase() ||
      input.trim().toLowerCase() === correctName2.toLowerCase()
    ) {
      setShowHearts(true);
      setTimeout(() => {
        setStep(2);
      }, 2000);
    } else {
      setIsFirstTry(false);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: "#FFB085",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {step === 1 && (
        <motion.div
          className="password-screen"
          style={{
            textAlign: "center",
            padding: "30px",
            borderRadius: "12px",
            backgroundColor: "#FF914D",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            width: "500px",
          }}
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 style={{ color: "#fff", fontFamily: "Comic Sans MS" }}>
            Enter the name of your most favorite person 😉
          </h2>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Thappah sonna kondruva..."
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "16px",
            }}
          />
          <br />
          <br />
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 20px",
              backgroundColor: "#FF5E00",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Submit
          </button>
          {!isFirstTry && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="wrong-msg"
              style={{
                color: "#fff",
                marginTop: "15px",
                fontFamily: "Comic Sans MS",
                fontSize: "18px",
              }}
            >
              😤 I'm not your most fav... who the hell is that?!
            </motion.p>
          )}
        </motion.div>
      )}
      {step === 2 && (
        <div
          className="message-screen"
          style={{
            textAlign: "center",
            padding: "40px",
            borderRadius: "12px",
            backgroundColor: "#FF914D",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            width: "700px",
          }}
        >
          {showHearts && (
            <Confetti
              numberOfPieces={1000}
              recycle={false}
              colors={["#8B0000", "#DC143C", "#FF7F7F"]}
            />
          )}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ color: "#fff", fontFamily: "Comic Sans MS" }}
          >
            {isFirstTry
              ? "Praveenehhhh!!! First tym le en name potuta. Paravala unakum knjm paasam la iruku pola💖"
              : "Hmm... Enak therium I'm not ur fav person nu..Paravala!! I forgive you...  😏"}
          </motion.h1>
          <br />
          <button
            onClick={() => setStep(3)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#FF5E00",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            Mendal..Click here :&#41;
          </button>
        </div>
      )}
      {step === 3 && (
        <div
          className="final-message-screen"
          style={{
            textAlign: "center",
            padding: "40px",
            borderRadius: "12px",
            backgroundColor: "#FF914D",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            width: "700px",
          }}
        >
          <h1 style={{ color: "#fff", fontFamily: "Comic Sans MS" }}>
            Hey dooodd!! U know something u r lucky to have a person like me..Theriyalanah therinjiko..purinji nadanthukoo!!
          </h1>
          <p style={{ color: "#fff", fontSize: "18px", fontFamily: "Comic Sans MS" }}>
            Just kidding de!! Nejamah I'm lucky to have u! Summah linkedin la random ah pesnathu..
            ipo It'z hard for me to go a single day without talking to youu! U feel lyk fam.
            Ni romba ilanalum knjm nalla payan than..apde iruu &lt;3.
            Nejamaveh some bonds are unexpected and those bonds are really special..
            Evlo dayss nu la thrl....Pesalanah kuda keep these things as my memories!!!
            Let'z promise to be frnds forever💖
          </p>
          <img
            src={gifImage}
            alt="cute gif"
            style={{ width: "250px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default SurpriseApp;