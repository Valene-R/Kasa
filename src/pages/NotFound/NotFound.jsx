import Error404 from '../../components/Errors/Error404';
import LinkReturnHome from '../../components/LinkReturnHome/LinkReturnHome';
import Layout from '../../components/Layout/Layout';

const NotFound = () => {
    return (
        <>
            <Layout>       
                <Error404 />
                <LinkReturnHome />
            </Layout>     
        </>
    );
};

export default NotFound;