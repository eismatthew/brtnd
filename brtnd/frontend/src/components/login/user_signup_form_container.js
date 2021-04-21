import React from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup', //'userSignup'
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(userSignup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
