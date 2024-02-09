const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Your solution(s) to exercise001 here!

/**  Solution using .then and .catch
//Success Response
promise.then((response) => {
	console.log(`Yay! Promise resolved with response: ${response}`);
})
//Failure Response
.catch((response) => {
	console.log(`Boo. Promise rejected with response: ${response}`);
}) */

/**  Solution using await and async */

// async function getPromiseResponse() {
// 	try {
// 		const result = await promise
// 		console.log(`Yay! Promise resolved with response: ${result}`);
// 	} catch(error) {
// 	console.error(`Boo. Promise rejected with response: ${error}`);
// }
// }

const getPromiseResponse = async () => {
  try {
        const result = await promise;
        console.log(`Yay! Promise resolved with response: ${result}`);
      } 
	  catch (error) 
	  {
      console.error(`Boo. Promise rejected with response: ${error}`);
      }
}; 

//calling the async function
getPromiseResponse();
