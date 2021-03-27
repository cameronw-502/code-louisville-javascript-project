function success() {
  var data = JSON.parse(this.responseText);
  console.log(data);

  document.getElementById("positive").innerHTML = numberWithCommas(
    data[0].positive
  );
  document.getElementById("covid-deaths").innerHTML = numberWithCommas(
    data[0].death
  );
  document.getElementById("inIcuCurrently").innerHTML = numberWithCommas(
    data[0].inIcuCurrently
  );
  document.getElementById("hospitalized").innerHTML = numberWithCommas(
    data[0].hospitalized
  );
  document.getElementById("negative").innerHTML = numberWithCommas(
    data[0].negative
  );
  document.getElementById("onVentilatorCurrently").innerHTML = numberWithCommas(
    data[0].onVentilatorCurrently
  );
  document.getElementById("totalTestResults").innerHTML = numberWithCommas(
    data[0].totalTestResults
  );
  document.getElementById("pending1").innerHTML = numberWithCommas(
    data[0].pending
  );
  document.getElementById("icuCummulative").innerHTML = numberWithCommas(
    data[0].inIcuCumulative
  );
}

function error(err) {
  console.log("Request Failed", err);
}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open("GET", "https://api.covidtracking.com/v1/us/current.json");
xhr.send();

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
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
document.getElementById("deathsPast").innerHTML = dateCalculator("5/28/2020");
document.getElementById("airborne").innerHTML = dateCalculator("7/9/2020");
document.getElementById("moderna").innerHTML = dateCalculator("7/27/2020");
document.getElementById("pfizer").innerHTML = dateCalculator("9/14/2020");
document.getElementById("one-day").innerHTML = dateCalculator("11/4/2020");
document.getElementById("pfizer-release").innerHTML = dateCalculator(
  "12/11/2020"
);
document.getElementById("moderna-release").innerHTML = dateCalculator(
  "12/18/2020"
);
//Newsletter Signup Form

let saveFile = () => {
  const firstName = document.getElementById("txtFirstName");
  const lastName = document.getElementById("txtLastName");
  const phoneNumber = document.getElementById("txtPhoneNumber");
  const email = document.getElementById("txtEmailAddress");
  const terms = document.getElementById("agree");

  let data =
    "\r First Name: " +
    firstName.value +
    " \r\n " +
    "Last Name: " +
    lastName.value +
    " \r\n " +
    "Phone Number: " +
    phoneNumber.value +
    " \r\n " +
    "Email: " +
    email.value +
    " \r\n " +
    "Agree: " +
    terms.value;

  const textToBLOB = new Blob([data], { type: "text/plain" });
  const sFileName = "newsletterSignups.txt";

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }
  newLink.click();
};
