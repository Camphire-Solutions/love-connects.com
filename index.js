document.addEventListener("DOMContentLoaded", () => {
  const onlineCount = document.getElementById("online-count");
  const userCount = document.getElementById("user-count");

  let users = 100000;
  let online = 5000;

   // Simulate live updates
  setInterval(() => {
    users += Math.floor(Math.random() * 15);   // total users grow
    let fluctuation = Math.floor(Math.random() * 30) - 15; // random +/- fluctuation
    online = Math.max(100, online + fluctuation); // never go below 100

    userCount.textContent = `Over ${users.toLocaleString()} users joined!`;
    onlineCount.textContent = `${online.toLocaleString()} friends online right now 🔥`;
  }, 1000);

  

})

