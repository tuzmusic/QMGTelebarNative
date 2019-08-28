/** Fix error:
 * "TypeError: Cannot read property 'Direction' of undefined"
 */
import { NativeModules } from "react-native";
NativeModules.RNGestureHandlerModule = {};
