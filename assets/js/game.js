//Game logic came from partially following a walkthrough on youtube, check credits for more info.
const tileDisplay = document.querySelector(".tile-container");
const keyboard = document.querySelector(".key-container");
const messageDisplay = document.querySelector(".message-container");

//Music toggle
function togglePlay() {
  document.getElementById("isAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
}

//rules pop up functions
const openRulesButton = document.querySelectorAll("[data-rules-target]");
const closeRulesButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openRulesButton.forEach((button) => {
  button.addEventListener("click", () => {
    const rules = document.querySelector(button.dataset.rulesTarget);
    openRules(rules);
  });
});

closeRulesButton.forEach((button) => {
  button.addEventListener("click", () => {
    const rules = button.closest(".rules");
    closeRules(rules);
  });
});

function openRules(rules) {
  if (rules == null) return;
  rules.classList.add("active");
  overlay.classList.add("active");
}

function closeRules(rules) {
  if (rules == null) return;
  rules.classList.remove("active");
  overlay.classList.remove("active");
}

//Array of potential words
let words = [
  "SKULL",
  "SPOOK",
  "DEATH",
  "GHOST",
  "DEMON",
  "MASKS",
  "SCARY",
  "CANDY",
  "SWEET",
  "DEVIL",
  "SOULS",
  "CLOWN",
  "SCARE",
  "TRICK",
  "TREAT",
  "NIGHT",
  "APPLE",
  "CLOAK",
  "CAPES",
  "GRAVE",
  "WITCH",
  "ALIEN",
  "MAGIC",
  "BLOOD",
  "FAIRY",
  "CURSE",
  "HEXES",
];

//Generates a random word from the above array
const boodle = words[Math.floor(Math.random() * words.length)];

//creates the keyboard keys, each row in a separate array
const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "<<"],
];

//creates guess rows
const guessRows = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

//Functions to create divs that are then turned into rows and tiles
guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement("div");
  rowElement.setAttribute("id", "guessRow-" + guessRowIndex);
  guessRow.forEach((guess, guessIndex) => {
    const tileElement = document.createElement("div");
    tileElement.setAttribute(
      "id",
      "guessRow-" + guessRowIndex + "-tile-" + guessIndex
    );
    tileElement.classList.add("tile");
    rowElement.append(tileElement);
  });
  tileDisplay.append(rowElement);
});

//Function to class to each row, create keyboard buttons for each letter in each row
keys.forEach((row) => {
  let rowElement = document.createElement("div");
  rowElement.classList.add("key-row");
  row.forEach((key) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = key;
    buttonElement.setAttribute("id", key);
    buttonElement.addEventListener("click", () => handleClick(key));
    rowElement.append(buttonElement);
  });
  keyboard.append(rowElement);
});

//Function to create effects from pressing special keys
const handleClick = (letter) => {
  console.log("clicked", letter);
  if (letter === "<<") {
    deleteLetter();
    return;
  }
  if (letter === "ENTER") {
    checkRow();
    return;
  }
  addLetter(letter);
};

//Adds letter to game board
const addLetter = (letter) => {
  if (currentTile < 5 && currentRow < 6) {
    const tile = document.getElementById(
      "guessRow-" + currentRow + "-tile-" + currentTile
    );
    tile.textContent = letter;
    guessRows[currentRow][currentTile] = letter;
    tile.setAttribute("data", letter);
    currentTile++;
    console.log("guessRows", guessRows);
  }
};

//Deletes letter from game board
const deleteLetter = () => {
  if (currentTile > 0) {
    currentTile--;
    const tile = document.getElementById(
      "guessRow-" + currentRow + "-tile-" + currentTile
    );
    tile.textContent = "";
    guessRows[currentRow][currentTile] = "";
    tile.setAttribute("data", "");
  }
};

//Checks if answer is correct, if not then goes to next row.
const checkRow = () => {
  const guess = guessRows[currentRow].join("");

  if (currentTile > 4) {
    console.log("guess is " + guess, "boodle is " + boodle);
    flipTile();
    if (boodle == guess) {
      showMessage("Spooktacular! You guessed the correct word!");
      isGameOver = true;
      return;
    } else {
      if (currentRow >= 5) {
        isGameOver = true;
        showMessage("Game Over");
        return;
      }
      if (currentRow < 5) {
        currentRow++;
        currentTile = 0;
      }
    }
  }
};

//Function to create message
const showMessage = (message) => {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageDisplay.append(messageElement);
  setTimeout(() => messageDisplay.removeChild(messageElement), 5000);
};

//Adds colors to keys
const addColorToKey = (keyLetter, color) => {
  const key = document.getElementById(keyLetter);
  key.classList.add(color);
};

//Flips tiles and changes tile color depending on whether letter is in Boodle index
const flipTile = () => {
  const rowTiles = document.querySelector("#guessRow-" + currentRow).childNodes;
  let checkBoodle = boodle;
  const guess = [];

  //Grey overlay function
  rowTiles.forEach((tile) => {
    guess.push({ letter: tile.getAttribute("data"), color: "grey-overlay" });
  });

  //Green overlay function
  guess.forEach((guess, index) => {
    if (guess.letter == boodle[index]) {
      guess.color = "green-overlay";
      checkBoodle = checkBoodle.replace(guess.letter, "");
    }
  });

  //Yellow overlay function
  guess.forEach((guess) => {
    if (checkBoodle.includes(guess.letter)) {
      guess.color = "yellow-overlay";
      checkBoodle = checkBoodle.replace(guess.letter, "");
    }
  });

  //Flip
  rowTiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("flip");
      tile.classList.add(guess[index].color);
      addColorToKey(guess[index].letter, guess[index].color);
    }, 500 * index);
  });
};
