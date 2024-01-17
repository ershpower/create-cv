import React, { FC } from 'react';

import { Modal } from 'antd';

import Left from './Left/Left';
import * as S from './style';

interface IPreviewProps {
    isOpen: boolean;
    onClose: () => void;
}
const Preview: FC<IPreviewProps> = ({ isOpen, onClose }) => {
    return (
        <Modal width={643} open={isOpen} onCancel={onClose} footer={null}>
            <S.PreviewWrapper>
                <Left />
            </S.PreviewWrapper>
        </Modal>
    );
};

export default Preview;
