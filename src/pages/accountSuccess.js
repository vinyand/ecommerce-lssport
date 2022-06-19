import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const AccountSuccessPage = (props) => {
    return ( <
        Layout disablePaddingBottom >
        <
        Container size = { 'medium' } >
        <
        div className = { styles.root } >
        <
        h1 > Conta Criada < /h1> <
        p >
        Enviamos um link de confirmação para ativar sua conta.Por favor verifique seu e - mail e confirme. <
        /p> <
        div className = { styles.actionContainer } >
        <
        ActionCard title = { 'Accounts' }
        icon = { 'user' }
        subtitle = { 'Check your account settings' }
        link = { '/account/settings' }
        />

        <
        ActionCard title = { 'Shop' }
        icon = { 'bag' }
        subtitle = { 'Continue Shopping' }
        link = { '/shop' }
        /> <
        /div> <
        /div> <
        /Container> <
        /Layout>
    );
};

export default AccountSuccessPage;