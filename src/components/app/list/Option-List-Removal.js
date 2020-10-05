import './Option-List-Removal';

/* @flow */
import * as React from 'react';
import { LinkButton} from '../../common/Button';

/**
 * @type OptionListRemovalPropsType Props type anotaton for option's removal functionality.
 */
type OptionListRemovalPropsType = {
    removeAll(): void;
};

/**
 * @class OptionListRemoval Removal of all options that were added into TODO list.
 */
class OptionListRemoval extends React.Component<OptionListRemovalPropsType> {
    render() {
        return (
            <LinkButton onClick={this.props.removeAll}>Remove All</LinkButton>
        );
    }
}

export default OptionListRemoval;