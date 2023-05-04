import React, {useState} from 'react';
import {Calendar, Agenda} from 'react-native-calendars';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const WorkoutCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [monthName, setMonthName] = useState(format(new Date(), 'MMMM yyyy'));
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const onDayPress = day => {
    const newSelectedDate = day.dateString;
    const newMonthName = format(new Date(newSelectedDate), 'MMMM yyyy');
    if (newMonthName !== monthName) {
      setMonthName(newMonthName);
    }
    setSelectedDate(newSelectedDate);
  };
  const onMonthChange = month => {
    setMonthName(format(new Date(month.timestamp), 'MMMM yyyy'));
  };
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };
  const theme = {
    selectedDayBackgroundColor: '#0066b2',
  };

  return (
    <>
      <View style={CalendarStyles.header}>
        <Text style={CalendarStyles.monthText}>{monthName}</Text>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Icon name="calendar-month-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <Agenda
        onDayPress={onDayPress}
        onMonthChange={onMonthChange}
        style={CalendarStyles.agendaView}
        hideKnob={false}
        onCalendarToggled={toggleCalendar}
        theme={theme}
      />
      {!isCalendarOpen && (
        <Text style={CalendarStyles.workoutText}>There are no workouts</Text>
      )}
      <TouchableOpacity style={CalendarStyles.plusButton}>
        <Text style={CalendarStyles.plusButtonText}>+</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade">
        <Calendar
          style={{borderRadius: 10, elevation: 4}}
          onDayPress={date => {
            setShowModal(false);
          }}
        />
      </Modal>
    </>
  );
};
const CalendarStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 40,
  },
  monthText: {
    fontSize: 20,
  },
  workoutText: {
    position: 'absolute',
    width: 190,
    height: 18,
    left: '50%',
    top: '50%',
    marginLeft: -94,
    marginTop: -9,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#0E0F0F',
  },
  plusButton: {
    fontSize: 22,
    borderColor: '#0066b2',
    margin: 60,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: '#0066b2',
    position: 'absolute',
    width: 60,
    height: 60,
    left: 230,
    top: 470,
  },
  plusButtonText: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 1,
    textAlign: 'center',
  },
});
export default WorkoutCalendar;
