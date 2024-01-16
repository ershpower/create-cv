import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DatePicker, Input, Select } from 'antd';
import { Dayjs } from 'dayjs';

import { setDateEnd, setDegree, setInstitution } from '../../slices';
import { RootState } from '../../store';
import { Card, Control } from '..';
import { educationOptions, EducationTypes } from './constants';

const Education = () => {
    const dispatch = useDispatch();

    const education = useSelector((state: RootState) => state.education);

    const handleChangeInstitution = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const institution = e.target.value;
        dispatch(setInstitution(institution));
    };

    const handleChangeDegree = (value: string) => {
        dispatch(setDegree(value as EducationTypes));
    };

    const handleChangeDateEnd = (date: Dayjs | null) => {
        if (date) {
            dispatch(setDateEnd(date));
        } else {
            console.log('Clear');
        }
    };

    return (
        <Card>
            <Control label={'Учреждение'}>
                <Input
                    value={education.institution}
                    onChange={handleChangeInstitution}
                    placeholder={'Учреждение'}
                />
            </Control>
            <Control label={'Дата окончания'}>
                <DatePicker
                    value={education.dateEnd}
                    onChange={handleChangeDateEnd}
                    placeholder={'Дата окончания'}
                />
            </Control>
            <Control label={'Степень'}>
                <Select
                    value={education.degree}
                    onChange={handleChangeDegree}
                    options={educationOptions}
                    style={{ width: '300px' }}
                />
            </Control>
        </Card>
    );
};

export { Education };
