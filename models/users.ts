type userType = 'client' | 'mediator';

export interface IUser {
  email: string;
  name: string;
  phone: string;
  userType: userType;
  id: string | number;
  password: string;
  address: string | undefined;
  city: string | undefined;
  timeZone: string | undefined;
  statusDispute?: string;
  support?: string;
  statusPay?: string;
  wallet?: string;
}

export interface IRegistrationUser {
  email: string;
  name: string;
  phone: string;
  userType: userType;
}
