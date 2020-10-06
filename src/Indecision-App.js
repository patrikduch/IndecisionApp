/* @flow */
import 'normalize.css/normalize.css';
import './styles/App.scss';
import * as React from 'react';
import Action from './components/app/action/Action';
import AddOption from './components/app/add-option/Add-Option';
import Header from './components/skeleton/Header';
import OptionListDecision from './components/app/list/Option-List-Decision';
import OptionListRemoval from './components/app/list/Option-List-Removal';
import { LinkButton } from './components/common/button/Button';
import Options from './components/app/options/Options';

/**
 * @type AppPropsType Props type anotaton for App component.
 */
type IndecisionAppPropsType = {};

/**
 * @type AppStateType State type anotaton for App component.
 */
type IndecisionAppStateType = {
    options: string[];
    isTogglerVisible: boolean;
};

/**
 * @class Root component that encapsulates all child components.
 */
class IndecisionApp extends React.Component<IndecisionAppPropsType,IndecisionAppStateType> {

    title: string = 'Indecision app';
    subtitle: string = 'Put your life in the hands of a computer';

    state: IndecisionAppStateType = {
        options: [],
        isTogglerVisible: false
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

        this.setState({
            isTogglerVisible: true
        })
    }

    /**
     * @function removeAll Delete all options from current TODO list.
     */
    removeAll: (() => void) = () =>{
        this.setState({
            options: []
        })
    }

    /**
     * @function remove single element from option array.
     */
    removeIndividual: ((searchedItem: string) => void) = (searchedItem) =>{
        let tempArray = this.state.options;

        tempArray = tempArray.filter((item => item !== searchedItem));

        this.setState({
            options: tempArray
        });
    }

    render(): React.Node {
        return (
            <React.Fragment>
                <Header title={this.title} subtitle={this.subtitle} />
                <div className='container'>
                    <Action options={this.state.options} />
                    <Options options={this.state.options}  removeIndividual={this.removeIndividual} />
                    <AddOption addOption={this.addOption} />               
                </div>
            </React.Fragment>
        );
    }
}

export default IndecisionApp;