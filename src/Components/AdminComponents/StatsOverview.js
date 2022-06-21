import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import IoniIcon from 'react-native-vector-icons/Ionicons';

export default function StatsOverview({
  heading,
  totalNumbers,
  increase,
  decrease,
  percentage,
  background,
}) {
  return (
    <View style={styles.stat} backgroundColor={background}>
      <View style={styles.section}>
        <Text style={styles.statsHeading}>{heading}</Text>
        <Text style={styles.statsNumber}>{totalNumbers}</Text>
      </View>
      <View style={styles.section}>
        <View style={styles.statTrend}>
          <View style={styles.statsPercentage}>
            <IoniIcon
              name="stats-chart"
              size={15}
              color={percentage >= 0 ? '#4FB26C' : '#CE7586'}
            />
            <Text
              style={
                percentage > 0
                  ? styles.percentageTextGreen
                  : styles.percentageTextRed
              }>
              {percentage}%
            </Text>
          </View>
          <View style={styles.currentStatsNumbers}>
            <View style={styles.currentStats}>
              <IoniIcon name="caret-up-outline" size={20} color="#4FB26C" />
              <Text style={styles.currentStatsText}>{increase}</Text>
            </View>
            <View style={styles.currentStats}>
              <IoniIcon name="caret-down-outline" size={20} color="#CE7586" />
              <Text style={styles.currentStatsText}>{decrease}</Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stat: {
    width: '100%',
    flexDirection: 'row',
    height: 125,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  statTrend: {
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 10,
    padding: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  statsPercentage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentStatsNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentStats: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  statsHeading: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FAFAFA',
  },
  statsNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FAFAFA',
  },
  percentageTextGreen: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4FB26C',
    marginLeft: 3,
  },
  percentageTextRed: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#CE7586',
    marginLeft: 3,
  },
  currentStatsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginLeft: 3,
  },
});
