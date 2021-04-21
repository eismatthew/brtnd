import React from 'react';
import { connect } from 'react-redux';
import { bartenderSignup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup', //'bartenderSignup'
  };
};


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(bartenderSignup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
