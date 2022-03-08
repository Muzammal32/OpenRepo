import React from 'react';
import { View } from 'react-native';

/**
 * Global divider component for spacing
 * @prop {number} horizontal - horizontal spacing value
 * @prop {number} vertical - verical spacing value
 * @returns JSX
 */
const Divider = ({ horizontal = 0, vertical = 0 }) => {
  return (
    <View style={{ marginHorizontal: horizontal, marginVertical: vertical }} />
  );
};

export default Divider;
