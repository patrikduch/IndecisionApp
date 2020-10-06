
// @flow
import './Option-List-Removal';
import { LinkButton} from '../../common/Button';
import * as React from 'react';

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
    render(): React.Node {
        return (
            <LinkButton onClick={this.props.removeAll}>Remove All</LinkButton>
        );
    }
}

export default OptionListRemoval;