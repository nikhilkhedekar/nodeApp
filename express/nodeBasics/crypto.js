const crypto = require("crypto");

//using HMAC
const cryptoHMAC = crypto.createHmac("sha256", "mySecret").update("secret").digest("hex");
console.log("cryptoHash", cryptoHMAC);

//using cipher
// const cryptoCipher = crypto.createCipheriv("aes192", "mySecret")
// const cryptoCipherUpdate = cryptoCipher.update("secret", "utf8", "hex");
// const cryptoCipherUpdateFinal = cryptoCipher.final("hex");
// console.log("cryptoCipher", {
//     cryptoCipher,
//     cryptoCipherUpdate,
//     cryptoCipherUpdateFinal
// });
// const cryptoDecipher = crypto.createDecipheriv("aes192", "mySecret")
// const cryptoDecipherUpdate = cryptoDecipher.update("secret", "hex", "utf8");
// const cryptoDecipherUpdateFinal = cryptoDecipher.final("hex");
// console.log("cryptoDecipher", {
//     cryptoDecipher,
//     cryptoDecipherUpdate,
//     cryptoDecipherUpdateFinal
// });

module.exports = { 
    cryptoHMAC, 
    // cryptoCipher,
    // cryptoCipherUpdate,
    // cryptoCipherUpdateFinal
};