import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';

import api from '../../services/api';

import { AuthContext, getToken, onSignOut } from '../../services/auth';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';

import Icon from 'react-native-vector-icons/FontAwesome';

import Carousel from 'react-native-snap-carousel';

import { Styles, SLIDER_WIDTH, ITEM_WIDTH, ITEM_HEIGHT } from './styles';
import { sub } from 'react-native-reanimated';

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const Home = (props) => {

    const { signOut } = React.useContext(AuthContext);

    const [basicInfo, setBasicInfo] = useState({});
    const [subjects, setSubjects] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                response.data.name = toTitleCase(response.data.name)
                setBasicInfo(response.data);
            });
    }

    async function loadSubjects() {
        const token = await getToken();

        if (!token) return false;

        const headers = {
            Authorization: token
        }

        await api.get('/student/subjects', { headers })
            .then((response) => {
                setSubjects(response.data);
            });
    }

    async function loadSchedules() {
        const token = await getToken();

        if (!token) return false;

        const headers = {
            Authorization: token
        }

        await api.get('/student/schedule', { headers })
            .then((response) => {
                setSchedules(response.data);
            });
    }
    function renderSubjects({ item: subject, index }) {
        return (
            <View style={Styles.subjectContainer}>
                <View style={Styles.subjectHeader}>
                    <Text numberOfLines={1} style={Styles.subjectName}>{`${subject.name}`}</Text>
                    <Text style={Styles.subjectTeacher}>{subject.initials}</Text>
                </View>
                <View style={Styles.subjectGradesContainer}>
                    {subject.tests.map((test, index) => {
                        return (
                            <View key={index}>
                                <Text>{test.name}</Text>
                                <Text>{test.score}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }

    useEffect(() => {

        async function loadInformation() {
            await loadBasicInfo();
            await loadSubjects();
            setIsLoading(false);
        }
        loadInformation();
    }, []);

    if (isLoading) {
        return (
            <AppLoading />
        );
    }

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.signOutButton} onPress={handleLogout}>
                <Text style={Styles.signOutText}>Sair</Text>
                <Icon style={Styles.signOutIcon} name="sign-out" />
            </TouchableOpacity>
            <View style={Styles.header}>
                <View style={Styles.profile}>
                    <Image
                        style={Styles.profilePictureIMG}
                        source={{
                            uri: basicInfo.profilePicture,
                        }}
                    />
                    <View>
                        <Text style={Styles.nameText}>{basicInfo.name}</Text>
                        <Text style={Styles.raText}>R.A: {basicInfo.ra}</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.carouselView}>
                <Carousel
                    layout={'default'}
                    data={subjects}
                    renderItem={renderSubjects}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                    inactiveSlideScale={0.8}
                //firstItem={() => (data.length % 2 == 0) ? (data.length / 2) : 1}
                />
            </View>
        </View >
    );
}

export default Home;

/* <View style={Styles.basicInformation}>

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
    <Text style={Styles.basicInfoValueText}>M??dia</Text>
</View>
</View> */