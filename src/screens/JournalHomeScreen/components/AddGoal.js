import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import Goal from './Goal';
import styles from '../styles';

const AddGoal = ({ weeklyGoals, refresh }) => {
  const [goalList, setGoalList] = useState(weeklyGoals.goals);


  return (
    <>
      <View style={styles.inputMainContainer}>
        <Text style={styles.daysContainer}>{weeklyGoals.day}</Text>
        <FlatList
          data={goalList}
          extraData={refresh}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => {
            return <Goal item={item} />;
          }}
        />
      </View>
    </>
  );
};

export default AddGoal;
