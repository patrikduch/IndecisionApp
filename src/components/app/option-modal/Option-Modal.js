// @flow
import './Option-Modal.scss';


import { ClassicButton} from '../../common/button/Button';
import * as React from 'react';
import Modal from 'react-modal';

/**
 * @type ActionPropsType Props type anotaton
 */
type OptionModalPropsType = {
    selectedOption: null | string;
    closeModal(): void;
};

/**
 * @function OptionModal Modal for displaying randomly selected Todo item.
 * @param {*} props Properties that are passed into component.
 */
const OptionModal = (props: OptionModalPropsType): React$Element<"div"> => {
    return (
        <div>
            <Modal isOpen={props.selectedOption} contentLabel='Selected option' className='modal' onRequestClose={props.closeModal} >
                <h3 className='modal__title'>Selected option</h3>
                {props.selectedOption ? <p className='modal__body'>{props.selectedOption}</p>: null}
                <ClassicButton onClick={props.closeModal}>Okay</ClassicButton>
            </Modal>
        </div>
    );
}





export default OptionModal;