// Icon selection
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashOutlined,
  FormOutlined
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
    text: 'Dashboard',
    key: "1",
    path: "/",
    icon: <DashOutlined />,
    children: []
  },
  {
    text: 'Forms',
    key: "2",
    path: "/forms",
    icon: <FormOutlined />,
    children: []
  },
  {
    text: 'Submenus',
    key: "sub1",
    icon: <UploadOutlined />,
    children: [
      {
        text: "Sub 01",
        key: "3",
        path: "/subpath1",
        icon: <UserOutlined />
      },
      {
        text: "Sub 02",
        key: "4",
        path: "/subpath2",
        icon: <VideoCameraOutlined />
      },
      {
        text: "Sub 03",
        key: "5",
        path: "/subpath3",
        icon: null
      }
    ]
  },
]