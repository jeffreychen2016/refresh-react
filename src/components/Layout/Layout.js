import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout