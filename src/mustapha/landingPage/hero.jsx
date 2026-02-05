/**
 * Hero section - headline, animated dot grid background, Get Started button.
 * DotGrid reacts to mouse movement and clicks.
 */
import "./landingPage.css";
import ShinyText from "./shinyText/shinyText.jsx";
import DotGrid from "./dotGridBg/dotGrid.jsx";
import Button from "./GetStartedButton.jsx";
import {Link } from 'react-router-dom';

const Hero = () => {
    return (
    <div className="hero-section">
        <div style={{ width: '100%', height: '800px', position: 'relative' }} className="dot-grid-bg">
            <DotGrid
                dotSize={3}
                gap={15}
                baseColor="#271E37"
                activeColor="#8A5CF4"
                proximity={170}
                shockRadius={450}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            />
        </div >
        <div className="hero-content">
            <ShinyText
            text="Organize your work."
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={true}
            disabled={false}
            />
            <ShinyText
                text="Move faster."
                speed={2}
                delay={0}
                color="#757373"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={true}
                disabled={false}
            />
            <p className="hero-description">The minimal Kanban board designed for high-velocity teams. Cut through the noise and focus on what matters most—shipping.</p>
            <Link  to="/signup" style={{ textDecoration: 'none' }}>
                <Button />
            </Link>

        </div>
       
    </div>
    );
}   
export default Hero;