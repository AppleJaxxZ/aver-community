import React from 'react';
import './layout.styles.scss'

const Layout = ({children}) => (
    <div className='layout__container'>
        {children}
    </div>
)


export default Layout;