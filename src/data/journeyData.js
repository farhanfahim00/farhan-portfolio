import amazon from "../assets/milestone-images/amazon.png";
import crypto from "../assets/milestone-images/crypto.png";
import library from "../assets/milestone-images/library.png";
import movielens from "../assets/milestone-images/movielense.png";
import retail from "../assets/milestone-images/retail.png";
import studycard from "../assets/milestone-images/study-card.png";
import titanic from "../assets/milestone-images/titanic.png";

export const journey = [
  {
    type: "project",
    title: "Krones Vision AI Challenge (3rd Place)",
    year: "2026",
    description:
      "Computer vision challenge with Krones, detecting whether bottles are reusable from base images. Won 3rd place and 500 euro as a team of three, part of the Computer Vision course under Prof. Dr. Patrick Glauner.",
    tech: ["Python", "Computer Vision", "EfficientNet", "ConvNeXt"],
    github: "ADD_LINK_HERE",
    image: null, // no krones.png yet, add later
  },
  {
    type: "project",
    title: "StudyCard AI",
    year: "2025",
    description:
      "AI powered study assistant that converts PDFs into quizzes and flashcards using Gemini and LangChain.",
    tech: ["Python", "FastAPI", "React", "LangChain", "Gemini"],
    github: "https://github.com/farhanfahim00/StudyCard-AI",
    image: studycard,
  },
  {
    type: "project",
    title: "Crypto Chatbot",
    year: "2025",
    description:
      "Real-time cryptocurrency assistant with WebSockets and Azure deployment, 90% reduction in data latency.",
    tech: ["React", "Node", "Express", "Socket.IO", "Azure"],
    github: "https://github.com/farhanfahim00/CryptoChatbot",
    image: crypto,
  },
  {
    type: "project",
    title: "Amazon Stock Return Prediction",
    year: "2025",
    description:
      "Leakage-free time-series ML pipeline for AMZN stock analysis with 12 engineered indicators, ~54% directional accuracy.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/farhanfahim00/amazon-stock-ai-predictor",
    image: amazon,
  },
  {
    type: "project",
    title: "Library Organizer with OCR",
    year: "2024",
    description:
      "Desktop application automating book data entry via OCR, reducing manual input by 90%, built to manage 1M+ records.",
    tech: ["Python", "Tkinter", "Tesseract", "PyOCR"],
    github: "https://github.com/farhanfahim00/library",
    image: library,
  },
  {
    type: "project",
    title: "MovieLens Data Analytics",
    year: "2024",
    description:
      "End-to-end data pipeline transforming 100K+ MovieLens records into a relational SQLite database, with Power BI dashboards.",
    tech: ["Python", "SQLite", "Pandas", "Power BI"],
    github: "https://github.com/farhanfahim00/MovieLens-Data-Analysis",
    image: movielens,
  },
  {
    type: "project",
    title: "Retail Demand Forecasting Dashboard",
    year: "2024",
    description:
      "End-to-end ML pipeline predicting retail product demand using Linear Regression on 700+ transactions.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/farhanfahim00/Retail-Sales-Forecast-ML",
    image: retail,
  },
  {
    type: "project",
    title: "Titanic Survival Prediction",
    year: "2024",
    description:
      "Random Forest model predicting passenger survival with 81.7% cross-validation accuracy and a 77.99% Kaggle score.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "ADD_LINK_HERE",
    image: titanic,
  },
];