type userType = 'client' | 'mediator';

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  familyName: string;
  phone: string;
  userType: userType;
  address?: string;
  city?: string;
  timezone?: string;
  statusDispute?: string;
  support?: string;
  statusPay?: string;
  wallet?: string;
  phoneConfirmed: boolean;
  emailConfirmed: boolean;
}

export interface IRegistrationUser {
  email: string;
  firstName: string;
  familyName: string;
  phone: string;
  userType: userType;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  firstName: string;
  familyName: string;
  address: string | undefined;
  city: string | undefined;
  timeZone: string | undefined;
  statusDispute?: string;
  support?: string;
  statusPay?: string;
  wallet?: string;
}

export interface IClient {
  id: number;
  email: string;
  firstName: string;
  familyName: string;
  phone: string;
  userType: userType;
  address?: string;
  city?: string;
  timezone?: string;
}

export interface IMediator {
  id: number;
  email: string;
  firstName: string;
  familyName: string;
  phone: string;
  userType: userType;
  address?: string;
  city?: string;
  timezone?: string;
}
