import {IClient, IMediator} from '@models/users'

export interface ICreateDispute {
  userId: number;
  mediatorId: number;
  category: string;
  date: string;
  time: string;
  description?: string;
  geo?: string;
  meetingForm?: string;
  secondMember?: string;
  isEmail: boolean;
  isMediator: boolean;
}

export interface IDispute {
  userId: number;
  user: IClient;
  mediatorId: number;
  mediator: IMediator;
  category: string;
  date: string;
  time: string;
  description?: string;
  geo?: string;
  meetingForm?: string;
  secondMember?: string;
  isEmail: boolean;
  isMediator: boolean;
}
