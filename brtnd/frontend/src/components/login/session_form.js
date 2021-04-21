import React from 'react';
import { withRouter } from 'react-router-dom'




class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


 componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push(`/user/${currentUser.id}`);          //make sure route is /user and not /users
    }

    this.setState({errors: nextProps.errors})
  }


  update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }


  renderErrors(){
    return(
      <ul className='error-container'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const formInputs = this.props.formType === 'login' ? (
      <div className='login-forms-main'>

      <div className='login-input-container'>
          <label>Email:
            <input type='text'
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
            />
          </label>
      </div>
      <div className='login-input-container'>
          <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
          </label>
      </div>
      </div>

    ) : (

      <div className='signup-forms-main'>
      <div className='signup-input-container'>
          <label>First Name:
            <input type='text'
                value={this.state.firstName}
                onChange={this.update('firstName')}
                className="signup-input"
            />
          </label>
      </div>
      <div className='signup-input-container'>
          <label>Last Name:
            <input type='text'
                value={this.state.lastName}
                onChange={this.update('lastName')}
                className="signup-input"
            />
          </label>
      </div>
      <div className='signup-input-container'>
          <label>Email:
            <input type='text'
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
            />
          </label>
      </div>
      <div className='signup-input-container'>
          <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
                />
          </label>
      </div>
      </div>


    )
    return (
      <div className='session-form-container'>
          <form onSubmit={this.handleSubmit} classname='session-form-box'>
            Please {this.props.formType}
            <div className='session-form'>
                {formInputs}
                <input className="session-submit" type="submit" value='Continue'/>
                {this.renderErrors()}
            </div>
        </form>
      </div>
    );

  }

};

export default withRouter(SessionForm);