export interface IMember {
  avatar: string;
  name: string;
}

export interface IWorks {
  category: string;
  chat: string;
  description: string;
  id: string | number;
  members: IMember[];
  workType: string | number;
  userId: string | number;
}
