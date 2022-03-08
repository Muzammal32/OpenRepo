import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-elements';

import { agreement } from './agreement.json';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

/**
 * Agreement screen component
 * @returns JSX
 */
const AgreementScreen = (props) => {
  const { navigation } = props
  const [signed, setSigned] = useState(false);

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        {/* Agreement */}
        <View style={styles.agreementContainer}>
          <View style={styles.scrollViewContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              {/* Header */}
              <View style={styles.header}>
                <Text style={styles.step}>STEP 02/04</Text>
                <Text style={styles.heading}>Signing in Contracts</Text>
              </View>
              <Text style={styles.label}>Agreement</Text>
              <Text style={styles.agreement}>{agreement}</Text>
            </ScrollView>
          </View>
        </View>

        {/* Bottom Container */}
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomHeading}>Sign the agreement.</Text>
          <Text style={styles.bottomSubtitle}>
            You can just long press to sign it.
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={() => setSigned(!signed)}
            style={[
              styles.fingerprintContainer,
              { borderColor: signed ? 'green' : '#E9E6E6' },
            ]}>
            {signed && <Text style={styles.signedText}>Signed</Text>}
          </TouchableOpacity>
          <CustomButton
            buttonContainerStyle={[
              styles.submitButton,
              { backgroundColor: signed ? 'black' : 'gray' },
            ]}
            buttonTextStyle={styles.titleStyle}
            title={'Submit'}
            disabled={!signed}
            onPress={() => navigation.navigate('Invite Partner', {userInfo : props.route.params.userInfo})}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AgreementScreen;
