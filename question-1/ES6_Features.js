// Function to filter non-strings and convert remaining words to lowercase
const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject("Input is not an array");
    } else {
      try {
        const filtered = mixedArray
          .filter(item => typeof item === "string")  // keep only strings
          .map(word => word.toLowerCase());         // convert to lowercase
        resolve(filtered);
      } catch (error) {
        reject(error);
      }
    }
  });
};


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))  
  .catch(error => console.error(error));
