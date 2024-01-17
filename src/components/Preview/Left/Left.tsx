import React from 'react';
import { useSelector } from 'react-redux';

import dayjs from 'dayjs';

import { RootState } from '../../../store';
import * as S from './style';
import { getAge, getBirthday } from './utils';

const Left = () => {
    const personalInfo = useSelector((state: RootState) => state.personalInfo);

    return (
        <S.LeftWrapper>
            <S.Avatar src={personalInfo.avatar} />
            <S.Title>возраст</S.Title>
            {getAge(personalInfo.birthday)}
            {getBirthday(personalInfo.birthday)}
        </S.LeftWrapper>
    );
};

export default Left;
