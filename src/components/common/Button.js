import './Button.scss';

/* @flow */
import * as React from 'react';


/**
 * @type BaseButtonPropsType Base type anotation that is shared among all buttons type.
 */
type BaseButtonPropsType = {
    disabled: Boolean;
    onClick: Function;
}



/**
 * @type ClassicButtonPropsType Type anotation for classic buton component.
 */
type ClassicButtonPropsType = BaseButtonPropsType & {

}

/**
 * @type ClassicButtonPropsType Type anotation for classic buton component.
 */
type BigButtonPropsType = BaseButtonPropsType & {
    
}


/**
 * @class ClassicButton Common button component that represents classic styled button.
 */
class ClassicButton extends React.Component<ClassicButtonPropsType> {
    render() {
        return (
            <button className='button'>{this.props.children}</button>
        );
    }
}

/**
 * @class ClassicButton Common button component that represents big styled button.
 */
class BigButton extends React.Component<BigButtonPropsType> {
    render() {
        return (
            <button className='big-button' disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }


}

export { ClassicButton, BigButton }