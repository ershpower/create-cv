import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input } from 'antd';
import { Dayjs } from 'dayjs';

import {
    addExperience,
    deleteExperience,
    updateExperience,
} from '../../slices';
import { RootState } from '../../store';
import { IExperience } from '../../types';
import { Card, Control } from '..';
import * as S from './style';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Experience = () => {
    const dispatch = useDispatch();
    const experience = useSelector((state: RootState) => state.experience);
    const handleAdd = () => {
        dispatch(addExperience());
    };

    const handleDelete = (index: number) => {
        dispatch(deleteExperience(index));
    };

    const handleUpdate = (
        value: string,
        field: keyof IExperience,
        index: number
    ) => {
        const currentItem = experience[index];
        const newItem = {
            ...currentItem,
            [field]: value,
        };

        dispatch(updateExperience({ currentItem: newItem, index }));
    };

    const handleChangePeriod = (
        dates: null | [Dayjs | null, Dayjs | null],
        dateStrings: string[],
        index: number
    ) => {
        if (!dates) return;
        const currentItem = experience[index];
        const newItem = {
            ...currentItem,
            period: dates,
        };
        dispatch(updateExperience({ currentItem: newItem, index }));
    };

    const handleChange =
        (field: keyof IExperience, index: number) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            handleUpdate(e.target.value, field, index);

    return (
        <Card>
            {experience.map((item, index) => (
                <React.Fragment key={item.id}>
                    <S.ExperienceTitle>
                        Место работы - {index + 1}
                        {index !== 0 && (
                            <DeleteOutlined
                                onClick={() => handleDelete(index)}
                            />
                        )}
                    </S.ExperienceTitle>
                    <Control label={'Компания'}>
                        <Input
                            value={item.company}
                            onChange={handleChange('company', index)}
                            placeholder={'Компания'}
                        />
                    </Control>
                    <Control label={'Должность'}>
                        <Input
                            value={item.position}
                            onChange={handleChange('position', index)}
                            placeholder={'Должность'}
                        />
                    </Control>
                    <Control label={'Преиод работы'}>
                        <RangePicker
                            value={item.period}
                            format="YYYY-MM-DD"
                            onChange={(
                                dates: null | [Dayjs | null, Dayjs | null],
                                dateStrings: string[]
                            ) => handleChangePeriod(dates, dateStrings, index)}
                            placeholder={['Начало', 'Конец']}
                        />
                    </Control>
                    <Control label={'Описание'}>
                        <TextArea
                            value={item.description}
                            onChange={handleChange('description', index)}
                            rows={5}
                        />
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
