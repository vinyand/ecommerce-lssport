import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
    return ( <
        Layout >
        <
        div className = { styles.root } >
        <
        Container >
        <
        div className = { styles.blogContainer } >
        <
        Blog category = { 'design' }
        title = { 'Amigo do viny' }
        image = { '/blogFeatured.png' }
        alt = { '' } >
        <
        div className = { styles.content } >
        <
        p className = { styles.excerpt } >
        A designer floral londrina Flora Fricker defende a sazonalidade Flores britânicas e produtores do Reino Unido em sua bela e
        criações sustentáveis.Nesta temporada, trabalhamos com Flora para lojas de estilo Sunspel para o Natal, para as quais produziu atraentes grinaldas de origem sustentável. <
        /p> <
        p className = { styles.blogParagraph } >
        A sociedade de responsabilidade limitada de Delaware(The Sydney) coleta informações pessoais que você fornece voluntariamente quando aplicando ou registrando uma conta com The Upside ou fazer uma compra no site The Upside; www.theupside.com(the Website). <
        /p> <
        p className = { styles.blogParagraph } >
        Esta Política de Privacidade(Política de Privacidade) descreve como seu informações são coletadas, usadas e divulgadas quando você acessa ou usar nossos Serviços conforme definido em nossos Termos.Essa informação é coletado, usado e divulgado de acordo com as Lei de Privacidade de 1988(Cth)(Lei de Privacidade). <
        /p> <
        p className = { styles.blogParagraph } >
        Esta Política de Privacidade é incorporada por referência em nosso Termos.Quaisquer termos em maiúsculas não definidos nesta Política são definidos nos Termos.Você concorda em cumprir todos os Termos quando acessar ou usar nossos Serviços, incluindo esta Política de Privacidade Política. <
        /p> <
        /div> <
        div className = { styles.imagesContainer } >
        <
        div className = { styles.imageContainer } >
        <
        img src = { '/cloth.png' }
        alt = { 'sample1' }
        /> <
        /div> <
        div className = { styles.imageContainer } >
        <
        img src = { '/collections/collection1.png' }
        alt = { 'sample2' }
        /> <
        /div> <
        /div> <
        div className = { styles.content } >
        <
        h2 className = { styles.blogSubHeader } > 2. Lorem ipsum < /h2> <
        p className = { styles.blogParagraph } >
        Nossos Serviços, incluindo, mas não se limitando ao registro de uma conta conosco ou fazer um pedido, não se destina a ser usado por crianças menores de 13 anos.Quando um visitante indica uma idade inferior a 13 anos, o processo de inscrição para o O site upside não pode ser concluído e não informações de identificação são coletadas em conjunto com tentativa de envio, exceto que retemos endereços de e - mail de tais pessoas(e registro de tentativas de acesso) para fins de negando o registro.Caso contrário, não coletamos conscientemente informações de identificação pessoal dos visitantes sob o idade de 13. <
        /p> <
        p className = { styles.blogParagraph } >
        Se você tem menos de 18 anos, qualquer uso de nossos Serviços deve ser feito com o envolvimento de um dos pais ou responsável.Ao acessar ou usar nosso Site, você garante e declara para nós que está acima do
            idade de 18 anos e você tem o direito, autoridade e
        capacidade de celebrar um acordo juridicamente vinculativo e de respeitar esta Política de Privacidade. <
        /p> <
        p className = { styles.blogParagraph } >
        A Upside coleta, usa e divulga informações sobre usuários de 13 a 18 anos da mesma forma que para adultos. <
        /p> <
        /div> <
        /Blog> <
        /div> <
        /Container> <
        /div> <
        /Layout>
    );
};

export default SamplePage;