import Banner from "../../component/banner/Banner";
import { ReactComponent as Phone } from "./../../_core/img/Phone.svg";
import { ReactComponent as Document } from "./../../_core/img/re1.svg";
import { ReactComponent as Time } from "./../../_core/img/re2.svg";
import { ReactComponent as Change } from "./../../_core/img/re3.svg";
import { ReactComponent as User } from "./../../_core/img/user.svg";
import { ReactComponent as File } from "./../../_core/img/file-text.svg";
import { ReactComponent as Logout } from "./../../_core/img/log-out.svg";
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
            key: "credit1",
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
      <a>Thông tin tài khoản</a>
    </div>,
    key: "user"
  },
  {
    label: <div className="function-item">
      <File />
      <a>Thông tin sản phẩm</a>
    </div>,
    key: "product"
  },
  {
    label: <div className="function-item">
      <Logout />
      <a>Đăng xuất</a>
    </div>,
    key: "logout"
  },
  
];
