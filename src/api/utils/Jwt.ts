import jwt from 'jsonwebtoken';
import { Jwt as IJwt, User } from '../protocols/utils';

export class Jwt implements IJwt {
  decode(token: string): User {
    const secretKey = process.env.JWT_KEY ?? 'secret_key';
    const decoded: any = jwt.verify(token, secretKey);

    return {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
    };
  }
}
