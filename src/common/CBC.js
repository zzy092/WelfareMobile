import CryptoJS from "crypto-js";

export default {
  // 加密
  encrypt(word) {

    let key = CryptoJS.enc.Utf8.parse("Oeutmnghahdflgfe");
    let iv = CryptoJS.enc.Utf8.parse("Oeutmnghahdflgfe");
    let srcs = CryptoJS.enc.Utf8.parse(word);

    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
  // 解密
  decrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : "Oeutmnghahdflgfe";
    ivStr = ivStr ? ivStr : "Oeutmnghahdflgfe";
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);

    var decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
  }
};
