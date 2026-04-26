import { User } from '@prisma/client';

export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface JWTPayload {
  userId: string;
  role: string;
}

// Interface Segregation — IAuthService defines only auth concerns
export interface IAuthService {
  register(data: RegisterDTO): Promise<User>;
  login(data: LoginDTO): Promise<string>;
  verifyToken(token: string): JWTPayload;
  hashPassword(plain: string): Promise<string>;
  refreshToken(token: string): Promise<string>;
}
