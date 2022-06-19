import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';

const BlogPage = (props) => {
    const blogData = generateMockBlogData(6);

    return ( <
        Layout disablePaddingBottom >
        <
        div className = { styles.root } >
        <
        Hero maxWidth = { '400px' }
        image = { '/blogCover.png' }
        title = { `O novo padrão de fechamento` }
        ctaLink = { 'read story' }
        ctaTo = { '/blog/sample' }
        header = { 'design' }
        />

        <
        div className = { styles.navContainer } >
        <
        ThemeLink onClick = {
            () => navigate('/blog/sample') }
        to = { '/blog/sample' } >
        Todas as postagens <
        /ThemeLink> <
        ThemeLink onClick = {
            () => navigate('/blog/sample') }
        to = { '/blog/sample' } >
        Design <
        /ThemeLink> <
        ThemeLink onClick = {
            () => navigate('/blog/sample') }
        to = { '/blog/sample' } >
        Colaboração <
        /ThemeLink> <
        ThemeLink onClick = {
            () => navigate('/blog/sample') }
        to = { '/blog/sample' } >
        Entrevista <
        /ThemeLink> <
        ThemeLink onClick = {
            () => navigate('/blog/sample') }
        to = { '/blog/sample' } >
        Novo <
        /ThemeLink> <
        /div>

        { /* Blog Grid */ } <
        div className = { styles.blogsContainer } >
        <
        Container size = { 'large' } >
        <
        BlogPreviewGrid data = { blogData }
        hideReadMoreOnWeb showExcerpt / >
        <
        /Container> <
        /div> <
        /div> <
        /Layout>
    );
};

export default BlogPage;