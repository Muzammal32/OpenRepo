import React, { useState } from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../../constants';
import Divider from '../Divider';
import Header from '../Header';
import Search from '../Search';

import cities from './cities.json';
import styles from './styles';

/**
 *
 * @prop {bool} visible - modal visibility value
 * @prop {func} setLocationSelector - sets the modal visiblity
 * @prop {func} onLocationSelect - function for passing text from text input
 * @returns JSX
 */
const LocationSelector = ({
  visible,
  setLocationSelector,
  onLocationSelect,
}) => {
  const [searchText, setSearchText] = useState('');
  const [filterDataSource, setFilterDataSource] = useState(cities);

  const handleCityPress = city => {
    onLocationSelect(city);
  };

  const searchFilter = text => {
    if (text) {
      const newData = cities.filter(item => {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterDataSource(newData);
      setSearchText(text);
    } else {
      setFilterDataSource(cities);
      setSearchText(text);
    }
  };

  return (
    <Modal visible={visible} animationType={'slide'} transparent>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Header
            title={'Select City'}
            rightIconPress={() => setLocationSelector(false)}
          />
          <Search
            placeholder={'Search your city'}
            onChangeText={text => searchFilter(text)}
            value={searchText}
          />

          <FlatList
            data={filterDataSource}
            keyExtractor={(item, index) => `${item}_${index}`}
            initialNumToRender={10}
            style={styles.list}
            ItemSeparatorComponent={() => <Divider vertical={2} />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => handleCityPress(item)}
                  activeOpacity={theme.TOUCH_OPACITY}
                  style={styles.locationContainer}>
                  <Text style={styles.locationText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationSelector;
