import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@wesleymarcelino/rn-bridge-aar' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RNBridgeAARProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RNBridgeAARView';

export const RNBridgeAARView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RNBridgeAARProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
