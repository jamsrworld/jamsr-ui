import { StarIcon } from "@jamsr-ui/shared-icons";
import { dataAttr } from "@jamsr-ui/utils";
import { useRatingContext } from "./rating-context";

type Props = {
  value: number;
  index: number;
  setValue: (value: number) => void;
  id: string;
};

export const RatingItem = (props: Props) => {
  const { index: itemValue, value, setValue, id } = props;
  const handleOnChange = () => {
    setValue(itemValue);
  };
  const isChecked = value >= itemValue;
  const { styles, isDisabled, isReadonly } = useRatingContext();
  const isInteractive = !isDisabled && !isReadonly;

  const handleMouseMove = () => {
    if (!isInteractive) return;
    setValue(itemValue);
  };

  return (
    <label
      data-checked={dataAttr(isChecked)}
      data-value={itemValue}
      className={styles.starWrapper()}
      onMouseEnter={handleMouseMove}
      data-interactive={dataAttr(isInteractive)}
    >
      <StarIcon className={styles.star()} />
      <span className="sr-only"></span>
      <input
        value={itemValue}
        aria-hidden
        type="radio"
        name={id}
        onChange={handleOnChange}
        className="sr-only"
        disabled={isReadonly || isDisabled}
      />
    </label>
  );
};
