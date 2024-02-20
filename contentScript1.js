(() => {
console.log('OrderFoodReminder Is Ready');
window.setInterval(alarmHandler, 1000*60*60);
})();

function alarmHandler(alarm) {
    const now = new Date();
    const alarmTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      11, // Set the alarm for 11:00 AM
      0
    );
    
    if (now.getHours() === 11 || now.getHours() === 10 || now.getHours() === 9) {
      // Display the alert as desired
      alert("This is your daily alert!"+"זכור לבצע הזמנה ");
    }
  }



