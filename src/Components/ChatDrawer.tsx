import React from "react";
import { Button, Drawer } from "antd";
import { ThreadEnum } from "../Data/types";
import ChatComponent from "./ChatComponent";

const ChatDrawer: React.FC<{ type: ThreadEnum }> = ({ type }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
        className="mt-5"
      >
        Chat with AI Health Assistant
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={<p>Chat with AI</p>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={500}
        className="overscroll-none p-0"
        styles={{ body: { padding: 0 } }}
      >
        <ChatComponent type={type} />
      </Drawer>
    </>
  );
};

export default ChatDrawer;
