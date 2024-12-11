"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import MyRichTextarea from "./MyRichTextarea";
import { MyTextArea } from "./MyTextArea";


export function MyModalbox() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div onClick={() => setOpenModal(true)}>
        <MyTextArea />
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Post</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <MyRichTextarea/>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}



