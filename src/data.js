import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
const Menuitems = [
  {
    navlabel: true,
    subheader: "Dashboard",
    icon: <DashboardIcon />,
    href: "dashboard",
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "/dashboards/dashboard1",
  },
  {
    title: "Analytics",
    icon: <ShowChartIcon />,
    href: "/dashboards/analytics",
  },
  {
    title: "Sales",
    icon: <PieChartIcon />,
    href: "/dashboards/sales",
  },
  {
    navlabel: true,
    subheader: "Quick Menu",
    icon: "mdi mdi-dots-horizontal",
    href: "Apps",
  },
  {
    title: "Users",
    icon: <PersonIcon />,
    href: "/chats",
  },
  {
    title: "Products",
    icon: <StorefrontIcon />,
    href: "/notes",
  },
  {
    title: "Transaction",
    icon: <MonetizationOnIcon />,
    href: "/email",
  },

  {
    title: "Reports",
    icon: <AssessmentIcon />,
    href: "/calendar",
  },
  {
    navlabel: true,
    subheader: "Notifications",
    icon: "mdi mdi-dots-horizontal",
    href: "Pages",
  },
  {
    title: "Mail",
    icon: <MailOutlineIcon />,
    href: "/shop",
    collapse: true,
  },
  {
    title: "Feedback",
    icon: <DynamicFeedIcon />,
    href: "/user-profile",
  },
  {
    title: "Messages",
    icon: <ChatBubbleIcon />,
    href: "/react-icons",
  },
  {
    navlabel: true,
    subheader: "Staff",
    icon: "mdi mdi-dots-horizontal",
    href: "Form",
  },
  {
    title: "Analytics",
    icon: <ShowChartIcon />,
    href: "/form-layouts/form-layouts",
  },
  {
    title: "Sales",
    icon: <WorkOutlineIcon />,
    href: "/form-layouts/form-custom",
  },
  {
    title: "Reports",
    icon: <ReportGmailerrorredIcon />,
    href: "/form-elements",
    collapse: true,
  },
];

export default Menuitems;
