import React, { createContext, useContext } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const HostnameContext = createContext(basePath);

export const HostnameProvider = ({ children }) => {
    return (
        <HostnameContext.Provider value={basePath}>
            {children}
        </HostnameContext.Provider>
    );
};

export const useHostname = () => {
    return useContext(HostnameContext);
};

export default useHostname
