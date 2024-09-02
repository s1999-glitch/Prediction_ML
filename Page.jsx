import React, { useEffect, useState } from "react";
import "./page.css";
import predict from "./img/predict.jpg";
import wideimg from "./img/img1.webp";
import data from "./data";

function Page() {
  const [link, setLink] = useState("home");
  const [showPop, setShowPop] = useState(false);
  const [topic, setTopic] = useState("Oral health: tooth retention");
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    if (topic) {
      const selected = data.find((dat) => dat.Topic === topic);
      setSelectedTopic(selected);
    }
  }, [topic]);

  return (
    <>
      {showPop && (
        <div className="pop">
          <div className="pop-container">
            <div className="predict-head">Prediction Results</div>
            <div className="predict-title">
              <span>Topic: </span>
              <span>{selectedTopic.Topic}</span>
            </div>
            <div className="predict-title">
              <span>Risk Level: </span>
              <span>{selectedTopic.risk}</span>
            </div>
            {selectedTopic.risk === "High Risk" ? (
              <>
                <div className="predict-title">
                  <span>Recommended Medicine: </span>
                  <span>{selectedTopic.medicine}</span>
                </div>
                <div className="predict-title">
                  <span>Medicine Dosage: </span>
                  <span>{selectedTopic.dosage}</span>
                </div>
                <div className="predict-title">
                  <span>Medicine Frequency: </span>
                  <span>{selectedTopic.frequency}</span>
                </div>
              </>
            ) : (
              <>
                <div className="predict-title">
                  <span>Recommendation: </span>
                  <span>{selectedTopic.recommendation}</span>
                </div>
              </>
            )}
            <div
              className="predict-btn"
              style={{ position: "absolute", left: "0px", bottom: "50px" }}
            >
              <button
                onClick={() => {
                  setShowPop(false);
                }}
              >
                PREDICT AGAIN
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="main-container">
        <div className="navbar">
          <div className="nav-logo">Alzheimer's Prediction System</div>
          <div className="nav-links">
            <div onClick={() => setLink("home")}>Home</div>
            <div onClick={() => setLink("predict")}>Predict Alzheimer's</div>
          </div>
        </div>
        <div className="main-body">
          {link === "home" && (
            <>
              <div className="body-heading">
                <span>ALZHEIMER'S</span>
                <span>PREDICTION SYSTEM</span>
              </div>
              <div className="img1">
                <img src={wideimg} alt="wide-brain" />
              </div>
              <div className="body-text">
                <div className="paragraph-head">
                  Introduction to Alzheimer's Disease
                </div>
                <div className="paragraph-text">
                  Alzheimer's disease (AD) is a progressive neurodegenerative
                  disease. Though best known for its role in declining memory
                  function, symptoms also include: difficulty thinking and
                  reasoning, making judgements and decisions, and planning and
                  performing familiar tasks. It may also cause alterations in
                  personality and behavior. The cause of AD is not well
                  understood. There is thought to be a significant hereditary
                  component. For example, a variation of the APOE gene, APOE e4,
                  increases risk of Alzheimer's disease.{" "}
                </div>
              </div>
              <div className="body-text">
                <div className="paragraph-head">
                  Why Early Detection Matters
                </div>
                <div className="paragraph-text">
                  Early detection of Alzheimer's disease is paramount because it
                  offers the best chance for effective treatment and improved
                  quality of life. Identifying the condition at its onset allows
                  for timely interventions, which can slow its progression and
                  enable individuals and their families to plan for the future.
                  Early detection also facilitates access to support services
                  and clinical trials, fostering hope for more effective
                  therapies in the fight against this devastating disease.
                </div>
              </div>
              <div className="body-text">
                <div className="paragraph-head">Purpose of the project</div>
                <div className="paragraph-text">
                  The purpose of this project proposal is to develop a machine
                  learning model for the early prediction of Alzheimer's
                  disease. Alzheimer's disease is a devastating
                  neurodegenerative disorder that affects millions of
                  individuals worldwide. Early detection is crucial for better
                  patient care and the development of potential interventions.
                  This project aims to leverage machine learning techniques to
                  create a predictive model that can identify individuals at
                  risk of Alzheimer's disease based on relevant data.
                </div>
              </div>
            </>
          )}
          {link === "predict" && (
            <>
              <div className="body-heading">
                <span>ALZHEIMER'S</span>
                <span>PREDICTION SYSTEM</span>
              </div>
              <div style={{ marginBottom: "40px" }}>
                <img src={predict} alt="Predict" />
              </div>
              <div className="predict-label">TOPIC</div>
              <div className="predict-drop">
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {data.map((dat, index) => (
                    <option key={index} value={dat.Topic}>
                      {dat.Topic}
                    </option>
                  ))}
                  <option>Frequent mental distress</option>
                </select>
              </div>
              <div className="predict-btn">
                <button onClick={() => setShowPop(true)}>PREDICT</button>
              </div>
            </>
          )}
        </div>
        <div className="footer">Copyright © 2024</div>
      </div>
    </>
  );
}

export default Page;
