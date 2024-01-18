import React from 'react';
import { useSelector } from 'react-redux';

import { ConsoleSqlOutlined } from '@ant-design/icons';

import { RootState } from '../../../store';
import * as S from './style';
import { SkillsList } from './style';
import { getAge, getBirthday } from './utils';

const Left = () => {
    const { birthday, avatar, address } = useSelector(
        (state: RootState) => state.personalInfo
    );

    const { skills } = useSelector((state: RootState) => state.skills);
    console.log(skills);

    return (
        <S.LeftWrapper>
            <S.Avatar src={avatar} />
            <S.Title>возраст</S.Title>
            {getAge(birthday)}
            {getBirthday(birthday)}
            <S.Title>место жительства</S.Title>
            {address}
            <S.SkillWrapper>
                <S.Title2>
                    <ConsoleSqlOutlined style={{ marginRight: '10px' }} />
                    Навыки
                </S.Title2>
                <S.SkillsList>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </S.SkillsList>
            </S.SkillWrapper>
        </S.LeftWrapper>
    );
};

export default Left;
