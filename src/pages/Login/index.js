import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Styles from './styles';

import logo from '../../assets/logo.png';

import { withFormik } from 'formik';
import * as Yup from 'yup'


import { onSignIn } from '../../services/auth';
import api from '../../services/api';

const Form = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#3d3d3e" }} >
            <View style={Styles.container}>
                <Image source={logo} style={Styles.logo} />
                <Text style={Styles.headerText}>Faça seu login!</Text>

                {props.errors.login && <Text style={Styles.validationError}>{props.errors.login}</Text>}
                <TextInput
                    style={Styles.textInput}
                    placeholder="Login"
                    value={props.values.login}
                    onChangeText={text => props.setFieldValue('login', text)}
                />

                {props.errors.password && <Text style={Styles.validationError}>{props.errors.password}</Text>}
                <TextInput
                    style={Styles.textInput}
                    placeholder="Senha"
                    value={props.values.password}
                    secureTextEntry={true}
                    onChangeText={text => props.setFieldValue('password', text)}
                />

                <View style={Styles.actions}>
                    <TouchableOpacity style={Styles.action}>
                        <Text style={Styles.actionText} onPress={props.handleSubmit}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </KeyboardAwareScrollView >

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
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data.message)
            });
    }
})(Form);