/* @flow */
import * as React from 'react';
import Header from './components/skeleton/Header';

/**
 * @type AppPropsType Props type anotaton for App component.
 */
type AppPropsType = {}

/**
 * @class Root component that encapsulates all child components.
 */
class App extends React.Component<AppPropsType> {

    title: string = 'Indecision app';
    subtitle: string = 'Put your life in the hands of a computer';
    options: Array<string> = ['One', 'Two'];

    renderOptions() : React.Node {
        if (this.options.length === 0) {
            return (<p>No options</p>);
        } else {
            const items = this.options.map((option => {
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

    render(): React.Node {
        return (
            <React.Fragment>
                <Header />
                <h1>{this.title}</h1>
                {this.renderOptions()}
                {this.subtitle && <p>{this.subtitle}</p>}
            </React.Fragment>
        );
    }
}

export default App;