import Features from "./features/features"; 
import "./landingPage.css";

const SecondSection = () => {
  return (
    <div className="Second-section"> 
        <p className="title-2">Build for flow state</p>
        <p className="description-2">Everything you need to manage tasks effectively, without the clutter of traditional project management tools.</p>
        <div className="features-container">
            <Features />
        </div>
    </div>
    
  );
}

export default SecondSection;