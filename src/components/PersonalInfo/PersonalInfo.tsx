import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DatePicker, Input } from 'antd';
import { Dayjs } from 'dayjs';

import {
    setAddress,
    setAvatar,
    setBirthday,
    setFio,
    setPhone,
} from '../../slices';
import { RootState } from '../../store';
import { Card, Control, Upload } from '..';
const PersonalInfo = () => {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state: RootState) => state.personalInfo);

    const handleChangeAvatar = (img: string) => {
        dispatch(setAvatar(img));
    };

    const handleChangeFio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fio = e.target.value;
        dispatch(setFio(fio));
    };

    const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        const address = e.target.value;
        dispatch(setAddress(address));
    };

    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const phone = e.target.value;
        dispatch(setPhone(phone));
    };

    const handleChangeBirthday = (date: Dayjs | null) => {
        if (date) {
            dispatch(setBirthday(date));
        } else {
            console.log('Clear');
        }
    };

    return (
        <Card>
            <Control label={'Фио'}>
                <Input
                    value={personalInfo.fio}
                    onChange={handleChangeFio}
                    placeholder={'Фио'}
                />
            </Control>
            <Control label={'Место жительства'}>
                <Input
                    value={personalInfo.address}
                    onChange={handleChangeAddress}
                    placeholder={'Место жительства'}
                />
            </Control>
            <Control label={'Номер телефона'}>
                <Input
                    value={personalInfo.phone}
                    onChange={handleChangePhone}
                    placeholder={'Номер телефона'}
                />
            </Control>
            <Control label={'Дата рождения'}>
                <DatePicker
                    onChange={handleChangeBirthday}
                    placeholder={'Дата рождения'}
                />
            </Control>
            <Upload onChange={handleChangeAvatar} />
        </Card>
    );
};

export { PersonalInfo };
