function getAnswer() {
  let question = document.getElementById("question").value;
  let answerBox = document.getElementById("answer");

  if (question.trim() === "") {
    answerBox.innerText = "⚠️ Please enter a question!";
    return;
  }

  answerBox.innerText = "🤖 Thinking...";

  setTimeout(() => {
    let answer = generateAnswer(question);
    answerBox.innerText = answer;
  }, 1000);
}

function simpleExplain() {
  let question = document.getElementById("question").value;
  let answerBox = document.getElementById("answer");

  if (question.trim() === "") {
    answerBox.innerText = "⚠️ Please enter a question!";
    return;
  }

  answerBox.innerText = "🤖 Simplifying...";

  setTimeout(() => {
    let answer = generateSimpleExplanation(question);
    answerBox.innerText = answer;
  }, 1000);
}

// 🔥 Smart answers (basic logic)
function generateAnswer(q) {
  q = q.toLowerCase();

  if (q.includes("photosynthesis")) {
    return "Photosynthesis is the process by which plants make food using sunlight, water, and carbon dioxide.";
  } 
  else if (q.includes("ai")) {
    return "Artificial Intelligence (AI) is technology that enables machines to think and learn like humans.";
  } 
  else if (q.includes("computer")) {
    return "A computer is an electronic device that processes data and performs tasks.";
  } 
  else {
    return "This is a general answer for: " + q;
  }
}

// 🔥 Simple explanation
function generateSimpleExplanation(q) {
  q = q.toLowerCase();

  if (q.includes("photosynthesis")) {
    return "Plants use sunlight to make their own food. This process is called photosynthesis.";
  } 
  else if (q.includes("ai")) {
    return "AI means machines can think and learn like humans.";
  } 
  else if (q.includes("computer")) {
    return "A computer is a machine that helps us do work faster.";
  } 
  else {
    return "Simple explanation: " + q + " in easy words.";
  }
}