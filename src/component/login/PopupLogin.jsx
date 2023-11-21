import React, { useImperativeHandle, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Modal } from "antd";
import "./LoginStyle.scss";
import { handleLogin } from "../../service/login/LoginSerive";
const FormItem = Form.Item;
const PopupLogin = ({ refLogin }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef({});

  useImperativeHandle(refLogin, () => ({
    open: () => {
      const promise = new Promise((resolve, reject) => {
        formRef.current.resolve = resolve;
        formRef.current.reject = reject;
      })
      setVisible(true);
      return promise;
    },
  }));
  const handleSubmitLogin = async () => {
    try {
      const isLogin = await handleLogin(user);
      if (isLogin?.data) {
        localStorage.setItem("USER", isLogin?.data?.token);
        setVisible(false);
        // navigate('/account');
        formRef.current.resolve();
      }
    } catch (e) {
      alert('Sai tên đăng nhập hoặc mật khẩu');
    }
  };

  return (
    <Modal
      title="Đăng nhập"
      visible={visible}
      footer={null}
      width={"343px"}
      style={{ top: "37%" }}
      onCancel={() => setVisible(false)}
    >
      <Form className="login-form">
        <span className="title-field">Tên tài khoản</span>
        <FormItem>
          <Input
            placeholder="Nhập tên tài khoản"
            onChange={(e) => setUser({ ...user, username: e?.target?.value })}
          />
        </FormItem>
        <FormItem>
          <span className="title-field">Mật khẩu</span>
          <Input
            type="password"
            placeholder="Nhập mật khẩu"
            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
          />
        </FormItem>
        <div className="footer-button">
          <Button
            className="close-form-button"
            width={"140px"}
            onClick={() => setVisible(false)}
          >
            Đóng
          </Button>
          <Button
            htmlType="submit"
            className="login-form-button"
            onClick={handleSubmitLogin}
          >
            Đăng nhập
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default PopupLogin;
