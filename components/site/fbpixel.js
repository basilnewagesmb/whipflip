import { Component, createElement } from "react";
import * as prodPixel from "utils/fbPixel/prod";
import * as devPixel from "utils/fbPixel/dev";
import { isDev, isLocal } from "utils/helper";

export default (code, Router, { localhost = "localhost" } = {}) =>
  (Page) => {
    class WithPixel extends Component {
      state = {
        pixel: undefined,
      };

      componentDidMount() {
        // check if it should track
        const shouldNotTrack = isLocal(localhost) || isDev();
        // check if it should use production or dev
        const pixel = shouldNotTrack ? devPixel : prodPixel;

        // init pixel
        pixel.init(code);
        // log page
        pixel.pageView();

        // save possible previously defined callback
        const previousCallback = Router.onRouteChangeComplete;
        Router.onRouteChangeComplete = () => {
          // call previously defined callback if is a function
          if (typeof previousCallback === "function") {
            previousCallback();
          }
          // log page
          pixel.pageView();
        };
        this.setState({
          pixel,
        });
      }

      render() {
        return createElement(Page, {
          ...this.props,
          fbpixel: this.state.pixel,
        });
      }
    }

    return WithPixel;
  };
