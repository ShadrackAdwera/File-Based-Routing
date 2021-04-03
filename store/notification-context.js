import { createContext, useState } from 'react';

const NotificationContext = createContext({
    notification: null,
    showNotification: (notif) => {},
    hideNotification: () => {}
});

export const NotificationContextProvider = props => {
    const [currentNotification, setCurrentNotification] = useState();

    const showNotificationHandler = (notif) => {
        setCurrentNotification(notif);
    }
    const hideNotificationHandler = () => {
        setCurrentNotification(null)
    }

    const appContext = {
        notification: currentNotification, 
        showNotification: showNotificationHandler, 
        hideNotification: hideNotificationHandler
    }

    return <NotificationContext.Provider value={appContext}>
        {props.children}
    </NotificationContext.Provider>
}

export default NotificationContext