import { createContext, useState, useEffect } from 'react';

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

    useEffect(()=>{
        if(currentNotification && (currentNotification.status='success' || currentNotification.status==='error')) {
            const timer = setTimeout(()=>{
                setCurrentNotification(null);
            },3000);
            return () => {
                clearTimeout(timer);
            }
        }
    },[currentNotification])

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