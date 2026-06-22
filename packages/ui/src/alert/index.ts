import {
  Alert as AlertRoot,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "./alert";

import type { AlertVariants } from "./styles";

export const Alert = Object.assign(AlertRoot, {
  Content: AlertContent,
  Icon: AlertIcon,
  Title: AlertTitle,
  Description: AlertDescription,
});

export namespace Alert {
  export interface Variants extends AlertVariants {}
  export interface Props extends AlertRoot.Props {}
}
