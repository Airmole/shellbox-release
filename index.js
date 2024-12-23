import Qrcode from "qrcode";
import * as $ from "./lib/zepto.min.js";

const $tips = $(".wechat-tips");
const $longtapTips = $(".inwechat-longtap");
// const $card = $(".download-card")
const $link = $(".download-link");
const $h5Qrcode = $(".insert-h5qrcode");
const ua = navigator.userAgent;
const isWechat = /micromessenger/i.test(ua);
const isDingTalk = /DingTalk/i.test(ua);

function downloadApp(link) {
  // 使用location.assign 兼容 ios safari跳转
  $link.attr("href", link);
  if ($.os.ios) link && location.assign(link);
}

function getData(node) {
  const data = {
    android: node[0].dataset.android,
    ios: node[0].dataset.ios,
  };
  return data;
}

function getNowLink(downloadLinks) {
  const ANDROID = "android";
  const IOS = "ios";

  return $.os.android
    ? downloadLinks[ANDROID]
    : $.os.ios
    ? downloadLinks[IOS]
    : "";
}

function generateQrcode(text) {
  return new Promise((resolve, reject) => {
    Qrcode.toDataURL(text, { errorCorrectionLevel: "L" }, function(err, url) {
      if (url) {
        resolve(url);
      } else {
        reject(err);
      }
    });
  });
}

$(document).ready(function() {
  if (!$.os.phone) {
/*    generateQrcode('https://shellbox.ustb.tj.cn')
      .then((url) => {
        $h5Qrcode.forEach(function(item) {
          $(item).attr("src", url);
        });
      })
      .catch(console.error);*/
  }
})

window.onload = function() {
  if ($.os.ios && isDingTalk) {
    return $tips.show();
  }

  if (isWechat) {
    $longtapTips.show();
  }

  const downloadLinks = getData($link);
  const link = getNowLink(downloadLinks);
  downloadApp(link);
};
