/* @flow */
import './Option-List-Decision.scss';

import { BigButton } from '../../common/Button';
import * as React from 'react';

/**
 * @type OptionListDecisionPropsType Props type anotaton for options list decision component.
 */
type OptionListDecisionPropsType = {
    options: string[];
};

/**
 * @class OptionListDecision Random generator for choosing current task.
 */
class OptionListDecision extends React.Component<OptionListDecisionPropsType> {

    /**
     * @function makeDecisionHandler Toggler of modal that shows information about randomly selected todo item.
     */
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

export default OptionListDecision;