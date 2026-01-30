import './team.css'; 
import { selectMembers, selectTasks } from '../redux/selectors';

const Team = () => {
  // Fetch members and tasks from selectors
  const members = selectMembers();
  const tasks = selectTasks();

  return (
    <div className="team-container">
      <h1 className="team-title">Team</h1>
      
      <div className="team-grid">
        {members.map((member) => {
          const assignedCount = tasks.filter(t => t.assigne === member.name).length;
          const completedCount = tasks.filter(t => t.assigne === member.name && t.status === "done").length;
          const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();

          return (
            <div key={member.id} className="member-card">
              <div className="avatar-wrapper" style={{ backgroundColor:(member.color) }}>
                {initials}
                <div className="status-dot"></div>
              </div>

              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                
                <div className="stats-container">
                  <div className="stat-item">
                    <p className="stat-number">{assignedCount}</p>
                    <p className="stat-label">Assigned</p>
                  </div>
                  <div className="stat-item">
                    <p className="stat-number text-green">{completedCount}</p>
                    <p className="stat-label">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;