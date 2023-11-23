import React, { useEffect, useState } from "react";
import "./FormStyle.scss";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Radio,
  Checkbox,
  Typography,
} from "antd";
import { getListProvinces } from "../../service/form/FormService";

const { Option } = Select;
const UserInfoForm = () => {
  const [formValue, setFormValue] = useState({});
  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    getListProvin();
  }, []);

  const getListProvin = async () => {
    try {
      const listProvince = await getListProvinces();
      if (listProvince) setProvinces(listProvince);
    } catch (error) {}
  }
  const handleOnchange = (value, name) => {
    let newValue = {};
    if (name === "province") {
      newValue = {
        ...formValue,
        province: value,
        district: null,
      };
      setDistricts(
        provinces.find((province) => province?.code === value).districts
      );
    }

    if (name === "district") {
      newValue = {
        ...formValue,
        district: value,
      };
    }

    setFormValue(newValue);
  };

  return (
    <Form layout="vertical">
      <Typography.Title className="user-info" level={4}>
        Thông tin khách hàng
      </Typography.Title>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Vui lòng nhập họ tên" },
              {
                max: 100,
                message: "Tối đa 100 ký tự tính cả khoảng trắng",
              },
              {
                pattern: /^(?! )(?!.*\s{2,})(?!^ )[A-Za-z\s]*(?<! )$/gi,
                message: "Họ và tên không hợp lệ",
              },
              {
                pattern: /^[0-9A-Za-z\s]*[ ][0-9A-Za-z\s]*$/gi,
                message:
                  "Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn.",
              },
            ]}
          >
            <Input placeholder="Nhập họ và tên" onChange={handleOnchange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại" },
              { type: "number", message: "Số điện thoại không hợp lệ" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="province"
            rules={[
              { required: true, message: "Vui lòng chọn tỉnh/thành phố" },
            ]}
            valuePropName={formValue?.province}
          >
            <Select
              placeholder="Chọn thành phố"
              onChange={(e) => handleOnchange(e, "province")}
              value={formValue.province}
            >
              {provinces?.map((province, index) => (
                <Option key={province?.code} value={province?.code}>
                  {province?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="district"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn quận/huyện",
              },
            ]}
            valuePropName={formValue.district}
          >
            <Select
              placeholder="Chọn huyện"
              onChange={(e) => handleOnchange(e, "district")}
              value={formValue.district}
            >
              {districts?.map((district, index) => (
                <Option key={district.codename} value={district.code}>
                  {district.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Typography.Title className="sex" level={5}>
            Giới tính
          </Typography.Title>
          <Form.Item
            name="sex"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn giới tính",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Typography.Title className="category" level={4}>
            Sản phẩm tư vấn
          </Typography.Title>
          <Form.Item
            name="category"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn danh mục",
              },
            ]}
          >
            <Checkbox.Group style={{ width: "100%" }}>
              <Row>
                <Col span={12}>
                  <Checkbox value="A">Thẻ tín dụng</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="B">Mua trước chả sau</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="C">Vay linh hoạt</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="D">Tài khoản M-PRO</Checkbox>
                </Col>
                <Col span={12}>
                  <Checkbox value="E">Tiền nhanh</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập thông tin",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Nhập thông tin" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button className="btn-submit" type="primary" htmlType="submit">
              Xác nhận
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default UserInfoForm;
