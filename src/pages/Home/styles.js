import Constants from 'expo-constants';

import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const Styles = EStyleSheet.create({


    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#3d3d3e",
    },

    header: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '0.5rem',
        marginBottom: '1rem',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'center',
    },

    signOutText: {
        marginRight: '0.6rem',
        color: '#DFDFDF',
        fontSize: '0.8rem',
    },

    signOutIcon: {
        color: '#DFDFDF',
        fontSize: '0.8rem',
    },

    '@media (min-width: 400)': {
        profilePictureIMG: {
            width: '10rem',
            height: '10rem',
        }
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
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: 100,
    },

});

EStyleSheet.build()

export default Styles;