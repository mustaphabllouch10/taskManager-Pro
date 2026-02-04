/**
 * Analytics dashboard - stats cards and charts.
 * Pie chart: task status distribution. Bar chart: workload per team member.
 */
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { useSelector } from 'react-redux';
import { selectTasks, selectMembers } from "../redux/selectors";

// Custom Tooltip Component for Glassmorphism effect
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label ? `${label}` : payload[0].name}</p>
        <p className="tooltip-value">
          {payload[0].value} Tasks
        </p>
      </div>
    );
  }
  return null;
};

const Analytics = () => {
  const tasks = useSelector(selectTasks);
  const members = useSelector(selectMembers);

  const completedCount = tasks.filter(t => t.status === 'done').length;
  const inProgressCount = tasks.filter(t => t.status === 'inprogress').length;
  const overdueCount = 0;

  // Colors Palette
  const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];

  const statusData = [
    { name: 'To Do', value: tasks.filter(t => t.status === 'todo').length, color: COLORS[0] },
    { name: 'In Progress', value: tasks.filter(t => t.status === 'inprogress').length, color: COLORS[1] },
    { name: 'In Review', value: tasks.filter(t => t.status === 'inreview').length, color: COLORS[2] },
    { name: 'Done', value: tasks.filter(t => t.status === 'done').length, color: COLORS[3] },
  ].filter(item => item.value > 0);

  // Bar chart: tasks assigned per member
  const workloadData = members.map(member => {
    const count = tasks.filter(t => t.assigne === member.name).length;
    return {
      name: member.name,
      tasks: count
    };
  });

  return (
    <div className="analytics-container">
      <div className="header-section">
        <h1 className="page-title">Dashboard Overview</h1>
        <p className="subtitle">Real-time insights and performance metrics</p>
      </div>

      {/* Top Stats Cards with Glow Effect */}
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-info">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-number">{tasks.length}</span>
          </div>
          <div className="stat-icon-bg">📊</div>
        </div>

        <div className="stat-card done">
          <div className="stat-info">
            <span className="stat-label">Completed</span>
            <span className="stat-number">{completedCount}</span>
          </div>
          {/* SVG Icon for Check */}
          <div className="stat-icon-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>

        <div className="stat-card progress">
          <div className="stat-info">
            <span className="stat-label">In Progress</span>
            <span className="stat-number">{inProgressCount}</span>
          </div>
          {/* SVG Icon for Loader */}
          <div className="stat-icon-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
          </div>
        </div>

        <div className="stat-card alert">
          <div className="stat-info">
            <span className="stat-label">Overdue</span>
            <span className="stat-number">{overdueCount}</span>
          </div>
          {/* SVG Icon for Alert */}
          <div className="stat-icon-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
        </div>
      </div>

      {/* --- Charts Section --- */}
      <div className="charts-grid">

        {/* Chart 1: Status Distribution */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Status Distribution</h3>
          </div>
          <div className="chart-wrapper" style={{ width: '100%', height: '300px', minHeight: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Custom Legend */}
          <div className="chart-legend">
            {statusData.map(d => (
              <div key={d.name} className="legend-item">
                <span className="dot" style={{ background: d.color }}></span>
                <span className="legend-text">{d.name}</span>
                <span className="legend-val">{d.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: Workload */}
        <div className="chart-card">
          <div className="chart-header">
            <h3>Team Workload</h3>
          </div>
          <div className="chart-wrapper" style={{ width: '100%', height: '300px', minHeight: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workloadData} barSize={50}>
                {/* Define Gradient */}
                <defs>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="#666"
                  tick={{ fill: '#888', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#666"
                  tick={{ fill: '#888', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                <Bar
                  dataKey="tasks"
                  fill="url(#colorTasks)" // Use the gradient
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;