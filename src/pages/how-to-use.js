import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
    let builtRef = useRef();
    let toolsRef = useRef();

    const handleScroll = (elementReference) => {
        if (elementReference) {
            window.scrollTo({
                behavior: 'smooth',
                top: elementReference.current.offsetTop - 280,
            });
        }
    };

    return ( <
        Layout >
        <
        div className = { styles.root } >
        <
        div className = { styles.navContainer } >
        <
        ThemeLink onClick = {
            () => handleScroll(builtRef) }
        to = { '#builtby' } >
        Quem construiu este tema <
        /ThemeLink> <
        ThemeLink onClick = {
            () => handleScroll(toolsRef) }
        to = { '#tools' } >
        Tecnologias compatíveis <
        /ThemeLink> <
        /div> <
        Container size = { 'large' }
        spacing = { 'min' } >
        <
        div className = { styles.content }
        style = {
            { paddingTop: '80px' } } >
        <
        h3 > Construído pela Matéria. < /h3> <
        div id = "#builtBy"
        ref = { builtRef } >
        <
        p >
        Este tema é orgulhosamente trazido a você pelo: vinyand { ' ' } <
        Button target = { true }
        href = "https://github.com/vinyand" >
        Matter Design & Digital <
        /Button>{' '}
        (Matter.). <
        /p> <
        p >
        O tema Sydney foi criado para Netlify como um tema de comércio eletrônico adequado para arquitetura JAMStack.Este tema é gratuito para usar através da conta GitHub da Netlify, e pode ser usado com qualquer plataforma de comércio eletrônico que suporta uma arquitetura headless. <
        /p> <
        p >
        Site escrito em javascript. <
        /p> <
        Button target = { true }
        href = "https://jamm.matter.design/" >
        Read more about JAMM.™ <
        /Button> <
        img alt = { 'JAMM Detail' }
        src = { '/how-to-use/jamm-sydney-1upd@2x.png' }
        style = {
            { display: 'block', height: 'auto' } }
        /> <
        /div> <
        h3 > As melhores ferramentas da raça < /h3> <
        div id = { '#tools' }
        ref = { toolsRef } >
        <
        p >
        A arquitetura sem cabeça permite o Composable Commerce.O que isso significa é que você pode 'compor'
        um conjunto das melhores ferramentas juntos para criar um sistema ágil de comércio eletrônico.Esta abordagem é o extremo oposto do espectro de um tradicional 'Monolítico'
        arquitetura onde todas as funcionalidades e dados vêm de um fonte. <
        /p> <
        p >
        Até 20 dias para construir seu site. <
        /p> <
        p >
        Inovação e comprometimento. <
        /p>

        <
        strong > Ecommerce: < /strong> <
        ul >
        <
        li > BigCommerce < /li> <
        li > VTEX(roadmap) < /li> <
        li > Commercetools(roadmap) < /li> <
        /ul>

        <
        strong > Sistemas de gerenciamento de conteúdo(CMS): < /strong> <
        ul >
        <
        li > Contentful < /li> <
        li > WordPress < /li> <
        li > Sanity < /li> <
        li > Builder.io < /li> <
        /ul>

        <
        strong > Busca avançada: < /strong> <
        ul >
        <
        li > Algolia < /li> <
        li > Searchspring(roadmap) < /li> <
        li > XO(roadmap) < /li> <
        li > Syte(roadmap) < /li> <
        /ul>

        <
        strong > Gerenciamento de Informações do Produto(PIM): < /strong> <
            ul >
            <
            li > Akeneo < /li> <
            /ul>

        <
        strong > Marketing Automation: < /strong> <
        ul >
        <
        li > Klaviyo < /li> <
        li > Ortto < /li> <
        li > Dot Digital < /li> <
        li > Omnisend < /li> <
        /ul>

        <
        strong > Customer Support: < /strong> <
        ul >
        <
        li > Gorgias < /li> <
        li > Zendesk < /li> <
        /ul>

        <
        strong > Comentários e conteúdo gerado pelo usuário: < /strong> <
        ul >
        <
        li > Yotpo < /li> <
        li > Trustpilot < /li> <
        li > Reviews.io < /li> <
        /ul>

        <
        strong > Locais físicos: < /strong> <
        ul >
        <
        li > Localisr.io < /li> <
        /ul>

        <
        p >
        Our team are fanatical about site speed and the agility of a composable commerce approach.If you need help to setup a Headless architecture, we’ d love to hear from you. <
        /p>

        <
        p >
        <
        Button target = { true }
        href = "https://www.matterdesign.com.au/contact/" >
        Contact the team at Matter. <
        /Button> <
        /p> <
        /div> <
        /div> <
        /Container> <
        div className = { styles.imageContainer } >
        <
        img alt = { 'Best of Breed tools' }
        src = { '/how-to-use/logos@2x.png' } >
        < /img> <
        /div> <
        /div> <
        /Layout>
    );
};

export default HowToUsePage;