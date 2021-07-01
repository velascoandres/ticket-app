import React, { createContext, useState } from 'react'
import { IUiContext } from '../interfaces/ui-context';


const initialContext = {
    hidden: false,
    hideMenu: () => { },
    showMenu: () => { },
} as IUiContext;


export const UiContext = createContext<IUiContext>(initialContext);

type UiProviderProps = { children: JSX.Element };

export const UiProvider: React.FC<UiProviderProps> = ({ children }: UiProviderProps) => {

    const [hidden, setHideMenu] = useState<boolean>(false);

    const showMenu = () => setHideMenu(false);
    const hideMenu = () => setHideMenu(true);

    const context = { showMenu, hideMenu, hidden };

    return (
        <UiContext.Provider value={context}>
            {children}
        </UiContext.Provider>
    )
}
