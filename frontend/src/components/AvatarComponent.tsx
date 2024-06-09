import { Avatar } from "@yamada-ui/react";

type AvatarComponentProps = {
  icon: string;
};
export function AvatarComponent(props: AvatarComponentProps) {
  const { icon } = props;
  return <Avatar name="Hirotomo Yamada" src={icon} />;
}
