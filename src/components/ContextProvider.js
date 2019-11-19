import React, { Component } from 'react';

const AppContext = React.createContext(new Date());

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isDatePickerVisible: props.calendarAlwaysVisible ? props.calendarAlwaysVisible : false,
      hour_size: props.hour_size || 50,
      setDate: (value) => {
        this.setState({
          isDatePickerVisible: props.calendarAlwaysVisible ? props.calendarAlwaysVisible : false,
          date: value
        });
      },
      toggleDatePicker: () => {
        this.setState({ isDatePickerVisible: props.calendarAlwaysVisible ? props.calendarAlwaysVisible : !this.state.isDatePickerVisible })
      },
      goToToday: () => {
        this.setState({
          isDatePickerVisible: props.calendarAlwaysVisible ? true : false,
          date: new Date()
        });
      }
    }
  }

  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}

export { ContextProvider, AppContext }
