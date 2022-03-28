const nav = document.querySelector('.navigator');
const userAgentElement = document.querySelector('.user-agent');
const appCodeName = document.querySelector('.app-code-name');
const vendor = document.querySelector('.vendor');
const mobile = document.querySelector('.mobile');
const isChrome = document.querySelector('.isChrome');
const test = document.querySelector('.test');
const link = document.querySelector('.link');

let endpoint = 'metaaccess://[HWID]?app_name=[appname]&app_id=[appid]';
let isAndroid = false;

function changeLink(appname, appid) {
  endpoint.replace('[appname]', appname);
  endpoint.replace('[appid]', appid);
}

function checkBrowser() {
  var userAgent = navigator.userAgent.toLowerCase();

  if (isAndroid) {
    if (/edga/.test(userAgent)) {
      changeLink('microsoft+edge', 'com.microsoft.emmx');
    } else if (/opt/.test(userAgent)) {
      changeLink('opera', 'com.opera.browser');
    } else if (/firefox/i.test(userAgent)) {
      changeLink('firefox', 'org.mozilla.firefox');
    } else if (/chrome/i.test(userAgent)) {
      changeLink('chrome', 'com.android.chrome');
    }
  } else {
    if (/opt/.test(userAgent)) {
      changeLink('opera', 'com.opera.OperaTouch');
    } else if (/edgios/.test(userAgent)) {
      changeLink('microsoft+edge', 'com.microsoft.msedge');
    } else if (/fxios/.test(userAgent)) {
      changeLink('firefox', 'org.mozilla.ios.Firefox');
    } else if (/crios/.test(userAgent)) {
      changeLink('chrome', 'com.google.chrome.ios');
    } else if (/safari/.test(userAgent)) {
      changeLink('safari', 'com.apple.mobilesafari');
    }
  }
}

function checkAndroid() {
  if (/Android/i.test(navigator.userAgent)) {
    isAndroid = true;
    return true;
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    return true;
  } else if (/webOS|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

window.onload = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  nav.innerText = navigator;
  userAgentElement.innerText = userAgent;
  vendor.innerText = navigator.vendor;
  appCodeName.innerText = navigator.appCodeName;
  const user = detect.parse(navigator.userAgent);
  isChrome.innerText = /chrome/.test(userAgent);
  mobile.innerText = `Famaly version: ${user.browser.family}; Browser version: ${user.browser.version}; OS name: ${user.os.name}`;
  checkAndroid();
  checkBrowser();
  endpoint.replace('[HWID]', 'sadadsa-sadasd-dsada213');
  link.href = endpoint;
};
