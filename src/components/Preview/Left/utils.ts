import dayjs, { Dayjs } from 'dayjs';

export const getAge = (date: Dayjs | null) => {
    if (!date) return '';
    const now = dayjs();
    let age = now.year() - date.year();

    if (now.month() - date.month() < 0) {
        age = age - 1;
    }
    return `${age} года`;
};

export const getBirthday = (date: Dayjs | null) => {
    if (!date) return '';
    return ` (${dayjs(date).format('DD.MM.YYYY')})`;
};
