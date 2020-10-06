/* @flow */
import './Action.scss';

import { BigButton } from '../../common/button/Button';
import * as React from 'react';

/**
 * @type ActionPropsType Props type anotaton
 */
type ActionPropsType = {
    options: string[];
};

/**
 * @class Action Get random todo item from todo list (list of options).
 */
class Action extends React.Component<ActionPropsType> {

    makeDecisionHandler: (() => void) = () => {
        const randNum = Math.random() * this.props.options.length;
        const randomIndex = Math.floor(randNum);

        alert(this.props.options[randomIndex]);
    };
    
    render(): React.Node {
        return (
            <BigButton disabled={this.props.options.length === 0} onClick={this.makeDecisionHandler}>What should I do?</BigButton>
        );
    }
}

export default Action;