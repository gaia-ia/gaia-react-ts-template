export type ChassisCardButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  chassis: {
    chassi_id: string;
    title: string;
    thumbnail: string;
  };
  selected: boolean;
};
