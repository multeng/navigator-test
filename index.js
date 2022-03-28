const nav = document.querySelector('.navigator');
const userAgentElement = document.querySelector('.user-agent');
const appCodeName = document.querySelector('.app-code-name');
const vendor = document.querySelector('.vendor');
const mobile = document.querySelector('.mobile');
const isChrome = document.querySelector('.isChrome');



window.onload = () => {
  const userAgent = navigator.userAgent.toLowerCase;
  nav.innerText = navigator;
  userAgentElement.innerText = userAgent;
  vendor.innerText = navigator.vendor;
  appCodeName.innerText = navigator.appCodeName;
  const user = detect.parse(navigator.userAgent);
  isChrome.innerText = /chrome/.test(userAgent);
  mobile.innerText = `Famaly version: ${user.browser.family}; Browser version: ${user.browser.version}; OS name: ${user.os.name}`
}