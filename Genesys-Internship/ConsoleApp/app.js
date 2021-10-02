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

const DIARY = [];
while (numberOfDays >= 1) {
  let activity = prompt("Enter the activites perform in each day: ");
  let warewolf = prompt("Did you turn to warewolf that day: ");
  let activityArr = activity.split(",");
  let boolValue = warewolf.toLowerCase() === "true" ? true : false;
  DIARY.push({ activities: activityArr, warewolf: boolValue });
  numberOfDays--;
}
// console.log(diary);

const isEvent = (activity, entry) => {
  return entry.activities.indexOf(activity) !== 1;
};

// console.log(isEvent(["red", "green"], DIARY));

function tableFor(event, diary) {
  let table = [0, 0, 0, 0];
  for (let i = 0, len = diary.length; i < len; i++) {
    let entry = diary[i],
      index = 0;
    if (isEvent(event, entry)) index += 1;
    if (entry.warewolf) index += 2;
    table[index] += 1;
  }
  return table;
}

var allActivities = [];
DIARY.forEach((entry) => {
  entry.activities.forEach((event) => {
    if (allActivities.indexOf(event) === -1) {
      allActivities.push(event);
    }
  });
});
console.log(allActivities);
var allTables = allActivities.map((event) => {
  return { event: event, value: tableFor(event, DIARY) };
});
console.log(allTables);

function phi(a, b, c, d) {
  const numerator = a * d - b * c;
  const denominator = Math.sqrt((a + b) * (c + d) * (a + c) * (b + d));
  return (numerator / denominator).toFixed(2);
}
var allPhis = allTables.map((table) => {
  return { event: table.event, phi: phi.apply(null, table.value) };
});

console.log(allPhis);

var correlations = [
  { min: -1.0, max: -0.7, result: "strong negative association." },
  { min: -0.7, max: -0.3, result: "weak negative association." },
  { min: -0.3, max: +0.3, result: "little or no association." },
  { min: +0.3, max: +0.7, result: "weak positive association." },
  { min: +0.7, max: +1.0, result: "strong positive association." },
];

var rangedCorrelations = [[], [], [], [], []];
var generateRangedCorrelations = function (correlations, phis) {
  phis.forEach((phi) => {
    if (phi.phi < -0.7) {
      rangedCorrelations[0].push(phi);
    } else if (phi.phi < -0.3) {
      rangedCorrelations[1].push(phi);
    } else if (phi.phi < 0.3) {
      rangedCorrelations[2].push(phi);
    } else if (phi.phi < 0.7) {
      rangedCorrelations[3].push(phi);
    } else {
      rangedCorrelations[4].push(phi);
    }
  });
};

generateRangedCorrelations(correlations, allPhis);

var strongCorrelations = allPhis.filter((value) => {
  return value.phi < -0.5 || value.phi > 0.5;
});
