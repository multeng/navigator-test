const nav = document.querySelector('.navigator');
const userAgent = document.querySelector('.user-agent');
const appCodeName = document.querySelector('.app-code-name');
const vendor = document.querySelector('.vendor');
const mobile = document.querySelector('.mobile');



window.onload = () => {
  nav.innerText = navigator;
  userAgent.innerText = navigator.userAgent;
  vendor.innerText = navigator.vendor;
  appCodeName.innerText = navigator.appCodeName;
  const user = detect.parse(navigator.userAgent);
  mobile.innerText = `Famaly version: ${user.browser.family}; Browser version: ${user.browser.version}; OS name: ${user.os.name}`
}