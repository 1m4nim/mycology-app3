import { useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import { Link } from "react-router-dom";
import HomeLink from "./HomeLink";

interface ColorResult {
  hex: string;
  rgb: { r: number; g: number; b: number; a: number };
  hsl: { h: number; s: number; l: number; a: number };
  hsv: { h: number; s: number; v: number; a: number };
}

const stalkFeatures = ["繊維状", "滑らか", "鱗片がある", "太い", "細い"];

const Identify = () => {
  const [step, setStep] = useState(1);
  const [capColor, setCapColor] = useState<string>(() => {
    return localStorage.getItem("capColor") || "#ffffff";
  });
  const [selectedStalkFeature, setSelectedStalkFeature] = useState<string>("");
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [selectedTubTsuba, setSelectedTubTsuba] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("capColor", capColor);
  }, [capColor]);

  const handleColorChange = (color: ColorResult) => {
    setCapColor(color.hex);
    setColorPickerVisible(false);
  };

  const handleTubTsubaSelection = (selection: string) => {
    setSelectedTubTsuba(selection);
  };

  return (
    <div
      style={{
        backgroundColor: capColor,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "1.5rem",
          textDecoration: "none",
          color: "black",
        }}
      ></Link>

      <h2
        className="fungi-identify"
        style={{
          backgroundColor: "bisque",
          borderRadius: "5px",
          fontWeight: "lighter",
        }}
      >
        <HomeLink />
        きのこ識別
      </h2>

      {step === 1 && (
        <>
          <h3
            style={{
              fontSize: "2.5rem",
              backgroundColor: "bisque",
              borderRadius: "5px",
              fontWeight: "lighter",
            }}
          >
            傘の色を選んでください
          </h3>
          <button
            style={{ fontSize: "1.5rem" }}
            onClick={() => setColorPickerVisible(!colorPickerVisible)}
          >
            色を選択: {capColor}
          </button>
          {colorPickerVisible && (
            <SketchPicker
              color={capColor}
              onChangeComplete={handleColorChange}
            />
          )}
        </>
      )}

      {step === 2 && (
        <>
          <h3
            style={{
              fontSize: "2.5rem",
              backgroundColor: "bisque",
              borderRadius: "5px",
              fontWeight: "lighter",
            }}
          >
            柄の特徴を選んでください
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {stalkFeatures.map((feature) => (
              <button
                key={feature}
                onClick={() => setSelectedStalkFeature(feature)}
                style={{
                  fontSize: "1.5rem",
                  padding: "10px",
                  border:
                    selectedStalkFeature === feature
                      ? "2px solid black"
                      : "1px solid gray",
                  backgroundColor:
                    selectedStalkFeature === feature ? "#ddd" : "white",
                  cursor: "pointer",
                }}
              >
                {feature}
              </button>
            ))}
          </div>
          {selectedStalkFeature && (
            <p
              style={{
                height: "",
                backgroundColor: "bisque",
                fontSize: "1.5rem",
              }}
            >
              選択された特徴: {selectedStalkFeature}
            </p>
          )}
        </>
      )}

      {step === 3 && (
        <>
          <h3
            style={{
              fontSize: "2.5rem",
              backgroundColor: "bisque",
              borderRadius: "5px",
              fontWeight: "lighter",
            }}
          >
            ツボやツバはありますか？
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => handleTubTsubaSelection("ツボがある")}
              style={{
                fontSize: "1.5rem",
                padding: "10px",
                border:
                  selectedTubTsuba === "ツボがある"
                    ? "2px solid black"
                    : "1px solid gray",
                backgroundColor:
                  selectedTubTsuba === "ツボがある" ? "#ddd" : "white",
                cursor: "pointer",
              }}
            >
              ツボがある
            </button>
            <button
              onClick={() => handleTubTsubaSelection("ツバがある")}
              style={{
                fontSize: "1.5rem",
                padding: "10px",
                border:
                  selectedTubTsuba === "ツバがある"
                    ? "2px solid black"
                    : "1px solid gray",
                backgroundColor:
                  selectedTubTsuba === "ツバがある" ? "#ddd" : "white",
                cursor: "pointer",
              }}
            >
              ツバがある
            </button>
            <button
              onClick={() => handleTubTsubaSelection("どちらもある")}
              style={{
                fontSize: "1.5rem",
                padding: "10px",
                border:
                  selectedTubTsuba === "どちらもある"
                    ? "2px solid black"
                    : "1px solid gray",
                backgroundColor:
                  selectedTubTsuba === "どちらもある" ? "#ddd" : "white",
                cursor: "pointer",
              }}
            >
              どちらもある
            </button>
            <button
              onClick={() => handleTubTsubaSelection("どちらもない")}
              style={{
                fontSize: "1.5rem",
                padding: "10px",
                border:
                  selectedTubTsuba === "どちらもない"
                    ? "2px solid black"
                    : "1px solid gray",
                backgroundColor:
                  selectedTubTsuba === "どちらもない" ? "#ddd" : "white",
                cursor: "pointer",
              }}
            >
              どちらもない
            </button>
          </div>
          {selectedTubTsuba && (
            <p style={{ marginTop: "10px" }}>
              選択された特徴: {selectedTubTsuba}
            </p>
          )}
        </>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{ fontSize: "1.5rem", backgroundColor: "bisque" }}
          >
            戻る
          </button>
        )}
        {step < 3 && (
          <button
            onClick={() => setStep(step + 1)}
            style={{
              marginLeft: "10px",
              fontSize: "1.5rem",
              backgroundColor: "bisque",
            }}
          >
            次へ
          </button>
        )}
      </div>
    </div>
  );
};

export default Identify;
