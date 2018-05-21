import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../assets/css/contact.css';
import normalizePhone from './normalizePhone';
import spinner from '../assets/images/spinner.gif';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loader: false,
            displaySuccess: false
        };

    };

    sendData(values, dispatch, props) {
        this.setState({
            loader: true
        });
        setTimeout(() => {
            this.setState({
                loader: false,
                displaySuccess: true
            });
            console.log("Submitted:", values);
            props.reset();
        }, 3000);
        
    };

    renderInput(props) {
        return (
            <div className="contact-fields">
                {props.type === "text" || props.type === "tel" ? <input {...props.input} type={props.type ? props.type : 'text'} className={props.type} placeholder={props.placeholder}/> : <textarea {...props.input} type={props.type ? props.type : 'text'} className={props.type} placeholder={props.placeholder}/> }
                <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>
        );
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <h5 className="contact-header">Contact</h5>
                <h5 className="success-header" style={{ opacity: this.state.displaySuccess ? 1 : 0 }}>Submitted!</h5>
                <form onSubmit={handleSubmit(this.sendData.bind(this))} >
                    <Field name="name" component={this.renderInput} type="text" placeholder="Name"/>
                    <Field name="email" component={this.renderInput} type="text" placeholder="Email"/>
                    <Field name="phone" component={this.renderInput} normalize={normalizePhone} type="tel" placeholder="Phone Number"/>
                    <Field name="message" component={this.renderInput} type="textarea" placeholder="Message"/>
                    <div>{(this.state.loader) ? <img src={spinner} className="spinner" alt="spinner"/> : <button className="btn waves-effect waves-light right">Submit<i className="material-icons right">send</i></button>}</div>
                </form>                
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
    }

    return error;
}

ContactForm = reduxForm({
    form: 'contact-form',
    validate
})(ContactForm);

export default ContactForm;