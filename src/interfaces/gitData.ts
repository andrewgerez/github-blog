import { UserData } from "./userData";

export interface GitData {
  config: object;
  data: UserData;
  headers: object;
  request: object;
  status: number;
  statusText: string;
}