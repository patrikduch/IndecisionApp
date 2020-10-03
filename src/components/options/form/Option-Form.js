import '../form/Option-Form.scss';

import React, { Component } from 'react';


/**
 * @type OptionFormPropsType Props type anotaton for adding new options via Form element.
 */
type OptionFormPropsType = {
    addOption(option: string): void;
}

/**
 * @class OptionForm Form handler for adding new options.
 */
class OptionForm extends Component<OptionFormPropsType> {

    onFormSubmit = (e: any) => {
        e.preventDefault();

        const option = e.target.elements.option.value;

        if (option) {
            this.props.addOption(option);
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type='text' name='option' />
                <button>Add option</button>
            </form>
        );
    }
}

export default OptionForm;