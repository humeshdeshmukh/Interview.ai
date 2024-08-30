// src/jwt/jwtService.ts
import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  signToken(payload: object, expiresIn: string | number): string {
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  verifyToken(token: string): JwtPayload | string {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
