import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
    return ( <
        div className = { styles.root } >
        <
        Attribute icon = { 'delivery' }
        title = { 'entrega gratuita em todo o mundo' }
        subtitle = { 'Click to learn more' }
        /> <
        Attribute icon = { 'cycle' }
        title = { 'Devolução' }
        subtitle = { 'Devolução de mercadorias em 30 dias' }
        /> <
        Attribute icon = { 'creditcard' }
        title = { 'Pagamento seguro' }
        subtitle = { 'Compra segura' }
        /> <
        /div>
    );
};

export default AttributeGrid;