const logs = [
  { user: "User1", action: "Logged In", time: "10:01 AM" },
  { user: "User2", action: "Logged Out", time: "10:15 AM" },
  { user: "User3", action: "API Call", time: "10:22 AM" },
  { user: "Admin", action: "Updated Settings", time: "10:40 AM" },
];

const logList = document.getElementById('logList');

logs.forEach(log => {
  const li = document.createElement('li');
  li.textContent = `${log.user} - ${log.action} at ${log.time}`;
  logList.appendChild(li);
});