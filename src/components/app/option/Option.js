// @flow
import './Option.scss';

import { LinkButton } from '../../common/button/Button';
import * as React from 'react';

/**
 * @type OptionPropsType Props type anotaton of single option component element.
 */
type OptionPropsType = {
    itemId: number;
    option: string;
    onClick(): void;
};

/**
 * @class Option  Single todo item.
 */
class Option extends React.Component<OptionPropsType> {
    render(): React.Node {
        return (
            <div className='option'>
                <p className='option__text'>{this.props.itemId}. {this.props.option}</p>
                <LinkButton onClick={this.props.onClick}>Remove</LinkButton>
            </div>
        );
    }
}

export default Option;