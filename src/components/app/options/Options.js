// @flow
import './Options.scss';

import Option from '../option/Option';
import * as React from 'react';
import uniqid from 'uniqid';
import { ClassicButton, LinkButton } from '../../common/button/Button';

/**
 * @type OptionsPropsType Props type anotaton for Option list component.
 */
type OptionsPropsType = {
    options: string[];
    removeAll(): void;
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
            const items = this.props.options.map((option, index)=> {
                return <Option itemId={index+1} key={uniqid()} onClick={() => this.props.removeIndividual(option)} option={option} />;
            });

            return (
                <div>
                    <div className='options-header'>
                        <h3 className='options-header__title'>Your options</h3>
                        <LinkButton onClick={this.props.removeAll}>Remove all</LinkButton>
                    </div>
                    {this.props.options.length === 0 && <p className='options__message'>Please add an option to get started!</p> }
                    {items}
                </div>
            );
        }
    }
}


export default Options;