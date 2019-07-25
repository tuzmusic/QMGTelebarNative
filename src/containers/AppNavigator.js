// @flow
import React, { Component } from "react";
import { Platform, View } from "react-native";
import { connect } from "react-redux";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ProductsListScreen from "../screens/ProductsListScreen";
import TabBarIcon from "../components/TabBarIcon";
import { ListStack } from "./TabsAndStacks";
import { fetchProducts } from "../redux/actions/productActions";

let initialRouteName;
initialRouteName = "List";

/* TAB NAV */

const TabNavigator = createBottomTabNavigator(
  { List: ListStack },
  { initialRouteName }
);

class TabContainer extends Component<Object> {
  static router = TabNavigator.router;
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <TabNavigator navigation={this.props.navigation} />;
  }
}

const connectedTabContainer = connect(
  null,
  { fetchProducts }
)(TabContainer);

/* SWITCH NAV */

const SwitchNavigator = createSwitchNavigator({
  Main: connectedTabContainer
});

const AppNavigator = createAppContainer(SwitchNavigator);

/* APP NAV */

type AppProps = {
  navigation: Object
};

class AppContainer extends Component<AppProps> {
  static router = TabNavigator.router;
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <LoadingIndicator message={this.props.loadingMessage} /> */}
        <AppNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

export default connect()(AppContainer);
