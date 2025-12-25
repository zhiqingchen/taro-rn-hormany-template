import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";

import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world！！！！</Text>
        <Text>Hello world One！！！！</Text>
        <Text>Hello world Two！！！！</Text>
        <Text>Hello world Three！！！！</Text>
      </View>
    );
  }
}
