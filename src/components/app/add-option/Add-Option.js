/* @flow */
import './Add-Option.scss';
import * as React from 'react';
import uniqid from 'uniqid';
import { ClassicButton } from '../../common/Button';

/**
 * @type AddOptionPropsType Props type anotaton for "AddOption" component.
 */
type OptionsPropsType = {
    addOption(option: string): void;
};

class AddOption extends React.Component<OptionsPropsType> {

    onFormSubmit: ((e: any) => void) = (e: any) => {
        e.preventDefault();

        const option = e.target.elements.option.value;

        if (option) {
            this.props.addOption(option);
        }
    }


    render(): React.Node {
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


export default AddOption;