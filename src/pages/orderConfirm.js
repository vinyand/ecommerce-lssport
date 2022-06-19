import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
    return ( <
        Layout disablePaddingBottom >
        <
        Container size = { 'medium' } >
        <
        div className = { styles.root } >
        <
        h1 > Obrigado! < /h1> <
        p >
        Já estamos processando seu pedido.Se você tiver alguma dúvida, fique à vontade envie um email para customerservice @example.com <
        /p> <
        div className = { styles.actionContainer } >
        <
        ActionCard title = { 'Ordens' }
        icon = { 'delivery' }
        subtitle = { 'Verifique o status do seu pedido' }
        link = { '/account/orders' }
        size = { 'lg' }
        />

        <
        ActionCard title = { 'Shopping' }
        icon = { 'bag' }
        subtitle = { 'Continue Comprando' }
        link = { '/shop' }
        />

        <
        ActionCard title = { 'FAQs' }
        icon = { 'question' }
        subtitle = { 'Confira a página de perguntas frequentes' }
        link = { '/faq' }
        />

        <
        ActionCard title = { 'Contato' }
        icon = { 'phone' }
        subtitle = { 'REstenda a mão para nós' }
        link = { '/support#contact' }
        /> <
        /div> <
        /div> <
        /Container> <
        /Layout>
    );
};

export default OrderConfirmPage;