import React from 'react';
import LinkReturnHome from '../../components/LinkReturnHome/LinkReturnHome';
import ErrorLoadMessage from '../../components/Errors/ErrorLoadMessage';
import Layout from '../../components/Layout/Layout';

const ErrorLoading = () => {
    return (
        <Layout>      
            <ErrorLoadMessage />
            <LinkReturnHome />
        </Layout>       
    );
};

export default ErrorLoading;