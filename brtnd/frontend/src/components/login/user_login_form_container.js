import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login', //'loginSignup'
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(userLogin(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);