import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

type PropsType = {
  start?: Array<number> | {x: number, y: number};
  end?: Array<number> | {x: number, y: number};
  colors: Array<string>;
  locations?: Array<number>;
} & typeof(View);

export default class LinearGradient extends Component {
  render() {
    let colors = '';
    for(let v of this.props.colors) {
      colors += v;
    }
    return <View {...this.props} style={{background: `linear-gradient(top, ${colors})`}}/>;
  }
}
