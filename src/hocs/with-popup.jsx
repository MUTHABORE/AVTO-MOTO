import React, {PureComponent} from 'react';

import {extend} from '../utils/utils';

export const withPopup = (Component) => {
  class WithPopup extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        name: null,
        dignity: null,
        limitations: null,
        rating: null,
        comment: null,
      }

      this.onReviewChange = this.onReviewChange.bind(this);
      this._validatingFields = this._validatingFields.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onReviewChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
      localStorage.setItem([name], value);

      this._validatingFields(name, value, evt.target);
    }



    _validatingFields(name, value, elem) {
      console.log(name, `name`, value, elem)
      if (name === `name` && value === ``) {
        elem.classList.add(`popup__required-field--invalid`);
        elem.parentNode.classList.add(`popup__required-field-wrapper`);


        const reqiredFieldsInvalid = document.getElementsByClassName(`popup__required-field--invalid`);
        console.log(reqiredFieldsInvalid)


        return;
      }
      
      if (name === `comment` && value === ``) {
        elem.classList.add(`popup__required-field--invalid`);
        elem.parentNode.classList.add(`popup__required-field-wrapper`);
        return;
      }

      elem.classList.remove(`popup__required-field--invalid`);
      elem.parentNode.classList.remove(`popup__required-field-wrapper`);
    }

    onSubmit(evt) {
      evt.preventDefault();
      console.log(evt.target.parentNode.getElementsByClassName(`popup__required-field--invalid`));

      const reqiredFieldsInvalid = evt.target.parentNode.getElementsByClassName(`popup__required-field--invalid`);

      if (reqiredFieldsInvalid.length === 0) {
        console.log(this.props)
        this.props.onPopupChangeState(evt);
      } else {
        reqiredFieldsInvalid.map((field) => {
          field.classList.add(`popup__required-field--invalid`);
          field.parentNode.classList.add(`popup__required-field-wrapper`);
        })
      }
      
    }

    render() {
      return (
        <Component
        {...this.props}
        onReviewChange={this.onReviewChange}
        onSubmit={this.onSubmit}
        />
      );
    }
  }

  return WithPopup;
};
