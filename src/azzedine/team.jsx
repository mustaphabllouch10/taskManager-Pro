/**
 * Team page - member cards with assigned/completed task counts.
 */
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { selectMembers, selectTasks } from '../redux/selectors';
import { addMember, removeMember } from '../redux/tasksSlice';
import './Team.css';

const Team = () => {
  const members = useSelector(selectMembers);
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [role, setRole] = useState('Developer');

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newMember = {
      id: Date.now(), // ID unique
      name: name,
      role: role,
      avatar: `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`
    };

    dispatch(addMember(newMember));
    setName('');
  };

  return (
    <div className="team-container">
      {/* Header & Add Form */}
      <div className="team-header">
        <div>
          <h1 className="page-title">Team Members</h1>
          <p className="subtitle">Manage your team and permissions.</p>
        </div>

        <form className="add-member-form" onSubmit={handleAddMember}>
          <input
            type="text"
            placeholder="Member Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Tester">QA Tester</option>
          </select>
          <button type="submit" className="btn-add-member">
            + Add
          </button>
        </form>
      </div>

      {/* Members Grid */}
      <div className="team-grid">
        {members.map((member) => {
          const assignedCount = tasks.filter(t => t.assigne === member.name).length;
          const completedCount = tasks.filter(t => t.assigne === member.name && t.status === "done").length;

          return (
            <div key={member.id} className="member-card">
              <button
                type="button"
                className="delete-btn"
                 onClick={() => dispatch(removeMember(member.id))}
              >
                <FiTrash2 size={16} />
              </button>

              <div className="avatar-wrapper">
                <img src={member.avatar} alt={member.name} className="member-avatar" />
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