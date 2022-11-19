const URL: string = "http://localhost:5000/api/goals";
fetch(URL, {
  method: "GET",
    // mode: "no-cors",
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

export {};
