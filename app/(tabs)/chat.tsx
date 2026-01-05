import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabFourScreen() {
  return (
    <ScrollView style={{ borderWidth: 1, borderColor: 'red' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chat screen</ThemedText>
        
      </ThemedView>
      <ThemedView >
        <ThemedText type="subtitle">Text test subtitle</ThemedText>
        <ThemedText>
          Juste a test
        </ThemedText>
      </ThemedView>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
