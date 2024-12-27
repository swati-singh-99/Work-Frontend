async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("with async=", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

const fetchData = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        reject("Network response was not ok");
      } else {
        return response.json();
      }
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
