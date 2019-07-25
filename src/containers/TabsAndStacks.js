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
import { Icon } from "react-native-elements";

/* STACK/TAB CONFIGURATION */

const ListScreen = {
  screen: ProductsListScreen,
  navigationOptions: { title: "Products" }
};

export const ListStack = createStackNavigator({ ListScreen });
ListStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type={"ionicon"}
      name={Platform.OS === "ios" ? "ios-list" : "md-list"}
    />
  )
};
