import HeroSection from "./components/HeroSection";
import StudyGoalsSection from "./components/StudyGoalsSection";
import TopCollegesSection from "./components/TopCollegesSection";
import ExamsSection from "./components/ExamsSection";
import RankingsSection from "./components/RankingsSection";
import CollegePredictorSection from "./components/CollegePredictorSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StudyGoalsSection />
      <TopCollegesSection />
      <ExamsSection />
      <RankingsSection />
      <CollegePredictorSection />
    </main>
  );
}
