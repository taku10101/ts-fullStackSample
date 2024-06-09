import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@yamada-ui/react";
import React from "react";
import { PostForm } from "../forms/PostForm";

export const FormModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>あなたの後悔を教えてください</ModalHeader>

        <ModalBody>
          <PostForm />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="primary">投稿</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
