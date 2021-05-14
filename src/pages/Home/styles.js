import Constants from 'expo-constants';

import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 2.5);

export const Styles = EStyleSheet.create({


    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#3d3d3e",
    },

    header: {
        marginLeft: '0.5rem',
        marginBottom: '1rem',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '1rem'
    },

    nameText: {
        color: '#DFDFDF',
        marginLeft: '0.6rem',
        fontSize: '0.8rem',
    },

    raText: {
        color: '#DFDFDF',
        marginLeft: '0.6rem',
        fontSize: '0.6rem',
    },

    signOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '1.5rem'
    },

    signOutText: {
        marginRight: '0.6rem',
        color: '#DFDFDF',
        fontSize: '1rem',
    },

    signOutIcon: {
        color: '#DFDFDF',
        fontSize: '1rem',
    },

    // basicInformation: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    // },

    // basicInfoContainer: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    // basicInfoValue: {
    //     height: '2.5rem',
    //     width: '2.5rem',
    //     padding: 5,
    //     borderRadius: 100,
    //     backgroundColor: '#616161',
    //     fontSize: 9,
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    //     color: '#DFDFDF',
    //     fontWeight: 'bold',
    //     borderWidth: 0.5,
    //     borderColor: '#b30000'
    // },

    // basicInfoValueText: {
    //     fontSize: 10,
    //     textAlign: 'center',
    //     textAlignVertical: 'center',
    //     marginTop: '0.3rem',
    //     color: '#DFDFDF',
    // },

    profilePictureIMG: {
        width: '5rem',
        height: '5rem',
        borderRadius: 100,
    },


    carouselView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    carouselContainer: {
        marginTop: 50
    },

    subjectContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        backgroundColor: '#8e4dff',
        borderRadius: 15,
    },

    subjectHeader: {
        marginTop: '1rem',
        marginLeft: '1rem'
    },

    subjectName: {
        color: '#EBEAEA',
        width: '95%',
        fontSize: '0.8rem'
    },

    subjectTeacher: {
        color: '#EBEAEA',
        width: '95%',
        marginLeft: '0.5rem',
        fontSize: '0.6rem'
    },
});

EStyleSheet.build()