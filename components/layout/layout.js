import { Fragment } from "react";
import Head from 'next/head';

import MainHeader from './main-header';

const Layout = props => {
return <Fragment>
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <MainHeader />
    <main>
        {props.children}
    </main>
</Fragment>
}
export default Layout;