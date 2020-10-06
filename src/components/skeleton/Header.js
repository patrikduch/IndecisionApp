// @flow
import './Header.scss';  

import * as React from 'react';

/**
 * @type HeaderPropsType Type anotation for header component.
 */
type HeaderPropsType = {
    title: string;
    subtitle: string;
}

/**
 * @class Header Heading's content of web application.
 */
class Header extends React.Component<HeaderPropsType> {
    render(): React.Node{
        return (
            <div className='header'>
                <header>
                    <div className='container'>
                        <h1 className='header__title'>{this.props.title}</h1>
                        {this.props.subtitle && <h2 className='header__subtitle'>{this.props.subtitle}</h2>} 
                    </div>
                </header>
            </div>
        );
    };
}

export default Header;