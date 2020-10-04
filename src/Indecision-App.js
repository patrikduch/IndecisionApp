import 'normalize.css/normalize.css';
import './styles/App.scss';


/* @flow */
import * as React from 'react';
import OptionForm from './components/options/form/Option-Form';
import OptionList from './components/options/list/Option-List';
import OptionListDecision from './components/options/list/Option-List-Decision';
import OptionListRemoval from './components/options/list/Option-List-Removal';
import Header from './components/skeleton/Header';

/**
 * @type AppPropsType Props type anotaton for App component.
 */
type IndecisionAppPropsType = {};

/**
 * @type AppStateType State type anotaton for App component.
 */
type IndecisionAppStateType = {
    options: string[];
};

/**
 * @class Root component that encapsulates all child components.
 */
class IndecisionApp extends React.Component<IndecisionAppPropsType,IndecisionAppStateType> {

    title: string = 'Indecision app';
    subtitle: string = 'Put your life in the hands of a computer';

    state: IndecisionAppStateType = {
        options: ['One', 'Two'],
    }

    /**
     * @function addOption add new option into options array.
     * @param {*} option 
     */
    addOption: ((option: string) => void) = (option: string) => {
        
        // Add new option item into array
        const newArray = this.state.options;
        newArray.push(option);
        
        // Update local state option array with newly inserted value
        this.setState({
            options: newArray
        });
    }

    /**
     * @function removeAll Delete all options from current TODO list.
     */
    removeAll: (() => void) = () =>{
        this.setState({
            options: []
        })
    }

    render(): React.Node {
        return (
            <React.Fragment>
                <Header title={this.title} subtitle={this.subtitle} />
                <OptionListDecision optionsLength={this.state.options.length} options={this.state.options} />
                <OptionListRemoval removeAll={this.removeAll} />
                <OptionList options={this.state.options} />
                <OptionForm addOption={this.addOption} />
            </React.Fragment>
        );
    }
}

export default IndecisionApp;