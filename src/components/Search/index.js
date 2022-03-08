import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

/**
 * Global search component
 * @prop {string} param0 - placeholder text for search
 * @prop {func} param0 - placeholder text for search
 * @returns JSX
 */
const Search = ({ placeholder = 'Search', onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      autoCapitalize={'words'}
      clearButtonMode={'always'}
      onChangeText={onChangeText}
    />
  );
};

export default Search;
