import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid 
} from 'recharts';
import { selectTasks , selectMembers } from "../redux/selectors";


const Analytics = () => {
  // Fetch tasks and members from Redux Store
  const tasks = selectTasks();
  const members = selectMembers();

  // --- Statistics Logic ---
  const completedCount = tasks.filter(t => t.status === 'done').length;
  const inProgressCount = tasks.filter(t => t.status === 'inprogress').length;
  const overdueCount = 0;

  // --- Data Preparation for Charts ---
  const statusData = [
    { name: 'To Do', value: tasks.filter(t => t.status === 'todo').length, color: '#FFBB28' }, // Yellow
    { name: 'In Progress', value: tasks.filter(t => t.status === 'inprogress').length, color: '#3498db' }, // Blue
    { name: 'Done', value: tasks.filter(t => t.status === 'done').length, color: '#2ecc71' } // Green
  ].filter(item => item.value > 0); // Hide empty slices

  // Calculate how many tasks each member has
  const workloadData = members.map(member => {
    const count = tasks.filter(t => t.assigne === member.name).length;
    return {
      name: member.name.split(' ')[0], // Display first name only to save space
      tasks: count
    };
  });

  return (
    <div className="analytics-container">
      <h1 className="page-title">Overview</h1>

      {/* Top Stats Cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-number">{tasks.length}</span>
          </div>
          <div className="stat-icon icon-green">✓</div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Completed</span>
            <span className="stat-number">{completedCount}</span>
          </div>
          <div className="stat-icon icon-green">✓</div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">In Progress</span>
            <span className="stat-number">{inProgressCount}</span>
          </div>
          <div className="stat-icon icon-blue">L</div>
        </div>

        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Overdue</span>
            <span className="stat-number">{overdueCount}</span>
          </div>
          <div className="stat-icon icon-red">!</div>
        </div>
      </div>

      {/* --- Charts Section (REAL DATA) --- */}
      <div className="charts-grid">
        
        {/* Chart 1: Pie Chart for Status */}
        <div className="chart-card">
          <h3>Task Status Distribution</h3>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend helper */}
          <div style={{display:'flex', justifyContent:'center', gap:'15px', fontSize:'0.8rem', color:'#aaa', marginTop:'-20px'}}>
             {statusData.map(d => (
                <div key={d.name} style={{display:'flex', alignItems:'center', gap:'5px'}}>
                    <div style={{width:8, height:8, borderRadius:'50%', background:d.color}}></div>
                    {d.name}
                </div>
             ))}
          </div>
        </div>

        {/* Chart 2: Bar Chart for Workload */}
        <div className="chart-card">
          <h3>Team Workload</h3>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={workloadData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#888" 
                  tick={{fill: '#888'}} 
                  axisLine={false} 
                  tickLine={false}
                />
                <YAxis 
                  stroke="#888" 
                  tick={{fill: '#888'}} 
                  axisLine={false} 
                  tickLine={false} 
                  allowDecimals={false}
                />
                <Tooltip 
                   cursor={{fill: 'rgba(255,255,255,0.05)'}}
                   contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar 
                  dataKey="tasks" 
                  fill="#6366f1" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40} 
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