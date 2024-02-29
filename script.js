// const gameContainer = document.querySelector(".container"),
//   userResult = document.querySelector(".user_result img"),
//   cpuResult = document.querySelector(".cpu_result img"),
//   result = document.querySelector(".result"),
//   optionImages = document.querySelectorAll(".option_image"),
//   userScoreDisplay = document.getElementById("userScore"),
//   cpuScoreDisplay = document.getElementById("cpuScore");

// let userScore = 0;
// let cpuScore = 0;

// optionImages.forEach((image, index) => {
//   image.addEventListener("click", (e) => {
//     image.classList.add("active");

//     userResult.src = cpuResult.src = "images/rock.png";
//     result.textContent = "Wait...";

//     optionImages.forEach((image2, index2) => {
//       index !== index2 && image2.classList.remove("active");
//     });

//     gameContainer.classList.add("start");

//     let time = setTimeout(() => {
//       gameContainer.classList.remove("start");

//       let imageSrc = e.target.querySelector("img").src;
//       userResult.src = imageSrc;

//       let randomNumber = Math.floor(Math.random() * 3);
//       let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
//       cpuResult.src = cpuImages[randomNumber];

//       let cpuValue = ["R", "P", "S"][randomNumber];
//       let userValue = ["R", "P", "S"][index];

//       let outcomes = {
//         RR: "Draw",
//         RP: "Cpu",
//         RS: "User",
//         PP: "Draw",
//         PR: "User",
//         PS: "Cpu",
//         SS: "Draw",
//         SR: "Cpu",
//         SP: "User",
//       };

//       let outComeValue = outcomes[userValue + cpuValue];

//       if (outComeValue === "User") {
//         userScore++;
//       } else if (outComeValue === "Cpu") {
//         cpuScore++;
//       }

//       userScoreDisplay.textContent = `User: ${userScore}`;
//       cpuScoreDisplay.textContent = `Cpu: ${cpuScore}`;

//       result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
//     }, 1500);
//   });
// });




const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  userScoreDisplay = document.getElementById("userScore"),
  cpuScoreDisplay = document.getElementById("cpuScore"),
  restartBtn = document.getElementById("restartBtn");

let userScore = 0;
let cpuScore = 0;

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    if (userScore < 5 && cpuScore < 5) {
      image.classList.add("active");

      userResult.src = cpuResult.src = "images/rock.png";
      result.textContent = "Wait...";

      optionImages.forEach((image2, index2) => {
        index !== index2 && image2.classList.remove("active");
      });

      gameContainer.classList.add("start");

      let time = setTimeout(() => {
        gameContainer.classList.remove("start");

        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R", "P", "S"][randomNumber];
        let userValue = ["R", "P", "S"][index];

        let outcomes = {
          RR: "Draw",
          RP: "Cpu",
          RS: "User",
          PP: "Draw",
          PR: "User",
          PS: "Cpu",
          SS: "Draw",
          SR: "Cpu",
          SP: "User",
        };

        let outComeValue = outcomes[userValue + cpuValue];

        if (outComeValue === "User") {
          userScore++;
        } else if (outComeValue === "Cpu") {
          cpuScore++;
        }

        userScoreDisplay.textContent = `User: ${userScore}`;
        cpuScoreDisplay.textContent = `Cpu: ${cpuScore}`;

        result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;

        if (userScore === 5 || cpuScore === 5) {
          // Display message for winning condition
          result.innerHTML = userScore === 5 ? `Game Over<br><b>User Won!!</b>` : `Game Over<br><b>Cpu Won!!</b>`;
          // Hide the restart button
          restartBtn.style.display = "block";
        }
      }, 1500);
    }
  });
});

restartBtn.addEventListener("click", () => {
  // Reset scores
  userScore = 0;
  cpuScore = 0;
  result.textContent = "Let's Play!!";
  userScoreDisplay.textContent = `User: ${userScore}`;
  cpuScoreDisplay.textContent = `Cpu: ${cpuScore}`;
  restartBtn.style.display = "none";
});
