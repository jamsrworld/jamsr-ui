import { dateFieldStyles } from "./styles";

const styles = dateFieldStyles();

export const DateInput = (props: DateInput.Props) => {
  // const { className, ...rest } = props;
  return null;
  // return <DateFieldUI.Input {...rest} className={styles.root({ className })} />;
};

export const DateSegment = (props: DateSegment.Props) => {
  // const { className, ...rest } = props;
  return null;
  // return (
  //   <DateFieldUI.Segment {...rest} className={styles.segment({ className })} />
  // );
};

export const DateFieldSeparator = (props: DateFieldSeparator.Props) => {
  // const { className, ...rest } = props;
  return null;
  // return (
  //   <DateFieldUI.Separator
  //     {...rest}
  //     className={styles.separator({ className })}
  //   />
  // );
};

export const DateField = (props: DateField.Props) => {
  const { ...rest } = props;
  return <DateInput {...rest} />;
};

// export namespace DateField {
//   export interface Props extends DateFieldUI.Props {}
// }

// export namespace DateInput {
//   export interface Props extends DateFieldUI.Input {}
// }

// export namespace DateSegment {
//   export interface Props extends DateFieldUI.Segment {}
// }

// export namespace DateFieldSeparator {
//   export interface Props extends DateFieldUI.Separator {}
// }
