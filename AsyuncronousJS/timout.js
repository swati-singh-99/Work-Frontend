function apiCall1() {
  setTimeout(() => {
    console.log("API Call 1 complete");
    console.log("Data from API 1");
  }, 1000);
}

function apiCall2() {
  setTimeout(() => {
    console.log("API Call 2 complete");
    console.log("Data from API 2");
  }, 1000);
}

function runWithSetTimeout() {
  apiCall1();
  setTimeout(() => {
    apiCall2();
  }, 5000);
}

runWithSetTimeout();
