import { CarDTO } from "./carDTO";

export interface ScheduleByUserDTO {
  user_id: number
  car: CarDTO;
  startDate: String;
  endDate: String;
  id: number;
}