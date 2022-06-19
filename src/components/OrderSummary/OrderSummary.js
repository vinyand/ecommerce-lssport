import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = (props) => {
    const [coupon, setCoupon] = useState('');
    const [giftCard, setGiftCard] = useState('');

    return ( <
        div className = { styles.root } >
        <
        div className = { styles.orderSummary } >
        <
        span className = { styles.title } > order summary < /span> <
        div className = { styles.calculationContainer } >
        <
        div className = { styles.labelContainer } >
        <
        span > Sub total < /span> <
        span >
        <
        CurrencyFormatter amount = { 440 }
        appendZero / >
        <
        /span> <
        /div> <
        div className = { styles.labelContainer } >
        <
        span > Envio < /span> <
        span > -- - < /span> <
        /div> <
        div className = { styles.labelContainer } >
        <
        span > Taxa < /span> <
        span >
        <
        CurrencyFormatter amount = { 0 }
        appendZero / >
        <
        /span> <
        /div> <
        /div> <
        div className = { styles.couponContainer } >
        <
        span > Cupom < /span> <
        FormInputField value = { coupon }
        handleChange = {
            (_, coupon) => setCoupon(coupon) }
        id = { 'couponInput' }
        icon = { 'arrow' }
        /> <
        span > Gift Card < /span> <
        FormInputField value = { giftCard }
        handleChange = {
            (_, giftCard) => setGiftCard(giftCard) }
        id = { 'couponInput' }
        icon = { 'arrow' }
        /> <
        /div> <
        div className = { styles.totalContainer } >
        <
        span > Total: < /span> <
        span >
        <
        CurrencyFormatter amount = { 440 }
        appendZero / >
        <
        /span> <
        /div> <
        /div> <
        div className = { styles.actionContainer } >
        <
        Button onClick = {
            () => navigate('/orderConfirm') }
        fullWidth level = { 'primary' } >
        Confira <
        /Button> <
        div className = { styles.linkContainer } >
        <
        Link to = { '/shop' } > CONTINUE COMPRANDO < /Link> <
        /div> <
        /div> <
        /div>
    );
};

export default OrderSummary;