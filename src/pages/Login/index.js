import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Icon, ToastAndroid } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Styles from './styles';

import logo from '../../assets/logo.png';

import { withFormik } from 'formik';
import * as Yup from 'yup'


import { isSignedIn, onSignIn, onSignOut } from '../../services/auth';
import api from '../../services/api';

const Form = (props) => {

    const navigation = useNavigation();

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={Styles.container}>
            <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#3d3d3e" }} >

                <View style={Styles.logoContainer}>
                    <Image source={logo} style={Styles.logo} />
                </View>

                <View style={Styles.headerContainer}>
                    <Text style={Styles.headerText}>Faça o seu login</Text>
                </View>

                <View style={Styles.formContainer}>
                    {props.errors.login && <Text style={Styles.validationError}>{props.errors.login}</Text>}
                    <TextInput
                        style={Styles.textInput}
                        placeholder="Usuário"
                        value={props.values.login}
                        onChangeText={text => props.setFieldValue('login', text)}
                    />

                    {props.errors.password && <Text style={Styles.validationError}>{props.errors.password}</Text>}
                    <TextInput
                        style={Styles.textInput}
                        placeholder="Senha"
                        value={props.values.password}
                        secureTextEntry={hidePass ? true : false}
                        onChangeText={text => props.setFieldValue('password', text)}
                    />

                    <View style={Styles.actions}>
                        <TouchableOpacity style={Styles.action} onPress={props.handleSubmit}>
                            <Text style={Styles.actionText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAwareScrollView >
        </View >

    );
}
export default withFormik({

    mapPropsToValues: () => ({ login: '', password: '', }),

    validationSchema: Yup.object().shape({
        login: Yup.string()
            .min(3, 'O login deve ter no mínimo 3 caracteres')
            .required('Preencha o campo de login'),
        password: Yup.string()
            .required('Preencha o campo de senha'),
    }),

    validateOnChange: false,

    handleSubmit: async (values, { setSubmitting, setErrors }) => {
        const data = {
            user: values.login,
            password: values.password,
        };

        await api.post('/student/login', data)
            .then((response) => {
                onSignIn(response.data.token);
            })
            .catch(error => {
                console.log(error)
                // const message = (error.response.status === 400) ? 'Usuário ou senha incorretos.' : 'Um erro ocorreu, tente novamente!';
                // ToastAndroid.show(message, ToastAndroid.SHORT);
            });
    }
})(Form);