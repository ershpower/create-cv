import dayjs, { Dayjs } from 'dayjs';

export const getFormattedPeriod = (period: [Dayjs | null, Dayjs | null]) => {
    if (!period.length || (!period[0] && !period[1])) return '';
    return `${dayjs(period[0]).format('DD.MM.YYYY')} - ${dayjs(
        period[1]
    ).format('DD.MM.YYYY')}`;
};
