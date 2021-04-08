import React, {PureComponent} from 'react';

import {extend} from '../utils/utils';

export const withReviews = (Component) => {
  class WithReviews extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPopupOpen: false,
      }

      this.onPopupChangeState = this.onPopupChangeState.bind(this);
    }

    onPopupChangeState(evt) {
      evt.preventDefault();
      this.setState(extend(this.state, {isPopupOpen: !this.state.isPopupOpen}))
    }

    render() {
      return(
        <Component 
          isPopupOpen={this.state.isPopupOpen}
          onPopupChangeState={this.onPopupChangeState}
        />
      );
    }
  }

  return WithReviews;
};
