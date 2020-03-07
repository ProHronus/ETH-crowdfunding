// JavaScript source code
import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Layout(props) {
    return (
        < Container >
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
                />
                <link rel='icon' href='/static/favicon.ico' />
                <script src="https://one.relayx.io/relayone.js"></script>
            </Head>
            <Header />
            {props.children}
        </ Container >
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
};