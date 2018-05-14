import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../assets/css/contact.css';

class ContactForm extends Component {
    // constructor(props) {
    //     super(props);
    // }

    sendData(values, dispatch, props) {
        console.log("Submitted:", values);
        props.reset();
    }

    renderInput(props) {
        return (
            <div className="contact-fields">
                <input {...props.input} type={props.type ? props.type : 'text'} className={props.type} placeholder={props.placeholder}/>
                <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }
    render() {
        const { handleSubmit, submitSuccedded } = this.props;
        const success = this.props.submitSucceeded;

        return (
            <div className="container">
                <h5 className="contact-header">Contact</h5>
                <form onSubmit={handleSubmit(this.sendData)} >
                        <Field name="name" component={this.renderInput} type="text" placeholder="Name"/>
                        <Field name="email" component={this.renderInput} type="text" placeholder="Email"/>
                        <Field name="phone" component={this.renderInput} type="tel" placeholder="Phone Number"/>
                        <Field name="message" component={this.renderInput} type="textarea" placeholder="Message"/>
                    <button className="btn waves-effect waves-light right" type="submit">Submit<i className="material-icons right">send</i></button>
                </form>
                <p style={{ opacity: success ? 1 : 0 }}>Submitted!</p> 
            </div>
        );
    };
};   

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = 'Please enter your name.'
    } else if (values.name.length < 2 || !isNaN(values.name)) {
        error.name = 'Please enter your name.'
    }
    if (!values.email) {
        error.email = 'Please enter email address.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = 'Invalid email address.'
    }
    if (!values.message) {
        error.message = 'Please enter a message.'
    }
    if (!values.phone) {
        error.phone = 'Please enter a phone number.'
    } else if (!/\d{3}-?\d{3}-?\d{4}/g.test(values.phone)) {
        error.phone = 'Invalid phone number.'
    }
    return error;
}

ContactForm = reduxForm({
    form: 'contact-form',
    validate
})(ContactForm);

export default ContactForm;