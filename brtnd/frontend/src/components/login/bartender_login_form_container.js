import React from 'react';
import { connect } from 'react-redux';
import { bartenderLogin } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',  //'bartenderLogin'
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(bartenderLogin(user))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);