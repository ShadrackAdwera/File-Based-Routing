import { Fragment, useContext } from "react";
import Head from 'next/head';

import MainHeader from './main-header';
import Notification from '../notification/notification';
import NotificationContext from '../../store/notification-context';

const Layout = props => {

    const ctx = useContext(NotificationContext);

return <Fragment>
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <MainHeader />
    <main>
        {props.children}
    </main>
    {ctx.notification && <Notification title={ctx.notification.title} message={ctx.notification.message} status={ctx.notification.status}/>}
</Fragment>
}
export default Layout;