// Icon selection
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'

/**
 * Respect the key values following the order
 * 
 * 1) Each navigation item key must be a sequencial int number as string
 * 2) Each options group key must contains "sub" and a number to the group 
 * 3) If you dont want a icon for the menu item, inform null
 */

// Sidebar items
export const SidebarItems = [
  {
    text: 'Nav 01',
    key: "1",
    path: "/users",
    icon: <UserOutlined />,
    children: []
  },
  {
    text: 'Nav 02',
    key: "2",
    path: "/videos",
    icon: <VideoCameraOutlined />,
    children: []
  },
  {
    text: 'Nav 03',
    key: "3",
    path: "/uploads",
    icon: <UploadOutlined />,
    children: []
  },
  {
    text: 'Nav 04',
    key: "sub1",
    icon: <UploadOutlined />,
    children: [
      {
        text: "Sub 01",
        key: "4",
        path: "/subpath1",
        icon: <UserOutlined />
      },
      {
        text: "Sub 02",
        key: "5",
        path: "/subpath2",
        icon: <VideoCameraOutlined />
      },
      {
        text: "Sub 03",
        key: "6",
        path: "/subpath3",
        icon: null
      }
    ]
  },
]