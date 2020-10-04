import '../form/Option-Form.scss';
import './Option-Form';

/* @flow */
import * as React from 'react';
import OptionListRemoval from '../list/Option-List-Removal';
import { ClassicButton } from '../../common/Button';

/**
 * @type OptionFormPropsType Props type anotaton for adding new options via Form element.
 */
type OptionFormPropsType = {
    addOption(option: string): void;
}

/**
 * @class OptionForm Form handler for adding new options.
 */
class OptionForm extends React.Component<OptionFormPropsType> {

    onFormSubmit = (e: any) => {
        e.preventDefault();

        const option = e.target.elements.option.value;

        if (option) {
            this.props.addOption(option);
        }
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' name='option' />
                    <ClassicButton>Add option</ClassicButton>
                </form>
            </React.Fragment>
        );
    }
}

export default OptionForm;