import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Tela Home</Text>
      <Button
        title="Account Opening"
        onPress={() => navigation.navigate('AccountOpening')}
      />
      <Button
        title="Help Client"
        onPress={() => navigation.navigate('HelpClient')}
      />
    </View>
  );
}