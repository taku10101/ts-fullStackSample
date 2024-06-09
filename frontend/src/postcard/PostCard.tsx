import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Avatar,
} from "@yamada-ui/react";
import "./PostCard.css";
import { AvatarComponent } from "../components/AvatarComponent";

type PostCardProps = {
  name: string;
  icon: string;
  content: string;
};

export const PostCard = (props: PostCardProps) => {
  const { name, icon, content } = props;

  return (
    <Card size="normal">
      <CardHeader className="UserInfo">
        <AvatarComponent icon={""} />
        <Text>{name}</Text>
      </CardHeader>

      <CardBody>
        <Text>{content}</Text>
      </CardBody>
    </Card>
  );
};
