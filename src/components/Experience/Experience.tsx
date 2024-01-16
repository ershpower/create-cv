import React, { useState } from 'react';

import { Button, DatePickerProps, Input } from 'antd';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
import { RangePickerProps } from 'antd/es/date-picker';
const { TextArea } = Input;
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { IExperience } from '../../types';
import { Card, Control } from '..';
import * as S from './style';

const initialState: IExperience = {
    company: '',
    position: '',
    description: '',
    period: [dayjs(), dayjs()],
};

const Experience = () => {
    const [experience, setExperience] = useState<IExperience[]>([initialState]);
    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const handleAdd = () => {
        setExperience((prev) => [...prev, initialState]);
    };

    const handleDelete = (index: number) => {
        const newState = [
            ...experience.slice(0, index),
            ...experience.slice(index + 1),
        ];

        setExperience(newState);
    };

    return (
        <Card>
            {experience.map((item, index) => (
                <React.Fragment key={Math.random()}>
                    <S.ExperienceTitle>
                        Место работы - {index + 1}
                        <DeleteOutlined onClick={() => handleDelete(index)} />
                    </S.ExperienceTitle>
                    <Control label={'Компания'}>
                        <Input value={item.company} placeholder={'Компания'} />
                    </Control>
                    <Control label={'Должность'}>
                        <Input
                            value={item.position}
                            placeholder={'Должность'}
                        />
                    </Control>
                    <Control label={'Преиод работы'}>
                        <RangePicker
                            value={item.period}
                            format="YYYY-MM-DD"
                            onChange={onChange}
                            placeholder={['Начало', 'Конец']}
                        />
                    </Control>
                    <Control label={'Описание'}>
                        <TextArea value={item.description} rows={5} />
                    </Control>
                </React.Fragment>
            ))}
            <Button onClick={handleAdd} type={'primary'}>
                Добавить еще
            </Button>
        </Card>
    );
};

export { Experience };
