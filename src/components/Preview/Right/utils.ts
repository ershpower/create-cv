import dayjs, { Dayjs } from 'dayjs';

export const getFormattedPeriod = (period: [Dayjs | null, Dayjs | null]) => {
    return `${dayjs(period[0]).format('DD.MM.YYYY')} - ${dayjs(
        period[1]
    ).format('DD.MM.YYYY')}`;
};
