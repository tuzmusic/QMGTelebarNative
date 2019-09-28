// @flow
import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Button as NativeButton
} from "react-native";
import { Input, Icon, Image, Divider, Button } from "react-native-elements";
import Product from "../models/Product";
import { MaterialIndicator } from "react-native-indicators";
import FormContainer from "../subviews/FormContainer";
import Quantity from "../components/Quantity";
import { SubscriptionFormView } from "../subviews/SubscriptionFormView";
import * as Types from "../redux/FormTypes";
import ShopWorker from "../models/ShopWorker";
import { connect } from "react-redux";
import { selectCartSize, selectCartItems } from "../redux/reducers/cartReducer";
import { addItemToCart } from "../redux/actions/cartActions";
import LineItem from "../models/LineItem";

const Space = () => <Divider height={20} backgroundColor="transparent" />;

const Container = ({ children }: any) => (
  <KeyboardAvoidingView behavior="height" style={{}}>
    <ScrollView>
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
)

const Row = ({ children }: any) => (
  <View style={styles.rowContainer}>
    {children}
  </View>
)

const InfoContainer = ({ children }) => (
  <View style={styles.basicInfoContainer}>{children}</View>
)

const ProductImage = ({ product }) => (
  <Image /* IMAGE */
    style={[styles.image]}
    containerStyle={[styles.imageContainer]}
    source={{ uri: product.images[0].src }}
    PlaceholderContent={<ActivityIndicator color={"blue"} />}
  />
)

type Props = {
  product: Product,
  navigation?: Object,
  cartCount?: number,
  addToCart: Types.LineItemCreatorObject => void
};

type State = { selection: Types.ProductFormSelection };

const selectProps = state => {
  // console.log(selectCartItems(state));
  return { cartCount: selectCartSize(state) }
};

const actions = dispatch => {
  return {
    addToCart: (item) => dispatch(addItemToCart(LineItem.fromProductForm(item)))
  }
}

export class SubscriptionProductDetailScreen extends Component<Props, State> {
  product: Product;

  constructor(props: Props) {
    super(props);
    this.product =
      this.props.product || this.props.navigation.getParam("product");
  }

  static navigationOptions = ({ navigation }: Object) => {
    const cartCount = navigation.getParam('cartCount')
    const cartStr = cartCount && ` (${cartCount})`
    return {
      title: navigation.getParam("product").name,
      headerRight: (
        <NativeButton onPress={() => alert("This is a button!")} title={"Cart" + (cartStr || '')} />
      )
    };
  };

  state = { selection: { card: null, items: [] } };

  optionsPrice(): number {
    return ShopWorker.totalPrice(this.state.selection.items);
  }

  reportSelection(selection: Types.ProductFormSelection) {
    this.setState({ selection });
  }

  get totalPrice() {
    return this.product.price + this.optionsPrice();
  }

  addToCart() {
    const item: Types.LineItemCreatorObject = {
      product: this.product,
      quantity: 1, // default for Subscription Product
      items: this.state.selection,
    }
    this.props.addToCart(item)
  }

  updateCartCount() {
    const { navigation, cartCount } = this.props
    if (navigation && (cartCount || cartCount === 0)) {
      const oldCount = navigation.getParam('cartCount')
      if (oldCount != cartCount) { // !== doesn't work here for some reason
        navigation.setParams({ cartCount: `${cartCount}` })
      }
    }
  }

  render() {
    this.updateCartCount()
    const product = this.product;
    const image = product.images[0];
    return (
      <Container>
        <Row>
          <ProductImage product={product} />

          <InfoContainer>
            <Text style={text.name}>{product.name}</Text>
            <Text style={text.price} /* BASE PRICE */>
              Subscription Price:{" "}
              <Text testID="SUBSCRIPTION_PRICE">{"$" + product.price}</Text>
            </Text>
            <Text style={text.price} /* OPTIONS PRICE */>
              Options Price:{" "}
              <Text testID="OPTIONS_PRICE">
                {"$" + this.optionsPrice()}
              </Text>
            </Text>
            <Text style={text.totalPrice} /* TOTAL PRICE */>
              Total Price:{" "}
              <Text testID="TOTAL_PRICE">{"$" + this.totalPrice}</Text>
            </Text>
          </InfoContainer>
        </Row>

        <Space />

        <View style={styles.rowContainer}>
          <View /* BODY (description) */ style={styles.bodyContainer}>
            <Text style={text.description}>
              {// the website itself appears to use the short_description
                product.shortDescription || product.description}
            </Text>
          </View>
          <View /* BUYING */ style={styles.buyNowContainer}>
            <Button testID="SUBMIT_BUTTON" title="Add to Cart" style={{ width: 150 }} onPress={this.addToCart.bind(this)} />
          </View>
        </View>

        <Space />

        <View /* FORM!!! */>
          <SubscriptionFormView
            testID={"SUBSCRIPTION_FORM_VIEW"}
            form={product.form}
            selectionReporter={this.reportSelection.bind(this)}
            titleStyle={titleStyle}
          />
        </View>
      </Container>
    );
  }
}

export default connect(selectProps, actions)(SubscriptionProductDetailScreen);

const baseSize = 18;
const baseText = {
  paddingBottom: 5
};

const titleStyle = { fontWeight: "normal", fontSize: baseSize, padding: 5 };
const text = {
  name: {
    fontWeight: "bold",
    fontSize: baseSize + 2
  },
  price: {
    fontSize: baseSize
  },
  totalPrice: {
    fontWeight: "bold",
    fontSize: baseSize
  },
  description: {
    fontSize: baseSize
  }
};

Object.values(text).forEach((v: Object) => (v = Object.assign(v, baseText)));

const full = "100%";
const styles = {
  buyNowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  totalText: { fontSize: baseSize + 4, fontWeight: "bold" },
  container: { margin: 20 }, // scrollview or keyavoid gives us some margin/padding?
  basicInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    flex: 2
    // borderWidth: 1
  },
  bodyContainer: { flex: 1 },
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
  }
};
