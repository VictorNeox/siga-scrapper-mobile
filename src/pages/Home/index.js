import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';


import { AuthContext, onSignOut } from '../../services/auth';


const Home = (props) => {

    const { signOut } = React.useContext(AuthContext);
    async function handleLogout() {
        onSignOut();
        signOut();
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