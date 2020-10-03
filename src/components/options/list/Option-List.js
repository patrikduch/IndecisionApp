import './Option-List.scss';

/* @flow */
import * as React from 'react';
import uniqid from 'uniqid';

/**
 * @type OptionListPropsType Props type anotaton for option list component.
 */
type OptionListPropsType = {
    options: string[];
};

/**
 * @type OptionListStateType State type anotaton for option list component.
 */
type OptionListStateType = {
};

/**
 * @class OptionList List of currently rendered options.
 */
class OptionList extends React.Component<OptionListPropsType, OptionListStateType> {

    render(): React.Node {
        if (this.props.options === 0) {
            return (<p>No options</p>);
        } else {
            const items = this.props.options.map((option => {
                return <li key={uniqid()}>{option}</li>
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

export default OptionList;