const nav = document.querySelector('.navigator');
const userAgentElement = document.querySelector('.user-agent');
const appCodeName = document.querySelector('.app-code-name');
const vendor = document.querySelector('.vendor');
const mobile = document.querySelector('.mobile');
const isChrome = document.querySelector('.isChrome');
const test = document.querySelector('.test');
const link = document.querySelector('.link');
const copyButton = document.querySelector('.copy');

let endpoint = 'metaaccess://[HWID]?app_name=[appname]&app_id=[appid]';
let isAndroid = false;

function changeLink(appname, appid) {
  endpoint.replace('[appname]', appname);
  endpoint.replace('[appid]', appid);
}

function copy() {
  vendor.select();
  vendor.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(vendor.value);
}

function checkBrowser() {
  var userAgent = navigator.userAgent;

  if (isAndroid) {
    if (/edga/i.test(userAgent)) {
      changeLink('microsoft+edge', 'com.microsoft.emmx');
      test.innerText = 'EDGE';
    } else if (/opr/i.test(userAgent)) {
      changeLink('opera', 'com.opera.browser');
      test.innerText = 'OPERA';
    } else if (/firefox/i.test(userAgent)) {
      test.innerText = 'FIREFOX';
      changeLink('firefox', 'org.mozilla.firefox');
    } else if (/chrome/i.test(userAgent)) {
      test.innerText = 'CHROME';
      changeLink('chrome', 'com.android.chrome');
    } else test.innerText = 'NEW DEFAULT';
  } else {
    if (/opr/.test(userAgent)) {
      changeLink('opera', 'com.opera.OperaTouch');
      test.innerText = 'OPERA';
    } else if (/edgios/i.test(userAgent)) {
      changeLink('microsoft+edge', 'com.microsoft.msedge');
      test.innerText = 'EDGE';
    } else if (/fxios/i.test(userAgent)) {
      changeLink('firefox', 'org.mozilla.ios.Firefox');
      test.innerText = 'FIREFOX';
    } else if (/crios/i.test(userAgent)) {
      changeLink('chrome', 'com.google.chrome.ios');
      test.innerText = 'CHROME';
    } else if (/safari/i.test(userAgent)) {
      changeLink('safari', 'com.apple.mobilesafari');
      test.innerText = 'SAFARI';
    }
  }
}

function checkAndroid() {
  if (/Android/i.test(navigator.userAgent)) {
    isAndroid = true;
    return true;
  } else if (/iPhone|iPad|iPod|macintosh/i.test(navigator.userAgent)) {
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
  vendor.value = navigator.vendor;
  appCodeName.innerText = navigator.appCodeName;
  const user = detect.parse(navigator.userAgent);
  isChrome.innerText = `IsChrome = ${/chrome/i.test(userAgent)}`;
  mobile.innerText = `Famaly version: ${user.browser.family}; Browser version: ${user.browser.version}; OS name: ${user.os.name}`;
  checkAndroid();
  checkBrowser();
  endpoint.replace('[HWID]', 'sadadsa-sadasd-dsada213');
  link.href = endpoint;
  copyButton.addEventListener('click', copy);
};
