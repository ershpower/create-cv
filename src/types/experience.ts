import { Dayjs } from 'dayjs';

export interface IExperience {
    company: string;
    position: string;
    period: [Dayjs, Dayjs];
    description: string;
}
