import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import AccessSection from "@/components/AccessSection/AccessSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import IntroductionSection from "@/components/IntroductionSection/IntroductionSection";
import ReturnPageTop from "@/components/Other/ReturnPageTop";
import RecruitSection from "@/components/RecruitSection/RecruitSection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TopSection from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <TopSection />
      <div className="blobBgSm blobBgMd mx-auto w-full">
        <IntroductionSection />
        <ServiceSection />
        <AboutUsSection />
        <RecruitSection />
        <AccessSection />
        <ReturnPageTop />
      </div>
      <Footer />
    </div>
  );
}
