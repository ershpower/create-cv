import React from 'react';

import { Input, Select } from 'antd';

import { Card, Control } from '..';
import { educationOptions, EducationTypes } from './constants';

const Education = () => {
    return (
        <Card>
            <Control label={'Учреждение'}>
                <Input placeholder={'Учреждение'} />
            </Control>
            <Control label={'Дата окончания'}>
                <Input placeholder={'Дата окончания'} />
            </Control>
            <Control label={'Степень'}>
                <Select
                    defaultValue={EducationTypes.bachelor}
                    options={educationOptions}
                    style={{ width: '300px' }}
                />
            </Control>
        </Card>
    );
};

export { Education };
