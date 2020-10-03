/* @flow */
import * as React from 'react';
import OptionForm from './components/options/form/Option-Form';
import Header from './components/skeleton/Header';

/**
 * @type AppPropsType Props type anotaton for App component.
 */
type AppPropsType = {};

/**
 * @type AppStateType State type anotaton for App component.
 */
type AppStateType = {
    options: string[];
};

/**
 * @class Root component that encapsulates all child components.
 */
class App extends React.Component<AppPropsType,AppStateType> {

    title: string = 'Indecision app';
    subtitle: string = 'Put your life in the hands of a computer';

    state: AppStateType = {
        options: ['One', 'Two']
    }

    renderOptions() : React.Node {
        if (this.state.options.length === 0) {
            return (<p>No options</p>);
        } else {
            const items = this.state.options.map((option => {
                return <li>{option}</li>
            }));

            return (
                <React.Fragment>
                    <p>Here are your options:</p>
                    <ol>
                        {items}
                    </ol>
                </React.Fragment>
            );
        }
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

    render(): React.Node {

        return (
            <React.Fragment>
                <Header />
                <h1>{this.title}</h1>
                {this.subtitle && <p>{this.subtitle}</p>}
                {this.renderOptions()}
                <OptionForm addOption={this.addOption} />
            </React.Fragment>
        );
    }
}

export default App;