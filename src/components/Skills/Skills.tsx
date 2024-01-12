import React, { useState } from 'react';

import { List, Select } from 'antd';

import './style.css';

import { Card, Control } from '..';
import { skillOptions } from './constants';

const Skills = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const handleChange = (value: string[]) => {
        setSelectedSkills(value);
    };

    return (
        <Card>
            <Control label={'Навыки'}>
                <Select
                    value={selectedSkills}
                    mode="multiple"
                    allowClear
                    style={{ minWidth: '300px' }}
                    placeholder={'Выберите навыки'}
                    options={skillOptions}
                    onChange={handleChange}
                />
            </Control>
            <List
                dataSource={selectedSkills}
                locale={{ emptyText: '' }}
                renderItem={(item) => (
                    <List.Item>
                        <p>{item}</p>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export { Skills };
