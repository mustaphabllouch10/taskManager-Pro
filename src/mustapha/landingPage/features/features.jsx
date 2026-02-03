import "./features.css";
import {
  Move,
  Users,
  Flag,
  BarChart3,
} from "lucide-react"; // icons (recommended)

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

export default Features ;