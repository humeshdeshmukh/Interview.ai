// src/encryption/encryptionService.ts
import crypto from 'crypto';

export class EncryptionService {
  private algorithm: string;
  private key: Buffer;
  private iv: Buffer;

  constructor(secretKey: string) {
    this.algorithm = 'aes-256-cbc';
    this.key = crypto.scryptSync(secretKey, 'salt', 32);
    this.iv = crypto.randomBytes(16);
  }

  encrypt(text: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${this.iv.toString('hex')}:${encrypted}`;
  }

  decrypt(encryptedText: string): string {
    const [ivHex, encrypted] = encryptedText.split(':');
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, Buffer.from(ivHex, 'hex'));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}
