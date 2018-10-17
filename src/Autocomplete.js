import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import PropTypes from "prop-types";

export default class Autocomplete extends Component {
  static propTypes = {
    greeting: PropTypes.string
  };

  static defaultProps = {
    greeting: "hello my friend"
  };

  render() {
    return (
      <View>
        <Text>Autocomplete works. Say: {this.props.greeting}</Text>
      </View>
    );
  }
}
