const nav = document.querySelector('.navigator');
const userAgent = document.querySelector('.user-agent');
const appCodeName = document.querySelector('.app-code-name');



window.onload = () => {
  nav.innerText = navigator;
  userAgent.innerText = navigator.userAgent;
}