import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
    return ( <
        Layout >
        <
        div className = { styles.root } >
        <
        Banner maxWidth = { '650px' }
        name = { `Frequently Asked Questions` }
        bgImage = { '/faqCover.png' }
        color = { 'var(--standard-white)' }
        height = { '350px' }
        /> <
        Container >
        <
        div className = { styles.section } >
        <
        span > Minhas Ordens < /span> <
        div className = { styles.subSection } >
        <
        h3 > Entregas < /h3> <
        p >
        Para revisar o status do seu pedido, visite o "Meus Pedidos"
        seção de sua conta Sunspel.Você deve receber um e - mail notificação quando seu pacote
        for despachado.Por favor, verifique o seu caixa de entrada de e - mail e seu filtro de lixo eletrônico. <
        /p> <
        p >
        Enviamos todos os pedidos em até 24 horas após serem feitos.Durante nossos períodos de venda podem ficar muito ocupados em nossa fábrica, os pedidos podem demorar um pouco mais para ser despachado, então adicione cinco dias apenas no caso. <
        /p> <
        p >
        Se houver algo que você queira saber sobre seu pedido, por favor entre em contato conosco em customerservice @example.com ou ligue para nós em + 44(0) 115 111 1111. <
        /p> <
        /div> <
        div className = { styles.subSection } >
        <
        h3 > Devoluções & Trocas < /h3> <
        p >
        Para revisar o status do seu pedido, visite o "Meus Pedidos"
        seção de sua conta Sunspel.Você deve receber um e - mail notificação quando seu pacote
        for despachado.Por favor, verifique o seu caixa de entrada de e - mail e seu filtro de lixo eletrônico. <
        /p> <
        p >
        Enviamos todos os pedidos em até 24 horas após serem feitos.Durante nossos períodos de venda podem ficar muito ocupados em nossa fábrica, os pedidos podem demorar um pouco mais para ser despachado, então adicione cinco dias apenas no caso. <
        /p> <
        /div> <
        /div>

        <
        div className = { styles.section } >
        <
        span > Pagamento < /span> <
        div className = { styles.subSection } >
        <
        h3 > Frete < /h3> <
        p >
        Para revisar o status do seu pedido, visite o "Meus Pedidos"
        seção de sua conta Sunspel.Você deve receber um e - mail notificação quando seu pacote
        for despachado.Por favor, verifique o seu caixa de entrada de e - mail e seu filtro de lixo eletrônico. <
        /p> <
        p >
        Enviamos todos os pedidos em até 24 horas após serem feitos.Durante nossos períodos de venda podem ficar muito ocupados em nossa fábrica, os pedidos podem demorar um pouco mais para ser despachado, então adicione cinco dias apenas no caso. <
        /p> <
        p >
        Se houver algo que você queira saber sobre seu pedido, por favor entre em contato conosco em customerservice @example.com ligue para nós +
        44(0) 115 111 1111. <
        /p> <
        /div> <
        div className = { styles.subSection } >
        <
        h3 > Tipo de moeda < /h3> <
        p >
        Nosso site seleciona automaticamente a moeda que corresponde ao seu Local de entrega.Você pode alterar isso manualmente no canto superior esquerdo canto da mão da página. <
        /p> <
        p >
        Apenas BRL. <
        /p> <
        p >
        O IVA à taxa normal está incluído em todas as encomendas para o Reino Unido e Europa.Encomendas para o Resto do Mundo não incluem IVA.
        Onde aplicável, você será responsável por qualquer país local imposto de importação. <
        /p> <
        /div> <
        div className = { styles.subSection } >
        <
        h3 > Suspeita de fraude ? < /h3> <
        p >
        Dado nossos altos níveis de segurança, é muito improvável que seja fraudulento a utilização do seu cartão terá lugar no nosso website.Mas se um
        transação fraudulenta ocorrer, primeiro entre em contato com seu empresa de cartão de crédito ou débito para que eles possam proteger seu cartão e reembolsá - lo.Em seguida, informe - nos em customerservice @example.com e trabalharemos com sua empresa de cartão para minimizar qualquer incômodo para você. <
        /p> <
        /div> <
        /div> <
        /Container> <
        /div> <
        /Layout>
    );
};

export default FaqPage;