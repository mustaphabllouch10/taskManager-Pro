/**
 * Landing page - home route (/).
 * Renders hero section with animated background and CTA.
 */
import Hero from "../features/landing/components/Hero";
import SecondSection from "../features/landing/components/FeaturesSection";
import StepsSection from "../features/landing/components/StepsSection";
import "../features/landing/styles/hero.css";

const LandingPage = () => {
    return <div>
        <Hero />
        <SecondSection />
        <StepsSection />

    </div>;
}


export default LandingPage;