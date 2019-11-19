import React from 'react';
import { AppContext } from './ContextProvider';
import Collapsible from 'react-native-collapsible';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Colors from '../constants/colors';

const DatePickeMe = (data) =>
  <AppContext.Consumer>
    {(context) => {
      let selectedDates = data.data.map((m) =>  {return {[`${moment(m.start).format('YYYY-MM-DD')}`]: { selected: true, selectedColor: Colors.blue } }})
      // selectedDates.push({
      //   [moment(context.date.getTime()).format('YYYY-MM-DD')]: { selected: true, selectedColor: Colors.light_blue },
      // })
      // selectedDates.push({
      //   [moment().format('YYYY-MM-DD')]: { selected: true, selectedColor: Colors.blue }
      // })
      console.log('selectedDates', selectedDates);
      return (
        <Collapsible collapsed={!context.isDatePickerVisible}>
          <Calendar
            onDayPress={({ year, month, day }) => context.setDate(new Date(year, month - 1, day))}
            monthFormat={'MMMM yyyy'}
            hideExtraDays={true}
            firstDay={1}
            markedDates={{selectedDates}}
          />
          <View style={{ backgroundColor: 'black', width: '100%', height: 1 }} />

        </Collapsible>
      )
    }
    }
  </AppContext.Consumer>


export default DatePickeMe;
