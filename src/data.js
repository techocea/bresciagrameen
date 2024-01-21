import { IoMdAirplane } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
// import { BsCurrencyExchange } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";

export const serviceData = [
  {
    id: 1,
    to: "/migration-loans",
    title: "Migration Loans",
    icons: IoMdAirplane,
  },
  {
    id: 2,
    to: "/student-loans",
    title: "Student Loans",
    icons: FaUserGraduate,
  },

  {
    id: 3,
    to: "/western-union",
    title: "Western union",
    icons: FaDollarSign,
  },
  // {
  //   id: 4,
  //   to: "/study-abroad",
  //   title: "Study Abroad",
  //   icons: BsCurrencyExchange,
  // },
  {
    id: 5,
    to: "/gold-pawning",
    title: "Gold Pawning",
    icons: FaBalanceScale,
  },
];

export const footerData = [
  {
    id: 1,
    title: "About",
    to: ["about"],
    lists: ["Our history"],
  },
  {
    id: 2,
    title: "services",
    to: ["migration-loans", "student-loans", "western-union", "gold-pawning"],
    lists: [
      "Migration Loans",
      "Student Loans",
      "Western union",
      "Gold Pawning",
    ],
  },
  {
    id: 3,
    title: "Loan",
    to: ["loans"],
    lists: ["Loan details"],
  },
  {
    id: 4,
    title: "Terms of use",
    to: ["privacy-policy", "terms-conditions"],
    lists: ["Privacy policy", "Terms & conditions"],
  },
];

export const loanData = [
  {
    id: 1,
    topic: "Migration Loan",
    description:
      "e understand that the journey of migration involves not just a change in location but a transformation in one's life. Our migration loans  are tailored to make your move smooth, stress- free, and financially  manageable.Whether you are relocating for employment, education, or  personal reasons, we are here to support you every step of the way. Our migration loans are designed to address the diverse financial travel expenses, settlement costs, visa fees, education expenses,and more.",
    advantages: [
      {
        topic: "Benefits",
        points: [
          "your dream becomes true",
          "Less documentation process",
          "10-14 days of working process",
          "Stress Free",
        ],
      },
      {
        topic: "Eligibility & Other Info",
        points: [
          "your dream becomes true",
          "Less documentation process",
          "10-14 days of working process",
          "Stress Free",
        ],
      },
    ],
  },
  {
    id: 2,
    topic: "Student Loan",
    description:
      "Embarking on a journey to study abroad is an exciting endeavor, and we understand the financial challenges that may arise. At [Finance Company Name], we specialize in providing financial support for your educational pursuits.Create a realistic budget that includes tuition, books, and living expenses. Stick to it to avoid unnecessary debt.It's tempting to take the maximum offered, but borrow only what's essential to minimize repayment stress after graduation.",
    advantages: [
      {
        topic: "Benefits",
        points: [
          " Build a Strong Credit History",
          "Less documentation process",
          "10-14 days of working process",
          "Repayment Plans",
        ],
      },
      {
        topic: "Eligibility & Other Info",
        points: [
          "your dream becomes true",
          "Less documentation process",
          "10-14 days of working process",
          "Stress Free",
        ],
      },
    ],
  },
];
export const navLinks = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/about",
    title: "About",
  },
  {
    id: 3,
    to: "/migration-loan",
    title: "Services",
  },
  {
    id: 4,
    to: "/loan",
    title: "Loan",
  },
];
