import { Dayjs } from 'dayjs';

export interface IPersonalInfo {
    fio: string;
    address: string;
    phone: string;
    birthday: Dayjs | undefined;
    avatar: string;
}
