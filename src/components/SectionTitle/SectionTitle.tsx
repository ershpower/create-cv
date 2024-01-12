import React, { FC } from 'react';

import * as S from './style';

interface ISectionTitleProps {
    title: string;
}
const SectionTitle: FC<ISectionTitleProps> = ({ title }) => {
    return <S.Title>{title}</S.Title>;
};

export { SectionTitle };
