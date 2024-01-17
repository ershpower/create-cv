import React, { useState } from 'react';

import { FloatButton } from 'antd';

import {
    Education,
    Experience,
    Header,
    PersonalInfo,
    SectionTitle,
    Skills,
} from './components';
import Preview from './components/Preview/Preview';

function App() {
    const [isOpenPreview, setIsOpenPreview] = useState(false);

    const handleOpenPreview = () => setIsOpenPreview(true);
    const handleClosePreview = () => setIsOpenPreview(false);

    return (
        <div className="App container">
            <Header />
            <SectionTitle title={'Персональная информация'} />
            <PersonalInfo />
            <SectionTitle title={'Образование'} />
            <Education />
            <SectionTitle title={'Навыки'} />
            <Skills />
            <SectionTitle title={'Опыт работы'} />
            <Experience />
            <FloatButton
                type="primary"
                style={{ width: '100px', height: '100px' }}
                description={'Показать превью'}
                onClick={handleOpenPreview}
            />
            <Preview isOpen={isOpenPreview} onClose={handleClosePreview} />
        </div>
    );
}

export { App };
