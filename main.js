const content = document.getElementById("content");
const text = "BLUETERMINAL";
const limit = text.length;
const strings = "abcdefghijklmnopqrstuvwxyz_-+?$%^&*()!@#$%";

for (let i = 0; i < limit; i++) {
  const span = document.createElement("span");
  content.append(span);
}

const elements = document.querySelectorAll("#content span");

elements.forEach((span, index) => {
  const targetChar = text[index];

  let randTime = Math.ceil(Math.random() * 100) + 50;
  let interval = setInterval(() => {
    let randIndex = Math.ceil(Math.random() * (strings.length - 1));
    span.innerHTML = strings[randIndex];
  }, randTime);

  setTimeout(() => {
    clearInterval(interval);
    span.innerHTML = targetChar;
  }, randTime * 5);
});
