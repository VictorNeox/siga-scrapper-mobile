import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import api from '../../services/api';

import { AuthContext, getToken, onSignOut } from '../../services/auth';

import Icon from 'react-native-vector-icons/FontAwesome';

import Styles from './styles';

const Home = (props) => {

    const { signOut } = React.useContext(AuthContext);

    const [basicInfo, setBasicInfo] = useState({});

    async function handleLogout() {
        onSignOut();
        signOut();
    }

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return (txt.length == 2) ? txt.toLowerCase() : txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    async function loadBasicInfo() {
        const token = await getToken();

        if (!token) return false;

        const headers = {
            Authorization: token
        }

        await api.get('/student/basicinfo', { headers })
            .then((response) => {
                response.data.profilePicture = response.data.profilePicture.replace('\\\\', '//');
                setBasicInfo({ ...response.data, firstName: toTitleCase(response.data.name) });
            });
    }

    useEffect(() => {
        loadBasicInfo();
    }, [])

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity style={Styles.signOutButton} onPress={handleLogout}>
                    <Text style={Styles.signOutText}>Sair</Text>
                    <Icon style={Styles.signOutIcon} name="sign-out" />
                </TouchableOpacity>
                <View style={Styles.profile}>
                    <Image
                        style={Styles.profilePictureIMG}
                        source={{
                            uri: basicInfo.profilePicture,
                        }}
                    />
                    <View>
                        <Text style={Styles.nameText}>{basicInfo.firstName}</Text>
                        <Text style={Styles.raText}>R.A: {basicInfo.ra}</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

export default Home;

{/* <View style={Styles.basicInformation}>

<View style={Styles.basicInfoContainer}>
    <Text style={Styles.basicInfoValue}>{basicInfo.progress}%</Text>
    <Text style={Styles.basicInfoValueText}>Progresso</Text>
</View>

<View style={Styles.imageContainer}>
    <Image
        style={Styles.profilePictureIMG}
        source={{
            uri: basicInfo.profilePicture,
        }}
    />
    <Text style={Styles.basicInfoValueText}>RA: {basicInfo.ra}</Text>
</View>

<View style={Styles.progressContainer}>
    <Text style={Styles.basicInfoValue}>{basicInfo.average}</Text>
    <Text style={Styles.basicInfoValueText}>Média</Text>
</View>
</View> */}