import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
        comment: '',
    };

    const [contactForm, setContactForm] = useState(initialState);

    const handleChange = (id, e) => {
        const tempForm = {...contactForm, [id]: e };
        setContactForm(tempForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setContactForm(initialState);
    };

    return ( <
        div className = { styles.root } >
        <
        div className = { styles.section } >
        <
        h4 > Envie - nos uma mensagem < /h4> <
        p >
        Nossa equipe de atendimento ao cliente está aqui para todas as perguntas de segunda a sexta - feira,
        Das 9 h às 17 h AEDT(horário de verão do leste australiano). <
        /p> <
        p > Estamos ansiosos para ouvir de você. < /p> <
        /div>

        <
        div className = { styles.section } >
        <
        h4 > Telefone < /h4> <
        p > +1 424 280 4971 < /p> <
        p > Todos os dias das 10 as 17 h < /p> <
        /div>

        <
        div className = { styles.section } >
        <
        h4 > Email < /h4> <
        p >
        Você pode enviar um e - mail para nossa equipe de Atendimento ao Cliente em customerservice @example.com ou através do formulário de contato abaixo:
            <
            /p> <
            /div>

        <
        div className = { styles.contactContainer } >
        <
        form onSubmit = {
            (e) => handleSubmit(e) } >
        <
        div className = { styles.contactForm } >
        <
        FormInputField id = { 'name' }
        value = { contactForm.name }
        handleChange = {
            (id, e) => handleChange(id, e) }
        type = { 'text' }
        labelName = { 'Full Name' }
        required /
        >
        <
        FormInputField id = { 'phone' }
        value = { contactForm.phone }
        handleChange = {
            (id, e) => handleChange(id, e) }
        type = { 'number' }
        labelName = { 'Phone Number' }
        required /
        >
        <
        FormInputField id = { 'email' }
        value = { contactForm.email }
        handleChange = {
            (id, e) => handleChange(id, e) }
        type = { 'email' }
        labelName = { 'Email' }
        required /
        >
        <
        div className = { styles.commentInput } >
        <
        FormInputField id = { 'comment' }
        value = { contactForm.comment }
        handleChange = {
            (id, e) => handleChange(id, e) }
        type = { 'textarea' }
        labelName = { 'Comments / Questions' }
        required /
        >
        <
        /div> <
        /div> <
        Button className = { styles.customButton }
        level = { 'primary' }
        type = { 'buttonSubmit' } >
        Enviar <
        /Button> <
        /form> <
        /div> <
        /div>
    );
};

export default Contact;