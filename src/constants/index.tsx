import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
  IoIosLogIn,
  IoIosLogOut,
} from "react-icons/io";
import {
  FaChartBar,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaUsersCog,
  FaListAlt,
} from "react-icons/fa";

import user01 from "../assets/user01.jpg";
import user02 from "../assets/user02.jpg";
import user03 from "../assets/user03.jpg";
import user04 from "../assets/user04.jpg";
import user05 from "../assets/user05.jpg";

export interface Badge {
  text: string;
  color: string;
  darkColor: string;
}
export interface LinkProps {
  href: string;
  icon: React.ElementType<{ className?: string }>;
  text: string;
  badge?: Badge;
}
export interface EmpolyeesDataProps {
  title: string;
  icon: React.ElementType<{ className?: string }>;
  count: number;
  bgColor: string;
}
export interface UserProps {
  name: string;
  country: string;
  role: string;
  image: string;
  bgColor: string;
}
export interface eventProps {
    date: string;
    title: string;
    description: string;
}
export const links = [
  {
    href: "#",
    icon: FaChartBar,
    text: "Dashboard",
  },
  {
    href: "#",
    icon: FaCalendarAlt,
    text: "Kanban",
    badge: {
      text: "Pro",
      color: "bg-gray-100 text-gray-800",
      darkColor: "dark:bg-gray-700 dark:text-gray-300",
    },
  },
  {
    href: "#",
    icon: IoIosStats,
    text: "Estatísticas",
    badge: {
      text: "4",
      color: "bg-blue-100 text-blue-800",
      darkColor: "dark:bg-blue-900 dark:text-blue-300",
    },
  },
  {
    href: "#",
    icon: FaUsersCog,
    text: "Usuários",
  },
  {
    href: "#",
    icon: IoIosSettings,
    text: "Configurações",
  },
  //{
    //href: "#",
    //icon: IoIosLogIn,
    //text: "Entrar",
  //},
  {
    href: "#",
    icon: IoIosLogOut,
    text: "Sair",
  },
];

export const empolyeesData: EmpolyeesDataProps[] = [
  {
    title: "Usuários cadastrados",
    icon: IoIosPerson,
    count: 14,
    bgColor: "bg-gray-100",
  },
  {
    title: "Usuários on-lines",
    icon: IoIosEyeOff,
    count: 15,
    bgColor: "bg-blue-100",
  },
  {
    title: "Novos usuários",
    icon: IoIosPersonAdd,
    count: 25,
    bgColor: "bg-yellow-100",
  },
];

export const shortcutLink = [
  {
    title: "Metas",
    icon: GoGoal,
  },
  {
    title: "Plano",
    icon: GrPlan,
  },
  {
    title: "Estatísticas",
    icon: IoIosStats,
  },
  {
    title: "Configurações",
    icon: IoIosSettings,
  },
];

export const users = [
  {
    name: "Lucas Andrade ",
    country: "Brasil",
    role: "Assinatura anual",
    image: user01,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Sophia Müller",
    country: "Alemanha",
    role: "Assinatura mensal",
    image: user02,
    bgColor: "bg-blue-100",
  },
  {
    name: "Ethan O'Connor",
    country: "Irlanda",
    role: "Assinatura trimestral",
    image: user03,
    bgColor: "bg-gray-100",
  },
  {
    name: "Aiko Tanaka",
    country: "Japão",
    role: "Assinatura trimestral",
    image: user01,
    bgColor: "bg-slate-100",
  },
  {
    name: "Rafael Santini",
    country: "Itália",
    role: "Assinatura trimestral",
    image: user03,
    bgColor: "bg-gray-100",
  },
  {
    name: "Samara Santos",
    country: "Brasil",
    role: "Assinatura anual",
    image: user05,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Javier Rodríguez",
    country: "Espanha",
    role: "Assinatura anual",
    image: user04,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Isabella Dupont",
    country: "França",
    role: "Assinatura trimestral",
    image: user01,
    bgColor: "bg-slate-100",
  },
  {
    name: "Liam McAllister",
    country: "Escócia",
    role: "Assinatura trimestral",
    image: user04,
    bgColor: "bg-gray-100",
  },
  {
    name: "Elena Petrova",
    country: "Rússia",
    role: "Assinatura trimestral",
    image: user01,
    bgColor: "bg-slate-100",
  },
];

export const events = [
  {
    date: "01 de Ago",
    title: "Promoção de Assinatura Premium",
    description: "Assine nosso plano premium com 30% de desconto e acesse animes exclusivos!",
  },
  {
    date: "15 de Set",
    title: "Especial One Piece",
    description: "Não perca o especial de One Piece, com episódios inéditos e conteúdo extra!",
  },
  {
    date: "20 de Set",
    title: "Lançamento de Nova Temporada",
    description: "Confira a estreia da nova temporada de animes, disponível para todos os assinantes.",
  },
  {
    date: "20 de Set",
    title: "Dia de Contas Grátis",
    description: "Acesse todo o nosso conteúdo de graça por um dia! Aproveite para maratonar seus animes favoritos.",
  },
  {
    date: "20 de Set",
    title: "Black Friday Otaku",
    description: "Descontos imperdíveis em nossos planos e produtos. Prepare-se para as melhores ofertas do ano!",
  },
];



// ------- ==
// chart data, later we will use this!!!

// const options = {
//   series: [44, 55, 41],
//   options: {
//     chart: {
//       type: "donut",
//       height: 350,
//     },
//     labels: ["Desktop", "Tablet", "Mobile"],
//     colors: ["#FF5733", "#33FF57", "#3357FF"],
//     legend: {
//       position: "bottom",
//       labels: {
//         colors: darkMode ? "#dddddd" : "#000000",
//       },
//     },
//     dataLabels: {
//       style: {
//         colors: ["#dddddd"],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   },
// };

// ..........
// const chartConfig = {
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     chart: {
//       type: "bar",
//       height: 240,
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#020617"],
//     plotOptions: {
//       bar: {
//         columnWidth: "40%",
//         borderRadius: 2,
//       },
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#a0a0a0",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };
