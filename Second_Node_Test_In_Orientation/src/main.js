const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

// Parameters: question (string)
// Returns: Promise that resolves to a string or an error message
// TODO: Implement the getFortune function by utilizing the ask function to get the fortune for the question.
// Hint: Call the ask function with the question and extract the fortune from the response array.
function getFortune(question) {
  //call the ask function (with the question)
  return ask(question)
    .then((responseArray) => {
      return responseArray;
    })
    .catch((error) => `There was an error: ${error}`);
  //extract the fortune from the response array.
}

// Returns: Promise that resolves to an array of strings or an error message
// TODO: Create a full session by combining the welcome, getFortune, and goodbye functions.
// Hint: Use promise chaining to call the functions in the correct order and concatenate the results.
function fullSession(question) {
  // Call the welcome function.
  return welcome()
    .then((welcomeMessage) => {
      return getFortune(question)
        .then((fortuneMessage) => [welcomeMessage, fortuneMessage])
        .catch((errorMessage) => [welcomeMessage, errorMessage]);
    })
    .then((sessionArray) => {
      return goodbye().then((goodbyeMessage) => [
        ...sessionArray,
        goodbyeMessage,
      ]);
    });
  // Chain the getFortune function to get the fortune for the question.
  // Chain the goodbye function and concatenate the results with the session.
  // Return a promise that resolves to the final session array or an error message.
}

module.exports = { getFortune, fullSession };
