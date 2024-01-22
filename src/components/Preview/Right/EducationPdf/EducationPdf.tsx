import React from 'react';
import { useSelector } from 'react-redux';

import dayjs, { Dayjs } from 'dayjs';

import { RootState } from '../../../../store';
import * as S from './style';

const EducationPdf = () => {
    const { degree, dateEnd, institution } = useSelector(
        (state: RootState) => state.education
    );

    const getFormattedDateEnd = (date: Dayjs | null) => {
        if (!date) return '';
        return ` ${dayjs(date).format('DD.MM.YYYY')}`;
    };

    return (
        <S.Wrapper>
            <S.Title>{institution}</S.Title>
            <p>
                Степень - <S.Degree>{degree}</S.Degree>
            </p>
            <p>
                Дата окончания - <b>{getFormattedDateEnd(dateEnd)}</b>
            </p>
        </S.Wrapper>
    );
};

export default EducationPdf;
