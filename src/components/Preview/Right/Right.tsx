import React from 'react';
import { useSelector } from 'react-redux';

import { CalendarOutlined } from '@ant-design/icons';

import { RootState } from '../../../store';
import * as S from './style';
import { getFormattedPeriod } from './utils';
const Right = () => {
    const { fio } = useSelector((state: RootState) => state.personalInfo);
    const experience = useSelector((state: RootState) => state.experience);

    return (
        <S.Wrapper>
            <S.MegaTitle>{fio}</S.MegaTitle>
            <S.Position>{'Frontend Developer'}</S.Position>
            <S.BigTitle>
                <CalendarOutlined />
                Опыт работы
            </S.BigTitle>
            {experience.map((item, index) => (
                <>
                    <S.WorkHeader key={index}>
                        <p>{item.company}</p>
                        <p>{item.position}</p>
                    </S.WorkHeader>
                    <S.Period>
                        <CalendarOutlined />
                        {getFormattedPeriod(item.period)}
                    </S.Period>
                    <S.Description>
                        <pre>{item.description}</pre>
                    </S.Description>
                </>
            ))}
        </S.Wrapper>
    );
};

export { Right };
