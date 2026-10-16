import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

const MedicinaScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🏥</Text>
      <Text style={styles.title}>Medicina</Text>
      <Text style={styles.subtitle}>Panel de emergencias médicas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral.bg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  icon: { fontSize: 64 },
  title: { fontSize: 28, fontWeight: '700', color: colors.medicina.primary },
  subtitle: { fontSize: 16, color: colors.neutral.muted },
});

export default MedicinaScreen;
