import './Option-List-Decision.scss';

/* @flow */
import * as React from 'react';
import { BigButton } from '../../common/Button';

/**
 * @type OptionListDecisionPropsType Props type anotaton for options list decision component.
 */
type OptionListDecisionPropsType = {
    optionsLength: number;
    options: string[];
};

/**
 * @class OptionListDecision Random generator for choosing current task.
 */
class OptionListDecision extends React.Component<OptionListDecisionPropsType> {

    makeDecisionHandler = () => {
        const randNum = Math.random() * this.props.optionsLength;
        const randomIndex = Math.floor(randNum);

        alert(this.props.options[randomIndex]);
    };

    render() {
        return (
            <BigButton disabled={this.props.options.length === 0} onClick={this.makeDecisionHandler}>What should I do?</BigButton>
        );
    }
}

export default OptionListDecision;