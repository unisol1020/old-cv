import CurrentExperience from "@/components/CurrentExperience";
import DownloadPDF from "@/components/DownloadPDF";
import Hello from "@/components/Hello";
import ScrollForMoreInfo from "@/components/ScrollForMoreInfo";
import Skills from "@/components/SkillsPreview";
import SocialMedias from "@/components/SocialMedias";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-20 h-100 min-h-[87vh] justify-center relative">
        <Hello />
        <DownloadPDF />
        <ScrollForMoreInfo />
      </div>
      <Skills />
      <CurrentExperience />
      <SocialMedias />
    </div>
  );
};

export default HomePage;
