// @flow
import './Option.scss';

import { LinkButton } from '../../common/button/Button';
import * as React from 'react';

/**
 * @type OptionPropsType Props type anotaton of single option component element.
 */
type OptionPropsType = {
    option: string;
    onClick(): void;
};

/**
 * @class Option  Single todo item.
 */
class Option extends React.Component<OptionPropsType> {
    render(): React.Node {
        return (
            <li>{this.props.option}
                <LinkButton onClick={this.props.onClick}>Remove</LinkButton>
            </li>
        );
    }
}

export default Option;