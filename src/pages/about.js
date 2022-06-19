import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
    let historyRef = useRef();
    let valuesRef = useRef();
    let sustainabilityRef = useRef();

    const handleScroll = (elementReference) => {
        if (elementReference) {
            window.scrollTo({
                behavior: 'smooth',
                top: elementReference.current.offsetTop - 280,
            });
        }
    };

    return ( <
        Layout disablePaddingBottom >
        <
        div className = { styles.root } > { /* Hero Container */ } <
        Hero maxWidth = { '900px' }
        image = { '/about.png' }
        title = { `Sydney \n A British brand since 1860` }
        />

        <
        div className = { styles.navContainer } >
        <
        ThemeLink onClick = {
            () => handleScroll(historyRef) }
        to = { '#history' } >
        History <
        /ThemeLink> <
        ThemeLink onClick = {
            () => handleScroll(valuesRef) }
        to = { '#values' } >
        Values <
        /ThemeLink> <
        ThemeLink onClick = {
            () => handleScroll(sustainabilityRef) }
        to = { '#sustainability' } >
        Sustainability <
        /ThemeLink> <
        /div>

        <
        Container size = { 'large' }
        spacing = { 'min' } >
        <
        div className = { styles.detailContainer }
        ref = { historyRef } >
        <
        p >
        Fundada em 2021 por Eddy Lima. <
        /p> <
        br / >
        <
        br / >
        <
        p >
        Camisas Esportivas. <
        /p> <
        /div> <
        /Container>

        <
        div className = { styles.imageContainer } >
        <
        img alt = { 'shirt brand' }
        src = { '/about1.png' } > < /img> <
        /div>

        <
        Container size = { 'large' }
        spacing = { 'min' } >
        <
        div className = { styles.content } >
        <
        h3 > Our Values < /h3> <
        div ref = { valuesRef } >
        <
        p >
        Alto luxo empodera o homem. <
        /p> <
        ol >
        <
        li > Alto luxo < /li> <
        li > Produção sobre demanda < /li> <
        li > Apenas materiais importados < /li> <
        /ol> <
        img alt = { 'founder' }
        src = { '/about2.png' } > < /img> <
        /div> <
        h3 > Sustentavel < /h3> <
        div id = { '#sustainability' }
        ref = { sustainabilityRef } >
        <
        p >
        O fundados preza pelo mundo. <
        /p> <
        p >
        De - Guarujá - sp { ' ' } <
        /p> <
        p >
        Pura procedência <
        /p> <
        /div> <
        /div> <
        /Container>

        <
        div className = { styles.imageContainer } >
        <
        img alt = { 'shirt backwards' }
        src = { '/about3.png' } > < /img> <
        /div> <
        /div> <
        /Layout>
    );
};

export default AboutPage;