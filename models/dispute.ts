export interface INewDispute {
  category: string;
  date: string;
  description: string;
  geo: string;
  isEmail: boolean;
  isMediator: boolean;
  meetingForm: string[] | undefined;
  secondMember: string | undefined;
  time: string;
}
