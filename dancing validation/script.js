        /*
    /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
*/
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");

let isUsernameValid = () => {
/* მომხმარებლის სახელი უნდა შეიცავდეს 3 სიმბოლოზე მეტს.
  უნდა დაიწყოს ანბანური სიმბოლოთი შეიძლება შეიცავდეს რიცხვებს */
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
  return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
/* პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო.
  უნდა შეიცავდეს მინიმუმ 1 რიცხვს, 1 სპეციალურ სიმბოლოს, 1 პატარას და 1 დიდს */
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
  if (!isUsernameValid()) {
    messageRef.style.visibility = "hidden";
    usernameRef.style.cssText =
      "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    usernameRef.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
});

passwordRef.addEventListener("input", () => {
  if (!isPasswordValid()) {
    messageRef.style.visibility = "hidden";
    passwordRef.style.cssText =
      "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    passwordRef.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
});

submitBtn.addEventListener("mouseover", () => {
//თუ პაროლი ან მომხმარებლის სახელი არასწორია, გააკეთეთ ეს..
  if (!isUsernameValid() || !isPasswordValid()) {

//მიიღეთ წარდგენის btn-ის მიმდინარე პოზიცია
    let containerRect = document
      .querySelector(".container")
      .getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);
  //თუ ღილაკი არის მარცხენა მხარეს.. გადაიტანეთ იგი მარჯვენა მხარეს
    if (offset <= 100) {
      submitBtn.style.transform = "translateX(16.25em)";
    }
  
    else {
      submitBtn.style.transform = "translateX(0)";
    }
  }
});
submitBtn.addEventListener("click", () => {
  messageRef.style.visibility = "visible";
});