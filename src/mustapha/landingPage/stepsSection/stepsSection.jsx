import React from 'react';
import './StepsSection.css';

const steps = [
  { id: 1, title: 'Create', desc: 'Add tasks in seconds with shortcuts.' },
  { id: 2, title: 'Assign', desc: 'Tag your team members.' },
  { id: 3, title: 'Move', desc: 'Drag to update status.' },
  { id: 4, title: 'Track', desc: 'Visualize progress instantly.' },
];

const StepsSection = () => {
  return (
    <section className="container">
      <h2 className="title">From Chaos to Clarity</h2>
      
      <div className="steps-wrapper">
        {/* The horizontal line behind the circles */}
        <div className="line"></div>
        
        {steps.map((step) => (
          <div key={step.id} className="step-item">
            <div className="circle">{step.id}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;