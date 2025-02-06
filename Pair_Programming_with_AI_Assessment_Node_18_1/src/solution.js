/*
  Write each function according to the instructions.
  
  When a function's parameters reference `games`, it references an object that looks like the one that follows.
  {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 29 }
  }
/


/* Use an AI assistant to debug the following function */
let games =   {
    "Magic The Gathering Arena": { wins: 44, lost: 99 },
    "Black Jack": { wins: 34, lost: 34 }
  }
  // 29
function getTotalWins(games) {
  let totalWins = 0;

  for (const game in games) {
    totalWins += games[game].wins;
  }

  return totalWins;
}

/* Use an AI assistant to help you write the following function */
function printWinLossStatus(games) {
  let winLossArr = []
  for (const game in games) {
    if (games[game].wins > games[game].lost) {
      winLossArr.push("has more wins")
    }
    else if (games[game].wins < games[game].lost) {
      winLossArr.push("has more losses")
    }
    else if (games[game].wins === games[game].lost) {
      winLossArr.push("has the same number of wins and losses")
    }

  }

  console.log(winLossArr)
  return winLossArr
}

printWinLossStatus(games)
module.exports = {
  getTotalWins,
  printWinLossStatus,
};
