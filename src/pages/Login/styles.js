import Constants from 'expo-constants';

import EStyleSheet from "react-native-extended-stylesheet";

const Styles = EStyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#3d3d3e",
    },

    content: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: '10rem',
        height: '10rem',
        opacity: 0.85,
    },

    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem'
    },

    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },

    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInput: {
        width: '75%',
        borderRadius: 6,
        height: '2.5rem',
        paddingLeft: '1rem',
        marginBottom: '0.5rem',
        backgroundColor: "#e0e3e3"
    },

    actions: {
        marginTop: '0.5rem',
        flexDirection: 'row',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 6,
        height: '2.5rem',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },


    actionText: {
        color: '#FFF',
        fontSize: '0.8rem',
        fontWeight: 'bold'
    },

    validationError: {
        color: "#f20202",
        fontWeight: "bold",
        fontSize: '0.8rem'
    }

});

EStyleSheet.build()

export default Styles;