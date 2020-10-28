var crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

module.exports = {
    encryptPwd: function (passkey) {
        let cipher = crypto.createCipheriv(
            algorithm, Buffer.from(key), iv);
        let encrypted = cipher.update(passkey);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        let encryptedData = encrypted.toString('hex')
        return encryptedData;
    },
    decryptKey: function (encryptedKey) {
        console.log(encryptedKey)
        let ivval = Buffer.from(iv, 'hex');
        let encryptedText =
            Buffer.from(encryptedKey, 'hex');
        let decipher = crypto.createDecipheriv(
            algorithm, Buffer.from(key), ivval);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}