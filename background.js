
// Function to handle the alarm event
function alarmHandler(alarm) {
    console.log("Alarm triggered!", alarm);
    // Do something when the alarm is triggered
  }
  
  // Set up the alarm
  chrome.alarms.create("myAlarm", {
    delayInMinutes: 0, // Trigger the alarm immediately
    periodInMinutes: 10 // Repeat every 10 minutes
  });
  
  // Add an event listener for the alarm
  chrome.alarms.onAlarm.addListener(alarmHandler);