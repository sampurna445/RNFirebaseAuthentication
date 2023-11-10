import React from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Dashboard = ({navigation}) => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <View>
      <Text>Welcome to Dashboard!</Text>
      <Text>Welcome, {auth().currentUser.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Dashboard;
