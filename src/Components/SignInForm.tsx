import React, { useState } from "react";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import {
  Alert,
  AlertProps,
  Button,
  Drawer,
  Form,
  FormProps,
  Input,
  Popconfirm,
  Space,
} from "antd";
import { useAuth } from "../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { auth } from "../serverless/firebase/app";

const SignInForm: React.FC<{ title?: string; className?: string }> = ({
  title,
  className,
}) => {
  const { user, setUser } = useAuth();
  const [open, setOpen] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [alertType, setAlertType] = useState<AlertProps>({
    type: "success",
    message: "",
  });
  const handleClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  type FieldType = {
    email: string;
    password: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const onSuccess = (userCredential: UserCredential) => {
      setUser(userCredential.user);
      if (userCredential.user) {
        onClose();
      }
    };
    if (signUp) {
      const onError:
        | ((reason: any) => void | PromiseLike<void>)
        | null
        | undefined = (error) => {
        if (
          error.message.includes("Firebase: Error (auth/email-already-in-use).")
        ) {
          setAlertType({
            message: "Email already in use. Sign In",
            type: "error",
          });
          setVisible(true);
        }
      };
      await createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(onSuccess)
        .catch(onError);
    } else {
      await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      ).then(onSuccess);
    }
  };

  return (
    <>
      <div className="hidden lg:block">
        <Button
          type="primary"
          className={className}
          onClick={() => {
            user ? setShowPop(true) : showDrawer();
          }}
          icon={user ? <UserOutlined /> : <UserAddOutlined />}
        >
          {user ? user.email : title ?? "Sign In"}
        </Button>
      </div>
      <div className="lg:hidden">
        <Button
          type="primary"
          shape="circle"
          onClick={() => {
            user ? setShowPop(true) : showDrawer();
          }}
          icon={user ? <UserOutlined /> : <UserAddOutlined />}
        >
          {user ? "" : "Sign In"}
        </Button>
      </div>

      <Popconfirm
        open={showPop}
        placement="bottomRight"
        title={"Sign Out"}
        okText="Yes"
        cancelText="No"
        onConfirm={async () => {
          await signOut(auth).then(() => setShowPop(false));
        }}
        onCancel={() => setShowPop(false)}
      ></Popconfirm>
      <Drawer
        title={signUp ? "Sign up" : "Sign in"}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input placeholder="Please enter email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[{ required: true, message: "Please enter user password" }]}
          >
            <Input.Password placeholder="input password" />
          </Form.Item>
          {visible && (
            <>
              <Alert closable afterClose={handleClose} {...alertType} />
              <br />
            </>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {signUp ? "Sign up" : "Sign in"}
            </Button>
          </Form.Item>
          <Button
            type="link"
            htmlType="button"
            onClick={() => setSignUp(!signUp)}
          >
            {signUp
              ? "Already have an account, sign in"
              : "I am new here, sign up"}
          </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default SignInForm;
