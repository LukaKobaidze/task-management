import { forwardRef } from 'react';
import { IconCross } from 'assets';
import { Input } from 'components';
import styles from 'styles/InputRemove.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onRemove: () => void;
  classNameWrapper?: string;
  buttonTitle?: string;
}
type Ref = HTMLInputElement;

export default forwardRef<Ref, Props>(function InputRemove(props, ref) {
  const { onRemove, classNameWrapper, className, buttonTitle, ...restProps } = props;

  return (
    <div className={`${styles.container} ${classNameWrapper}`}>
      <Input ref={ref} className={`${styles.input} ${className}`} {...restProps} />
      <button className={styles.button} onClick={onRemove} title={buttonTitle}>
        <IconCross />
      </button>
    </div>
  );
});
