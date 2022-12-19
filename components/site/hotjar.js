import { Component, createElement } from "react";
import * as prodHotjar from "utils/hotjar/prod";
import * as devHotjar from "utils/hotjar/dev";
import { isDev, isLocal } from "utils/helper";

export default (hjid, hjsv, Router, { localhost = "localhost" } = {}) =>
  (Page) => {
    class WithHotjar extends Component {
      state = {
        hotjar: undefined,
      };

      componentDidMount() {
        // check if it should track
        const shouldNotTrack = isLocal(localhost) || isDev();
        // check if it should use production or dev analytics
        const hotjar = shouldNotTrack ? devHotjar : prodHotjar;

        // init hotjar
        hotjar.init(hjid, hjsv);

        // save possible previously defined callback
        const previousCallback = Router.onRouteChangeComplete;
        Router.onRouteChangeComplete = () => {
          // call previously defined callback if is a function
          if (typeof previousCallback === "function") {
            previousCallback();
          }
          hotjar.init(hjid, hjsv);
        };

        this.setState({
          hotjar,
        });
      }

      render() {
        return createElement(Page, {
          ...this.props,
          hotjar: this.state.hotjar,
        });
      }
    }

    return WithHotjar;
  };
