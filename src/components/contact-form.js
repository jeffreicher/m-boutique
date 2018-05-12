import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import '../assets/css/contact.css';

class ContactForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <h5>Contact</h5>
                <form onSubmit={handleSubmit} >
                    <div className="contact-fields">
                        <Field name="Name" component="input" type="text" placeholder="Name"/>
                        <Field name="Email" component="input" type="text" placeholder="Email"/>
                        <Field name="Phone Number" component="input" type="text" placeholder="Phone Number"/>
                        <Field name="Message" component="textarea" type="text" placeholder="Message"/>
                        <button className="btn waves-effect waves-light right" type="submit">Submit<i className="material-icons right">send</i></button>                    
                    </div>
                </form>
            </div>
        );
    };
};   

ContactForm = reduxForm({
    form: 'contact-form'
})(ContactForm);

export default connect(null, {})(ContactForm);