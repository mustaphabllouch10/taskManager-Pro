/**
 * Landing page - home route (/).
 * Renders hero section with animated background and CTA.
 */
import Hero from "./hero.jsx";
import SecondSection from "./second-section.jsx";
import StepsSection from "./stepsSection/stepsSection.jsx";
import "./landingPage.css";

const LandingPage = () => {
    return <div>
        <Hero />
        <SecondSection />
        <StepsSection />
        
        </div>;
}


export default LandingPage;