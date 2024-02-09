import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const jsonCaticode =
  "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3";

// const fetchData = (apiEndPoint) => {
//   fetch(apiEndPoint)
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((error) => console.log(error));
// };

//Solution using async/await

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

const fetchCatData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    //console.log(json);
    //Extracting the text from the resultant json object
    const textData = json.map((item) => item.text);
    console.log(textData);
  } catch (error) {
    console.log(error);
  }
};

//Calling the async functions
fetchData(jsonTypicode);
console.log("Check out some fun cat facts...");
fetchCatData(jsonCaticode);
