import React from 'react';
import { Button } from '@material-ui/core';


function Header(){
    return (
        <header className="header">
        <div className="toolbar">
            <div>
                <a href="/">Conecta Dev- Alteração</a>
            </div>
            <div>
            <Button variant="contained" color="primary" href="/">Novo Post</Button>
                <span>img1</span>
                <span>img2</span>

            </div>
        </div>
    </header>      

    );
}
export default Header;