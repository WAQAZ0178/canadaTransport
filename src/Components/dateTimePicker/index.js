import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {buttonColor, textColor} from '../../constants/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {styles} from './style';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import {appImages} from '../../assets/utilities';
import {FloatingLabelInput} from '../TextInput';
import {colors, fontFamily} from '../../Services';
const DateSelect = props => {
  const {label, minimumDate, value, onChangeText} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(
    props.isVisible || false,
  );
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('DD-MM_YY'));
    props.getDate(moment(date).format('DD-MM_YY'));
    hideDatePicker();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: 'white',
        width: responsiveWidth(43),
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
        borderRadius: responsiveWidth(2),
        // borderWidth: responsiveWidth(0.3),
        // borderColor: colors.lightsilver,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: responsiveHeight(2),
      }}
      onPress={showDatePicker}>
      {/* <FloatingLabelInput
        label={label}
        editable={false}
        value={value}
        onChangeText={onChangeText}
      /> */}
      <Text
        style={{
          color: colors.black,
          fontFamily: fontFamily.bold,
          fontSize: responsiveFontSize(1.4),
        }}>
        Date signed on {'\n'}(dd-mm-yyyy)
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: responsiveHeight(1),
        }}>
        <Icon
          name="calendar-month-outline"
          type="material-community"
          color={colors.greyText}
          size={responsiveFontSize(2)}
        />
        <Text
          style={{
            color: colors.greyText,
            fontSize: responsiveFontSize(1.5),
            fontFamily: fontFamily.semiBold,
            marginLeft: responsiveWidth(2),
          }}>
          {value}
        </Text>
      </View>
      <DateTimePickerModal
        isVisible={props.isVisible || isDatePickerVisible}
        mode="date"
        date={new Date()}
        value={value}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
        ref={props.ref}
        minimumDate={minimumDate}
      />
    </TouchableOpacity>
  );
};
const DateSelect1 = props => {
  const {label, minimumDate, value, onChangeText} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(
    props.isVisible || false,
  );
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('DD-MM_YY'));
    props.getDate(moment(date).format('DD-MM_YY'));
    hideDatePicker();
  };

  return (
    <TouchableOpacity activeOpacity={0.7} style={{}} onPress={showDatePicker}>
      {/* <FloatingLabelInput
        label={label}
        editable={false}
        value={value}
        onChangeText={onChangeText}
      /> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: responsiveHeight(1),
        }}>
        <Icon
          name="calendar-month-outline"
          type="material-community"
          color={colors.greyText}
          size={responsiveFontSize(1.8)}
        />
        <Text
          style={{
            color: colors.greyText,
            fontSize: responsiveFontSize(1.3),
            fontFamily: fontFamily.semiBold,
            marginLeft: responsiveWidth(0.5),
          }}>
          {value}
        </Text>
      </View>
      <DateTimePickerModal
        isVisible={props.isVisible || isDatePickerVisible}
        mode="date"
        date={new Date()}
        value={value}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
        ref={props.ref}
        minimumDate={minimumDate}
      />
    </TouchableOpacity>
  );
};

const TimeSelect = props => {
  const {iconStyle, TextStyle} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  useEffect(() => {
    setDate(props.initialDate);
  }, [props]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(date).format('hh:mm A'));
    props.getDate(moment(date).format('hh:mm A'));
    hideDatePicker();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.dataPickerContainer}
      onPress={showDatePicker}>
      <Text style={TextStyle}>{date != '' ? date : props.placeHolder}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        // date={new Date()}
        // value={date}

        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{}}
        display={Platform.OS === 'ios' ? 'inline' : 'spinner'}
      />
    </TouchableOpacity>
  );
};

export {DateSelect, DateSelect1, TimeSelect};
