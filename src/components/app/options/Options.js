// @flow
import './Options.scss';
import Option from '../option/Option';
import * as React from 'react';
import uniqid from 'uniqid';

/**
 * @type OptionsPropsType Props type anotaton for Option list component.
 */
type OptionsPropsType = {
    options: string[];
    removeIndividual(searchedElement: string) : void;
};

/**
 * @class Option list component that renders all todo items.
 */
class Options extends React.Component<OptionsPropsType> {
    render(): React.Node {
        if (this.props.options === 0) {
            return (<p>No options</p>);
        } else {
            const items = this.props.options.map((option => {
                return <Option key={uniqid()} onClick={() => this.props.removeIndividual(option)} option={option} />;
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
}


export default Options;