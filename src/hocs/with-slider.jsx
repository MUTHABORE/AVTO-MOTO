import React, {PureComponent} from 'react';
import {Slides} from '../mock/mocks';

const SLIDES_AMOUNT = Slides.length - 1;

export const withSlider = (Component) => {
  class WithSlider extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        mainSlide: 0,
      }

      this.onNextSlide = this.onNextSlide.bind(this);
      this.onPreviousSlide = this.onPreviousSlide.bind(this);
    }

    onNextSlide() {
      if (this.state.mainSlide !== SLIDES_AMOUNT) {
        this.setState(Object.assign({}, this.state, {mainSlide: this.state.mainSlide + 1}));
      }
    }

    onPreviousSlide() {
      if (this.state.mainSlide !== 0) {
        this.setState(Object.assign({}, this.state, {mainSlide: this.state.mainSlide - 1}));
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onNextSlide={this.onNextSlide}
          onPreviousSlide={this.onPreviousSlide}
          mainSlide={this.state.mainSlide}
        />
      );
    }
  }

  return WithSlider;
};
