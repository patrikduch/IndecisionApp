/* @flow */
import './Action.scss';

import { BigButton, ClassicButton } from '../../common/button/Button';
import Modal from 'react-modal';
import * as React from 'react';
import OptionModal from '../option-modal/Option-Modal';

/**
 * @type ActionPropsType Props type anotaton
 */
type ActionPropsType = {
    options: string[];
};

/**
 * @type ActionStateType State type anotaton
 */
type ActionStateType = {
    selectedOption: null | string;
};


/**
 * @class Action Get random todo item from todo list (list of options).
 */
class Action extends React.Component<ActionPropsType, ActionStateType> {

    state: ActionStateType = {
        selectedOption: null
    };

    /**
     * @function makeDecisionHandler Random pickup todo item from option list.
     */
    makeDecisionHandler: (() => void) = () => {
        const randNum = Math.random() * this.props.options.length;
        const randomIndex = Math.floor(randNum);

        this.setState({
            selectedOption: this.props.options[randomIndex]
        });
    };

    /**
     * @function onCloseModalHandler Handler for button closing action.
     */
    onCloseModalHandler: (() => void) = () => {
        this.setState({
            selectedOption: null
        });
    }
    
    render(): React.Node {
        return (
            <React.Fragment>
                <BigButton disabled={this.props.options.length === 0} onClick={this.makeDecisionHandler}>
                    What should I do?
                </BigButton>
                
                <OptionModal selectedOption={this.state.selectedOption} closeModal={this.onCloseModalHandler} />
                
            </React.Fragment>
        );
    }
}

export default Action;