import '../skeleton/Header.scss';   

/* @flow */
import * as React from 'react';

/**
 * @type HeaderPropsType Type anotation for header component.
 */
type HeaderPropsType = {}

class Header extends React.Component<HeaderPropsType> {

    componentDidMount() {
        console.log("Header");
    }


    render(): React.Node{
        return (
            <header className='header'>
                Headings
            </header>
        );
    }
}

export default Header;