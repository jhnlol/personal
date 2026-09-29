import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FC } from "react";

const MainPage: FC = () => {
  return (
    <div className="w-screen min-h-screen bg-bg-main flex flex-col items-center justify-start gap-y-5 text-content-primary">
      <Header />
      <div className="w-full max-w-4xl flex flex-col justify-start gap-y-5 px-2 md:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  )
}
export default MainPage;