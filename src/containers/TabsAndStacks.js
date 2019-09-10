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
import SubscriptionProductsListScreen from "../screens/SubscriptionProductsListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SubscriptionProductDetailScreen from "../screens/SubscriptionProductDetailScreen";
import TabBarIcon, { icon } from "../components/TabBarIcon";
import { Icon } from "react-native-elements";

/* STACK/TAB CONFIGURATION */

const ListScreen = {
  screen: ProductsListScreen,
  navigationOptions: { title: "Products" }
};

const SubscriptionProductsList = {
  screen: SubscriptionProductsListScreen,
  navigationOptions: { title: "Subscriptions" }
};

const DetailScreen = {
  screen: ProductDetailScreen,
  navigationOptions: { title: "Product Detail" }
};

const SubscriptionProductDetail = {
  screen: SubscriptionProductDetailScreen,
  navigationOptions: { title: "Subscription Product Detail" }
};

export const ListStack = createStackNavigator({ ListScreen, DetailScreen });
ListStack.navigationOptions = {
  tabBarIcon: ({ focused: f }) => icon(f, "list", "", "feather")
};

export const SubscriptionProductsListStack = createStackNavigator({
  SubscriptionProductsList,
  DetailScreen,
  SubscriptionProductDetail
});
SubscriptionProductsListStack.navigationOptions = {
  tabBarIcon: ({ focused: f }) => icon(f, "list", "", "feather")
};
