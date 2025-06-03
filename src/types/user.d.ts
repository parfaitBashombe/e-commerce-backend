export type Signup = {
  email: string;
  fullname: string;
  password: string;
};

export type JwtPayload = {
  payload: {
    user_id: number;
    name: string;
    email: string;
    createdAt: string;
  };
  iat: number;
  exp: number;
};

export type LogIn = {
  email: string;
  fullname?: string;
  password: string;
};
