/**
 * Team page - member cards with assigned/completed task counts.
 */
import { useSelector,  } from 'react-redux';
import { selectMembers, selectTasks } from '../redux/selectors';
import './Team.css';

const Team = () => {
  const members = useSelector(selectMembers);
  const tasks = useSelector(selectTasks);


  

  return (
    <div className="team-container">
      {/* Header & Add Form */}
      <div className="team-header">
        <div>
          <h1 className="page-title">Team Members</h1>
          <p className="subtitle">Manage your team and permissions.</p>
        </div>

        
      </div>

      {/* Members Grid */}
      <div className="team-grid">
        {members.map((member) => {
          const assignedCount = tasks.filter(t => t.assigne === member.name).length;
          const completedCount = tasks.filter(t => t.assigne === member.name && t.status === "done").length;

          return (
            <div key={member.id} className="member-card">
              

              <div className="avatar-wrapper">
                <div
                className="avatar"
                style={{ backgroundColor: member.color , 
                  width: "70px",
                   height: "70px",
                    fontSize: "23px" }}
                         
                     
                 
              >
                {/* Initials from name. Fallback for undefined/empty assignee */}
                {(member.name || "?")
                  .split(/\s+/)
                  .filter(Boolean)
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase() || "?"}
              </div>
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