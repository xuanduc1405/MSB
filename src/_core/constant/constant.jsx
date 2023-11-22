import Banner from "../../component/banner/Banner";
import Phone from "./../../_core/img/Phone.svg?react";
import Document from "./../../_core/img/re1.svg?react";
import Time from "./../../_core/img/re2.svg?react";
import Change from "./../../_core/img/re3.svg?react";
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