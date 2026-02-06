/**
 * Team page - member cards with assigned/completed task counts.
 */
import { useSelector } from 'react-redux';
import { selectMembers, selectTasks } from '../redux/selectors';
import { getInitials } from '../utils/stringUtils';
import '../styles/team.css';

const Team = () => {
  const members = useSelector(selectMembers);
  const tasks = useSelector(selectTasks);

  return (
    <div className="team-container">
      {/* Header */}
      <div className="team-header">
        <div>
          <h1 className="page-title">Team Members</h1>
          <p className="subtitle">Manage your team and permissions.</p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="team-grid">
        {members.map((member) => {
          const assignedCount = tasks.filter((t) => t.assignee === member.name).length;
          const completedCount = tasks.filter((t) => t.assignee === member.name && t.status === 'done').length;

          return (
            <div key={member.id} className="member-card">
              <div className="avatar-wrapper">
                <div
                  className="avatar avatar--member"
                  style={{ backgroundColor: member.color }}
                >
                  {getInitials(member.name)}
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
