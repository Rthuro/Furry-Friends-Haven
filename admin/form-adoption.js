const pendingUsers = [
    { name: 'John Doe', status: 'pending' },
    { name: 'Jane Smith', status: 'pending' },
    { name: 'Mike Johnson', status: 'pending' },
];
  
const approvedUsers = [
    { name: 'Alice Davis', status: 'approved' },
    { name: 'Bob Brown', status: 'approved' },
];
  
const declinedUsers = [
    { name: 'Charlie Green', status: 'declined' },
];
  
const pendingUsersList = document.getElementById('pending-users');
  const approvedUsersList = document.getElementById('approved-users');
  const declinedUsersList = document.getElementById('declined-users');
  
  pendingUsers.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    pendingUsersList.appendChild(li);
  });
  
  approvedUsers.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    approvedUsersList.appendChild(li);
  });
  
  declinedUsers.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    declinedUsersList.appendChild(li);
  });