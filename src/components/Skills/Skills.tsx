import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Select } from 'antd';

import './style.css';

import { setSkills } from '../../slices';
import { RootState } from '../../store';
import { Card, Control } from '..';
import { skillOptions } from './constants';

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state: RootState) => state.skills);

    const handleChange = (value: string[]) => {
        dispatch(setSkills(value));
    };

    return (
        <Card>
            <Control label={'Навыки'}>
                <Select
                    value={skills.skills}
                    mode="multiple"
                    allowClear
                    style={{ minWidth: '300px' }}
                    placeholder={'Выберите навыки'}
                    options={skillOptions}
                    onChange={handleChange}
                />
            </Control>
            <List
                dataSource={skills.skills}
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
