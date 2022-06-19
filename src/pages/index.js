import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
    const newArrivals = generateMockProductData(3, 'shirt');
    const blogData = generateMockBlogData(3);

    const goToShop = () => {
        navigate('/shop');
    };

    return ( <
        Layout disablePaddingBottom > { /* Hero Container */ } <
        Hero maxWidth = { '500px' }
        image = { '/banner1.png' }
        title = { 'Essentials for a cold winter' }
        subtitle = { 'Discover Autumn Winter 2021' }
        ctaText = { 'shop now' }
        ctaAction = { goToShop }
        />

        { /* Message Container */ } <
        div className = { styles.messageContainer } >
        <
        p >
        Apenas o começo. { ' ' } <
        span className = { styles.gold } > Vinyand design. < /span> <
        /p> <
        p >
        wear by < span className = { styles.gold } > sunspel < /span> and{' '} <
        span className = { styles.gold } > scotch & soda < /span> <
        /p> <
        /div>

        { /* Collection Container */ } <
        div className = { styles.collectionContainer } >
        <
        Container size = { 'large' } >
        <
        Title name = { 'New Collection' }
        /> <
        ProductCollectionGrid / >
        <
        /Container> <
        /div>

        { /* New Arrivals */ } <
        div className = { styles.newArrivalsContainer } >
        <
        Container >
        <
        Title name = { 'New Arrivals' }
        link = { '/shop' }
        textLink = { 'view all' }
        /> <
        ProductCardGrid spacing = { true }
        showSlider height = { 480 }
        columns = { 3 }
        data = { newArrivals }
        /> <
        /Container> <
        /div>

        { /* Highlight  */ } <
        div className = { styles.highlightContainer } >
        <
        Container size = { 'large' }
        fullMobile >
        <
        Highlight image = { '/highlight.png' }
        altImage = { 'highlight image' }
        miniImage = { '/highlightmin.png' }
        miniImageAlt = { 'mini highlight image' }
        title = { 'Camisa de luxo' }
        description = { `Este suéter macio de lã de cordeiro é tricotado na Escócia, usando fios de uma das fiandeiras mais antigas do mundo, com sede em Fife` }
        textLink = { 'Comprar agora' }
        link = { '/shop' }
        /> <
        /Container> <
        /div>

        { /* Promotion */ } <
        div className = { styles.promotionContainer } >
        <
        Hero image = { '/banner2.png' }
        title = { `-50% off \n All Essentials` }
        /> <
        div className = { styles.linkContainers } >
        <
        Link to = { '/shop' } > WOMAN < /Link> <
        Link to = { '/shop' } > MAN < /Link> <
        /div> <
        /div>

        { /* Quote */ } <
        Quote bgColor = { 'var(--standard-light-grey)' }
        title = { 'Sobre vinyand' }
        quote = {
            '“Acreditamos em duas coisas: a busca pela qualidade em tudo o que fazemos e o cuidado mútuo. Todo o resto deve cuidar de si mesmo.”'
        }
        />

        { /* Blog Grid */ } <
        div className = { styles.blogsContainer } >
        <
        Container size = { 'large' } >
        <
        Title name = { 'Journal' }
        subtitle = { 'Notes on life and style' }
        /> <
        BlogPreviewGrid data = { blogData }
        /> <
        /Container> <
        /div>

        { /* Promotion */ } <
        div className = { styles.sustainableContainer } >
        <
        Hero image = { '/banner3.png' }
        title = { 'Somos sustentaveis' }
        subtitle = {
            'Desde cuidar de nossa terra até apoiar nosso povo, descubra os passos que estamos tomando para fazer mais pelo mundo ao nosso redor.'
        }
        ctaText = { 'read more' }
        maxWidth = { '660px' }
        ctaStyle = { styles.ctaCustomButton }
        /> <
        /div>

        { /* Social Media */ } <
        div className = { styles.socialContainer } >
        <
        Title name = { 'Feito pra você' }
        subtitle = { 'Marque @vinyand para ser destaque.' }
        /> <
        div className = { styles.socialContentGrid } >
        <
        img src = { `/social/socialMedia1.png` }
        alt = { 'social media 1' }
        /> <
        img src = { `/social/socialMedia2.png` }
        alt = { 'social media 2' }
        /> <
        img src = { `/social/socialMedia3.png` }
        alt = { 'social media 3' }
        /> <
        img src = { `/social/socialMedia4.png` }
        alt = { 'social media 4' }
        /> <
        /div> <
        /div> <
        AttributeGrid / >
        <
        /Layout>
    );
};

export default IndexPage;