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

    render(): React.Node {
        return (
            <>
                <Header />
            </>
        );
    }
}

export default App;