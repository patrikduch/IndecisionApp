/* @flow */
import '../skeleton/Header.css';   

import * as React from 'react';

/**
 * @type HeaderPropsType Type anotation for header component.
 */
type HeaderPropsType = {}

class Header extends React.Component<HeaderPropsType> {
    render(): React.Node{
        return (
            <div>
                <header className='header'>
                    Headings
                </header>
            </div>
        );
    }
}

export default Header;