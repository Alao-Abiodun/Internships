const prompt = require("prompt-sync")({ sigint: true });

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let numberOfDays = days.length;
console.log(numberOfDays);

const diary = [];
while (numberOfDays >= 1) {
  let activity = prompt("Enter the activites perform in each day: ");
  let warewolf = prompt("Did you turn to warewolf that day: ");
  let activityArr = activity.split(",");
  let boolValue = warewolf.toLowerCase() === "true" ? true : false;
  diary.push({ activites: activityArr, warewolf: boolValue });
  numberOfDays--;
}
console.log(diary);
