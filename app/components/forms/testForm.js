import React from 'react';
import t from 'tcomb-form-native';
import Input from './templates/Input';
const Form=t.form.Form;

export const LoginStruct=t.struct({
    user:t.String,
    password: t.String
});

export const LoginOptions={
    fields:{
        user:{
            template:Input,
            config:{
                placeholder:"Introduce tu usuario",
                password:true,
                secureTextEntry:false,
                iconType:"font-awesome",
                iconName:"user",
            }
        },
        password:{
            template:Input,
            config:{
                placeholder:"Introduce tu password",
                password:true,
                secureTextEntry:true,
                iconType:"font-awesome",
                iconName:"lock",
            }
        }
    }
};