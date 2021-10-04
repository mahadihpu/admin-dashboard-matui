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
    href: "",
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "",
  },
  {
    title: "Analytics",
    icon: <ShowChartIcon />,
    href: "",
  },
  {
    title: "Sales",
    icon: <PieChartIcon />,
    href: "",
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
    href: "/users",
  },
  {
    title: "Products",
    icon: <StorefrontIcon />,
    href: "/products",
  },
  {
    title: "Transaction",
    icon: <MonetizationOnIcon />,
    href: "/transaction",
  },

  {
    title: "Reports",
    icon: <AssessmentIcon />,
    href: "/reports",
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
    href: "/mail",
    collapse: true,
  },
  {
    title: "Feedback",
    icon: <DynamicFeedIcon />,
    href: "/feedback",
  },
  {
    title: "Messages",
    icon: <ChatBubbleIcon />,
    href: "/messages",
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
    href: "/",
  },
  {
    title: "Sales",
    icon: <WorkOutlineIcon />,
    href: "/",
  },
  {
    title: "Reports",
    icon: <ReportGmailerrorredIcon />,
    href: "/",
    collapse: true,
  },
];

export default Menuitems;
