import React, { useState, useContext } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

import { generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
    const ctxAddItemNotification = useContext(AddItemNotificationContext);
    const showNotification = ctxAddItemNotification.showNotification;
    const sampleProduct = generateMockProductData(1, 'sample')[0];
    const [qty, setQty] = useState(0);
    const [isWishlist, setIsWishlist] = useState(false);
    const [activeSwatch, setActiveSwatch] = useState(
        sampleProduct.colorOptions[0]
    );
    const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
    const suggestions = generateMockProductData(4, 'woman');

    return ( <
        Layout >
        <
        div className = { styles.root } >
        <
        Container size = { 'large' }
        spacing = { 'min' } >
        <
        Breadcrumbs crumbs = {
            [
                { link: '/', label: 'Home' },
                { label: 'Men', link: '/shop' },
                { label: 'Sweater', link: '/shop' },
                { label: `${sampleProduct.name}` },
            ]
        }
        /> <
        div className = { styles.content } >
        <
        div className = { styles.gallery } >
        <
        Gallery images = { sampleProduct.gallery }
        /> <
        /div> <
        div className = { styles.details } >
        <
        h1 > { sampleProduct.name } < /h1> <
        span className = { styles.vendor } > by { sampleProduct.vendor } < /span>

        <
        div className = { styles.priceContainer } >
        <
        CurrencyFormatter appendZero amount = { sampleProduct.price }
        /> <
        /div>

        <
        div >
        <
        SwatchList swatchList = { sampleProduct.colorOptions }
        activeSwatch = { activeSwatch }
        setActiveSwatch = { setActiveSwatch }
        /> <
        /div>

        <
        div className = { styles.sizeContainer } >
        <
        SizeList sizeList = { sampleProduct.sizeOptions }
        activeSize = { activeSize }
        setActiveSize = { setActiveSize }
        /> <
        /div>

        <
        div className = { styles.quantityContainer } >
        <
        span > Quantidade < /span> <
        AdjustItem qty = { qty }
        setQty = { setQty }
        /> <
        /div>

        <
        div className = { styles.actionContainer } >
        <
        div className = { styles.addToButtonContainer } >
        <
        Button onClick = {
            () => showNotification() }
        fullWidth level = { 'primary' } >
        Adicionar ao carrinho <
        /Button> <
        /div> <
        div className = { styles.wishlistActionContainer }
        role = { 'presentation' }
        onClick = {
            () => setIsWishlist(!isWishlist) } >
        <
        Icon symbol = { 'heart' } > < /Icon> <
        div className = { `${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }` } >
        <
        Icon symbol = { 'heartFill' } > < /Icon> <
        /div> <
        /div> <
        /div>

        <
        div className = { styles.description } >
        <
        p > { sampleProduct.description } < /p> <
        span > Código do produto: { sampleProduct.productCode } < /span> <
            /div>

        <
        div className = { styles.informationContainer } >
        <
        Accordion type = { 'plus' }
        customStyle = { styles }
        title = { 'composição e cuidados' } >
        <
        p className = { styles.information } > { sampleProduct.description } <
        /p> <
        /Accordion> <
        Accordion type = { 'plus' }
        customStyle = { styles }
        title = { 'Entregas e Devoluções' } >
        <
        p className = { styles.information } > { sampleProduct.description } <
        /p> <
        /Accordion> <
        Accordion type = { 'plus' }
        customStyle = { styles }
        title = { 'Ajuda' } >
        <
        p className = { styles.information } > { sampleProduct.description } <
        /p> <
        /Accordion> <
        /div> <
        /div> <
        /div> <
        div className = { styles.suggestionContainer } >
        <
        h2 > você pode gostar < /h2> <
        ProductCardGrid spacing showSlider height = { 400 }
        columns = { 4 }
        data = { suggestions }
        /> <
        /div> <
        /Container>

        <
        div className = { styles.attributeContainer } >
        <
        Split image = { '/cloth.png' }
        alt = { 'attribute description' }
        title = { 'Sustentabilidade' }
        description = {
            'Concebemos os nossos produtos para terem uma boa aparência e serem usados ​​no dia-a-dia. E nosso objetivo é inspirar as pessoas a viver com poucos objetos atemporais feitos para durar. É por isso que a qualidade sobre a quantidade é a pedra angular do nosso ethos e não temos interesse em tendências ou coleções sazonais.'
        }
        ctaText = { 'learn more' }
        cta = {
            () => navigate('/blog') }
        bgColor = { 'var(--standard-light-grey)' }
        /> <
        /div> <
        /div> <
        /Layout>
    );
};

export default ProductPage;