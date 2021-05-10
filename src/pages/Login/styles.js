import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 60,
        alignItems: "center",
        backgroundColor: "#3d3d3e"
    },

    logo: {
        width: 150,
        height: 146,
        opacity: 0.85,
    },


    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        margin: 30
    },

    textInput: {
        width: 250,
        borderRadius: 6,
        height: 40,
        paddingLeft: 20,
        margin: 5,
        backgroundColor: "#e0e3e3"
    },

    actions: {
        marginTop: 16,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 6,
        height: 40,
        marginRight: 15,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },


    actionText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    },

    validationError: {
        color: "#f20202",
        fontWeight: "bold",
        fontSize: 12
    }


});