import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './address.module.css';

import AccountLayout from '../../components/AccountLayout';
import AddressCard from '../../components/AddressCard';
import AddressForm from '../../components/AddressForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import Icon from '../../components/Icons/Icon';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import { isAuth } from '../../helpers/general';
import Button from '../../components/Button';

const AddressPage = (props) => {
    const address1 = {
        name: 'John Doe',
        address: '123 Steam Mill Lane, Haymerket',
        state: 'NSW',
        postal: '2000',
        country: 'br',
        company: '',
    };

    const address2 = {
        name: 'John Doe',
        address: '123 Steam Mill Lane, Haymerket',
        state: 'NSW',
        postal: '2000',
        country: 'br',
        company: '',
    };

    const [addressList] = useState([address1, address2]);
    const [showForm, setShowForm] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    if (isAuth() === false) {
        navigate('/login');
    }

    return ( <
        Layout >
        <
        AccountLayout >
        <
        Breadcrumbs crumbs = {
            [
                { link: '/', label: 'Home' },
                { link: '/account', label: 'Account' },
                { link: '/account/address', label: 'Addresses' },
            ]
        }
        /> <
        h1 > Endereço < /h1>

        {
            showForm === false && ( <
                div className = { styles.addressListContainer } > {
                    addressList.map((address) => {
                        return ( <
                            AddressCard showForm = {
                                () => setShowForm(true) }
                            showDeleteForm = {
                                () => setShowDelete(true) } {...address }
                            />
                        );
                    })
                } <
                div className = { styles.addCard }
                role = { 'presentation' }
                onClick = {
                    () => setShowForm(true) } >
                <
                Icon symbol = { 'plus' } > < /Icon> <
                span > Novo endereço < /span> <
                /div> <
                /div>
            )
        }

        {
            showForm === true && ( <
                AddressForm closeForm = {
                    () => setShowForm(false) }
                />
            )
        } <
        /AccountLayout> <
        Modal visible = { showDelete }
        close = {
            () => setShowDelete(false) } >
        <
        div className = { styles.confirmDeleteContainer } >
        <
        h4 > Deletar endereço ? < /h4> <
        p >
        Tem certeza de que deseja excluir este endereço ? Você não pode desfazer isso ação quando você pressionar < strong > 'Delete' < /strong> <
        /p> <
        div className = { styles.actionContainer } >
        <
        Button onClick = {
            () => setShowDelete(false) }
        level = { 'primary' } >
        Deletar <
        /Button> <
        Button onClick = {
            () => setShowDelete(false) }
        level = { 'secondary' } >
        Cancelar <
        /Button> <
        /div> <
        /div> <
        /Modal> <
        /Layout>
    );
};

export default AddressPage;