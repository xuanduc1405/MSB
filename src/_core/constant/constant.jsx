import Banner from "../../component/banner/Banner";
import Phone from "./../../_core/img/Phone.svg?react";
import Document from "./../../_core/img/re1.svg?react";
import Time from "./../../_core/img/re2.svg?react";
import Change from "./../../_core/img/re3.svg?react";
import User from "./../../_core/img/user.svg?react";
import File from "./../../_core/img/file-text.svg?react";
import Logout from "./../../_core/img/log-out.svg?react";
export const items = [
  {
    label: "Sản phẩm",
    key: "product",
    children: [
      {
        label: "Thẻ tín dụng",
        children: [
          {
            label: "Thẻ tín dụng",
            key: "credit1",
          },
          {
            label: "Thẻ tín dụng",
            key: "credit2",
          },
        ],
      },
      {
        label: "Vay",
        children: [
          {
            label: "MSB Mastercard mDigi",
            key: "mdigi",
          },
          {
            label: "MSB Mastercard Super Free",
            key: "free",
          },
          {
            label: "MSB Visa Online",
            key: "visa",
          },
          {
            label: "MSB Visa Travel",
            key: "travel",
          },
          {
            label: "MSB Visa Signature",
            key: "signature",
          },
        ],
      },
      {
        label: "Bảo hiểm",
        key: "save",
      },
    ],
  },
  {
    label: "So sánh",
    key: "compare",
  },
  {
    label: "Câu hỏi thường gặp",
    key: "ask",
  },
  {
    label: "Đăng nhập",
    key: "signIn",
  },
  {
    label: "1900 6083",
    key: "phone",
    icon: <Phone />,
  },
];

export const listSlideShow = [
  {
    id: 1,
    value: <Banner />,
  },
  {
    id: 2,
    value: <Banner />,
  },
  {
    id: 3,
    value: <Banner />,
  },
  {
    id: 4,
    value: <Banner />,
  },
];
export const listReason = [
  {
    id: 1,
    icon: <Document />,
    title: "100% online",
    content: "Đăng ký và nộp hồ sơ trực tuyến",
  },
  {
    id: 2,
    icon: <Time />,
    title: "Phê duyệt siêu tốc",
    content: "Duyệt hồ sơ nhanh trong 5 phút",
  },
  {
    id: 3,
    icon: <Change />,
    title: "Sử dụng linh hoạt",
    content: "Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm",
  },
];
export const listFunctionManage = [
  {
    label: <div className="function-item">
      <User />
      <span>Thông tin tài khoản</span>
    </div>,
    key: "user"
  },
  {
    label: <div className="function-item">
      <File />
      <span>Thông tin sản phẩm</span>
    </div>,
    key: "product"
  },
  {
    label: <div className="function-item">
      <Logout />
      <span>Đăng xuất</span>
    </div>,
    key: "logout"
  },

];
export const contentList = [
  {
    key: "user",
    title: "Thông tin chung",
    content: "hihi",
  },
  {
    key: "product",
    title: "Thông tin sản phẩm",
    content: "hihi",
  },
];