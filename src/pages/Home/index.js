import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { onSignOut } from '../../services/auth';


const Home = (props) => {

    async function handleLogout() {
        await onSignOut();
    }
    return (
        <View>
            <Text>ALOALOALO</Text>
            <Text>ALOALOALO</Text>
            <Text>ALOALOALO</Text>
            <Text>ALOALOALO</Text>
            <Text>ALOALOALO</Text>
            <Text>ALOALOALO</Text>
            <Text>ALOALOALO</Text>
            <View>
                <TouchableOpacity onPress={handleLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;