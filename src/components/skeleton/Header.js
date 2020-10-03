import './Header.scss';  
 
/* @flow */
import * as React from 'react';

/**
 * @type HeaderPropsType Type anotation for header component.
 */
type HeaderPropsType = {
    title: String;
}
/**
 * @class Header Heading's content of web application.
 */
class Header extends React.Component<HeaderPropsType> {
    
    render(): React.Node{
        return (
            <header className='header'>
                <h1>{this.props.title}</h1>
            </header>
        );
    };
}

export default Header;