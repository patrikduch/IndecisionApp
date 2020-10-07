/* @flow */
import './Add-Option.scss';
import * as React from 'react';
import uniqid from 'uniqid';
import { ClassicButton } from '../../common/button/Button';

/**
 * @type AddOptionPropsType Props type anotaton for "AddOption" component.
 */
type OptionsPropsType = {
    addOption(option: string): void;
};

/**
 * @type AddOptionStateType State type anotaton for "AddOption" component.
 */
type OptionsStateType = {
    todoName: string;
};

/**
 * @class AddOption Add new todo item into todolist.
 */
class AddOption extends React.Component<OptionsPropsType, OptionsStateType> {

    state: OptionsStateType = {
        todoName: ''
    }

    /**
     * @function onFormSubmit Submit the new todo list option.
     * @param {*} e Event handler instance.
     */
    onFormSubmit: ((e: any) => void) = (e: any) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            this.props.addOption(option);

            this.setState({
                todoName: ''
            });
            
        } else {
            alert('Blank items are not allowed.');
        }
    }

    /**
     * @function onTodoNameChangeHandler Change handler fro name text input.
     * @param {*} e 
     */
    onTodoNameChangeHandler: ((e: any) => void) = (e: any) => {
        this.setState({
            todoName: e.target.value
        });
    }

    render(): React.Node {
        return (
            <React.Fragment>
                <form className='add-option' onSubmit={this.onFormSubmit}>
                    <input className='add-option__input' type='text' name='option' onChange={this.onTodoNameChangeHandler} value={this.state.todoName}/>
                    <ClassicButton>Add option</ClassicButton>
                </form>
            </React.Fragment>
        );
    }
}


export default AddOption;