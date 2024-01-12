import React from 'react';

import {
    Education,
    Experience,
    Header,
    PersonalInfo,
    SectionTitle,
    Skills,
} from './components';

function App() {
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
        </div>
    );
}

export { App };
