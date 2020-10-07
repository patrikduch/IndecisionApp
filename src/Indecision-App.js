/* @flow */
import 'normalize.css/normalize.css';
import './styles/App.scss';

import Action from './components/app/action/Action';
import AddOption from './components/app/add-option/Add-Option';
import Header from './components/skeleton/Header';
import { LinkButton } from './components/common/button/Button';
import OptionListRemoval from './components/app/option-remove/Option-List-Removal';
import Options from './components/app/options/Options';
import * as React from 'react';
import OptionModal from './components/app/option-modal/Option-Modal';

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
        options: [],
        selectedOption: null
    }

    /**
     * @function addOption add new option into options array.
     * @param {*} option 
     */
    addOption: ((option: string) => void) = (option: string) => {

        if(!option) {
            alert('Enter valid value to add item.');
        } else if (this.state.options.indexOf(option) > -1) {
            alert('This option already exists');
        } else {

            // Add new option item into array  
            const newArray = this.state.options;    
            newArray.push(option);
                
            // Update local state option array with newly inserted value
            this.setState({
                options: newArray   
            });
        }
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
                    <div className='options'>
                        <Options options={this.state.options} removeAll={this.removeAll}  removeIndividual={this.removeIndividual} />
                        <AddOption addOption={this.addOption} />               
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default IndecisionApp;