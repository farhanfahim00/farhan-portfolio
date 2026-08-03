import { useState } from "react";
import JourneyPath from "./components/JourneyPath";
import NavTabs from "./components/NavTabs";
import SkillsGrid from "./components/SkillsGrid";
import ResumeButton from "./components/ResumeButton";
import SiteHeader from "./components/SiteHeader";
import { journey } from "./data/journeyData";
import { work } from "./data/workData";
import { skills } from "./data/skillsData";

function App() {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="bg-paper">
      <SiteHeader />
      <NavTabs active={activeTab} onChange={setActiveTab} />
      <ResumeButton />

      {activeTab === "Projects" && <JourneyPath milestones={journey} />}
      {activeTab === "Work Experience" && <JourneyPath milestones={work} />}
      {activeTab === "Skills" && <SkillsGrid skills={skills} />}
    </div>
  );
}

export default App;