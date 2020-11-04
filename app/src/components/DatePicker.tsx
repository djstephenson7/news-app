import DateTimePicker from '@react-native-community/datetimepicker';
import React, { FunctionComponent } from 'react';

export interface DatePickerProps {
  date: Date;
  onChange: (event: any, selectedDate: any) => void;
}

const DatePicker: FunctionComponent<DatePickerProps> = ({ date, onChange }) => {
  return (
    <DateTimePicker
      style={{ height: 300, width: 300, margin: 8 }}
      maximumDate={new Date()}
      testID="dateTimePicker"
      value={date}
      onChange={onChange}
    />
  );
};

export default DatePicker;
