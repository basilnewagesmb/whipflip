import { Component, createElement } from "react";
import * as prodGTM from "utils/GTM/prod";
import * as devGTM from "utils/GTM/dev";
import { isDev, isLocal } from "utils/helper";

export default (gtmId, Router, { localhost = "localhost" } = {}) =>
  (Page) => {
    class WithGTM extends Component {
      state = {
        gtm: undefined,
      };

      componentDidMount() {
        // check if it should track
        const shouldNotTrack = isLocal(localhost) || isDev();
        // check if it should use production or dev analytics
        const gtm = shouldNotTrack ? devGTM : prodGTM;
        gtm.init(gtmId);
        this.setState({
          gtm,
        });
      }

      render() {
        return createElement(Page, {
          ...this.props,
          gtm: this.state.gtm,
        });
      }
    }

    return WithGTM;
  };
