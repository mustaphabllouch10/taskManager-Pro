import { Move, Users, Flag, BarChart3 } from "lucide-react"; // icons (recommended)
import "../styles/hero.css";

const features = [
  {
    icon: <Move />,
    title: "Drag & Drop",
    text: "Intuitive interactions. Moving tasks feels as natural as moving sticky notes.",
    color: "blue",
  },
  {
    icon: <Users />,
    title: "Real-time Collab",
    text: "See who is working on what instantly. Syncs across all devices in milliseconds.",
    color: "green",
  },
  {
    icon: <Flag />,
    title: "Priority Focus",
    text: "Smart highlighting for high-priority items so you never miss a deadline.",
    color: "red",
  },
  {
    icon: <BarChart3 />,
    title: "Velocity Insights",
    text: "Automatic cycle time tracking helps you estimate future sprints accurately.",
    color: "yellow",
  },
];

function Features() {
  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-card">
          <div className={`icon-box ${f.color}`}>{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </section>
  );
}

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