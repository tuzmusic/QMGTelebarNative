// #region Imports
// @flow
import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Input, Icon, Image, Divider, Button } from "react-native-elements";
import Product from "../models/Product";
import { MaterialIndicator } from "react-native-indicators";
import FormContainer from "../subviews/FormContainer";
import Quantity from "../components/Quantity";
import { SubscriptionFormView } from "../subviews/SubscriptionFormView";
import * as Types from "../redux/FormTypes";
// #endregion

type Props = { product: Product };
type State = {
  selection: { card: ?Types.Card, items: Types.QuantifiedOrderItem[] }
};

export default class SubscriptionProductDetailScreen extends Component<
  Props,
  State
> {
  product: Product;
  constructor(props: Props) {
    super(props);
    this.product =
      this.props.product || this.props.navigation.getParam("product");
  }

  state = { selection: { card: null, items: [] } };

  reportPrice = (price: number) => this.setState({ optionsPrice: price });
  get totalPrice() {
    return this.state.quantity * this.product.price + this.state.optionsPrice;
  }

  optionsPrice(): number {}

  render() {
    const Space = () => <Divider height={20} backgroundColor="transparent" />;
    const product = this.product;
    const image = product.images[0];
    return (
      <KeyboardAvoidingView behavior="height" style={{}}>
        <ScrollView>
          <View style={styles.container}>
            <View /* IMAGE */ style={styles.rowContainer}>
              <Image
                style={[styles.image]}
                containerStyle={[styles.imageContainer]}
                source={{ uri: image.src }}
                PlaceholderContent={<ActivityIndicator color={"blue"} />}
              />

              <View /* BASIC INFO & PRICE */ style={styles.basicInfoContainer}>
                <Text style={text.name}>{product.name}</Text>
                <Text style={text.price}>
                  Subscription Price:{" "}
                  <Text testID="SUBSCRIPTION_PRICE">{"$" + product.price}</Text>
                </Text>
                <Text style={text.price}>
                  Options Price:{" "}
                  <Text testID="OPTIONS_PRICE">
                    {"$" + this.optionsPrice()}
                  </Text>
                </Text>
              </View>
            </View>

            <View /* BUYING */ style={styles.buyNowContainer}>
              <Button title="Buy Now" style={{ width: 150 }} />
              <Text style={styles.totalText}>Total: ${this.totalPrice}</Text>
            </View>

            <Space />

            <View /* BODY (description) */ style={styles.bodyContainer}>
              <Text style={text.description}>
                {// the website itself appears to use the short_description
                product.shortDescription || product.description}
              </Text>
            </View>

            <Space />

            <View /* FORM!!! */>
              <SubscriptionFormView
                testID={"SUBSCRIPTION_FORM_VIEW"}
                form={product.form}
                priceDelegate={this.reportPrice.bind(this)}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const baseSize = 17;
const text = {
  name: {
    fontWeight: "bold",
    fontSize: 24
  },
  price: {
    fontSize: 22
  },
  description: {
    fontSize: 18
  }
};
const full = "100%";
const styles = {
  buyNowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  totalText: { fontSize: baseSize + 4, fontWeight: "bold" },
  container: { margin: 20 },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1
  },
  imageContainer: {
    flex: 2
  },
  image: {
    resizeMode: "cover",
    height: full,
    width: full
  },
  basicInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
    flex: 2
    // borderWidth: 1
  },
  bodyContainer: {}
};
