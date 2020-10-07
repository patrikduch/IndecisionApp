// @flow
import * as React from 'react';
import Modal from 'react-modal';


/**
 * @type ActionPropsType Props type anotaton
 */
type OptionModalPropsType = {
    selectedOption: null | string;
};



const OptionModal = (props: OptionModalPropsType): React$Element<"div"> => (
    <div>
        <Modal isOpen={!!props.selectedOption} contentLabel='Selected option'>
            <h3>Selected option</h3>
        </Modal>
    </div>
);

export default OptionModal;