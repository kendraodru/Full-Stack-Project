import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from  '../session/signup_form_container';
import CartContainer from '../cart/cart_container';
import SearchContainer from '../search/searchContainer'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            return (
                <div className="modal-background" onClick={closeModal}>
                    {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
                        {component}
                    {/* </div> */}
                </div>
            );
        case 'signup':
            component = <SignupFormContainer />;
             return (
        <div className="modal-background" onClick={closeModal}>
            {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
                {component}
            {/* </div> */}
        </div>
    );
        case 'cart':
            return(
                <CartContainer />
            )
        case 'search':
            component = <SearchContainer />
            break;
        default:
            return null;
    }
    // return (
    //     <div className="modal-background">
    //         {component}
    //     </div>
    // );
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
