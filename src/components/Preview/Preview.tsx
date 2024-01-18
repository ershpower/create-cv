import React, { FC, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { Modal } from 'antd';

import Left from './Left/Left';
import { Right } from './Right/Right';
import * as S from './style';

interface IPreviewProps {
    isOpen: boolean;
    onClose: () => void;
}
const Preview: FC<IPreviewProps> = ({ isOpen, onClose }) => {
    const ref = useRef<null | HTMLDivElement>(null);
    const generatePDF = useReactToPrint({
        content: () => ref.current,
        documentTitle: 'Resume',
    });
    return (
        <Modal width={1000} open={isOpen} onCancel={onClose} footer={null}>
            <S.PreviewWrapper ref={ref}>
                <Left />
                <Right />
            </S.PreviewWrapper>
            <button onClick={generatePDF}>click</button>
        </Modal>
    );
};

export default Preview;
