import React, { useState } from 'react';

import { DatePicker, Input } from 'antd';

import { Card, Control, Upload } from '..';
const PersonalInfo = () => {
    const [avatar, setAvatar] = useState('');

    const handleSetAvatar = (img: string) => {
        setAvatar(img);
    };

    return (
        <Card>
            <Control label={'Фио'}>
                <Input placeholder={'Фио'} />
            </Control>
            <Control label={'Место жительства'}>
                <Input placeholder={'Место жительства'} />
            </Control>
            <Control label={'Номер телефона'}>
                <Input placeholder={'Номер телефона'} />
            </Control>
            <Control label={'Дата рождения'}>
                <DatePicker placeholder={'Дата рождения'} />
            </Control>
            <Upload onChange={handleSetAvatar} />
        </Card>
    );
};

export { PersonalInfo };
