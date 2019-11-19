import React from 'react';
import { AppContext } from './ContextProvider';
import Collapsible from 'react-native-collapsible';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Colors from '../constants/colors';

const DatePickeMe = ({ data }) =>
  <AppContext.Consumer>
    {(context) => {
      console.log('data', data);
      const appointments = {};
      const selectedDates = { selected: true, selectedColor: '#C7EBFB' }
      for(var i = 0; i < data.length; i++) {
        appointments[`${moment(data[i].start).format('YYYY-MM-DD')}`] = selectedDates;
      }
      appointments[`${moment(context.date.getTime()).format('YYYY-MM-DD')}`] = { selected: true, selectedColor: Colors.light_blue }
      appointments[`${moment().format('YYYY-MM-DD')}`] = { selected: true, selectedColor: Colors.blue }

      console.log('selectedDates', selectedDates);
      return (
        <Collapsible collapsed={!context.isDatePickerVisible}>
          <Calendar
            onDayPress={({ year, month, day }) => context.setDate(new Date(year, month - 1, day))}
            monthFormat={'MMMM yyyy'}
            hideExtraDays={true}
            markedDates={appointments}
            
          />
          <View style={{ backgroundColor: 'black', width: '100%', height: 1 }} />

        </Collapsible>
      )
    }
    }
  </AppContext.Consumer>


export default DatePickeMe;
