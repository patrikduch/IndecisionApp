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
                <div>
                    <div className='widget-header'>
                        <h3 className='widget-header__title'>Your options</h3>
                        <LinkButton>Remove all</LinkButton>
                    </div>

                    {this.props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p> }
        
                    <ol>
                        {items}
                    </ol>
                </div>
                
            );
        }
    }
}


export default Options;