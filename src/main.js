function success() {
  var data = JSON.parse(this.responseText);
  console.log(data);

  document.getElementById("covid-deaths").innerHTML = data[0].death;
  document.getElementById("hospitalized").innerHTML = data[0].hospitalized;
  document.getElementById("positive").innerHTML = data[0].positive;
  document.getElementById("negative").innerHTML = data[0].negative;
  document.getElementById("onVentilatorCurrently").innerHTML =
    data[0].onVentilatorCurrently;
  document.getElementById("totalTestResults").innerHTML =
    data[0].totalTestResults;
  document.getElementById("inIcuCurrently").innerHTML = data[0].inIcuCurrently;
}

function error(err) {
  console.log("Request Failed", err);
}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open("GET", "https://api.covidtracking.com/v1/us/current.json");
xhr.send();

//Date Calculator

function dateCalculator(date) {
  var date1 = new Date(date);
  var date2 = new Date();
  var difference = date1.getTime() - date2.getTime();
  var days = Math.ceil(difference / (1000 * 3600 * 24));
  var output = Math.abs(days);
  return output;
}

document.getElementById("first-case").innerHTML = dateCalculator("1/19/2020");
document.getElementById("first-us-case").innerHTML = dateCalculator(
  "1/21/2020"
);
// document.getElementById("global-health-emergency1").innerHTML = dateCalculator(
//   "1/31/2020"
// );
document.getElementById("us-health-emergency").innerHTML = dateCalculator(
  "2/3/2020"
);
document.getElementById("california-cruise").innerHTML = dateCalculator(
  "3/6/2020"
);
document.getElementById("declared-pandemic").innerHTML = dateCalculator(
  "3/11/2020"
);
