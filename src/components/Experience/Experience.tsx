import React from 'react';

import { DatePickerProps, Input } from 'antd';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
import { RangePickerProps } from 'antd/es/date-picker';
const { TextArea } = Input;
import { Card, Control } from '..';

const Experience = () => {
    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    return (
        <Card>
            <Control label={'Компания'}>
                <Input placeholder={'Компания'} />
            </Control>
            <Control label={'Должность'}>
                <Input placeholder={'Должность'} />
            </Control>
            <Control label={'Преиод работы'}>
                <RangePicker format="YYYY-MM-DD" onChange={onChange} />
            </Control>
            <Control label={'Описание'}>
                <TextArea rows={5} />
            </Control>
        </Card>
    );
};

export { Experience };
