import Body from '@components/typography/Body';
import * as RadioGroup from '@radix-ui/react-radio-group';

import styles from './styles.module.css';

const Root = (props: RadioGroup.RadioGroupProps) => {
  return (
    <RadioGroup.Root
      className={`${styles.root} ${props.className} `}
      {...props}
    ></RadioGroup.Root>
  );
};

const Item = ({ children, ...props }: RadioGroup.RadioGroupItemProps) => {
  return (
    <RadioGroup.Item className={`${styles.item} ${props.className}`} {...props}>
      <RadioGroup.Indicator />
      <Body variant="small_body">{children}</Body>
    </RadioGroup.Item>
  );
};

export default { Root, Item };
