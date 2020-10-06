/* @flow */
import '../button/Button.scss';

import * as React from 'react';

/**
 * @type BaseButtonPropsType Base type anotation that is shared among all buttons type.
 */
type BaseButtonPropsType = {
    children?: React.Node,
    disabled?: boolean;
    onClick?: Function;
}

/**
 * @type ClassicButtonPropsType Type anotation for classic buton component.
 */
type ClassicButtonPropsType = BaseButtonPropsType & {}

/**
 * @type ClassicButtonPropsType Type anotation for classic buton component.
 */
type BigButtonPropsType = BaseButtonPropsType & {}


/**
 * @type LinkButtonPropsType Type anotation for link buton component.
 */
type LinkButtonPropsType = BaseButtonPropsType & {}


/**
 * @class ClassicButton Common button component that represents classic styled button.
 */
class ClassicButton extends React.Component<ClassicButtonPropsType> {
    render(): React.Node {
        return (
            <button className='button' onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

/**
 * @class ClassicButton Common button component that represents big styled button.
 */
class BigButton extends React.Component<BigButtonPropsType> {
    render(): React.Node {
        return (
            <button className='big-button' disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

/**
 * @class LinkButton Common button link component, that represents link that acts as the button.
 */
class LinkButton extends React.Component<LinkButtonPropsType> {
    render(): React.Node {
        return (
            <button className='button--link' disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</button>
        );       
    }
}

export { BigButton, ClassicButton, LinkButton };