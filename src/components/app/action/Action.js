/* @flow */
import './Action.scss';

import { BigButton, ClassicButton } from '../../common/button/Button';
import Modal from 'react-modal';
import * as React from 'react';

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

    makeDecisionHandler: (() => void) = () => {
        const randNum = Math.random() * this.props.options.length;
        const randomIndex = Math.floor(randNum);

        this.setState({
            selectedOption: this.props.options[randomIndex]
        });
    };

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
                
                <Modal isOpen={this.state.selectedOption} contentLabel='Selected option' 
                    onRequestClose={this.onCloseModalHandler}>
                    <h3>Selected option</h3>
                    {this.state.selectedOption ? <p>{this.state.selectedOption}</p>: null}
                    <ClassicButton onClick={this.onCloseModalHandler}>Okay</ClassicButton>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Action;