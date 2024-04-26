import { IoDiamondOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { TiEyeOutline } from "react-icons/ti";

import logo from "./assets/logo.png";

export const serviceData = [
  {
    id: 1,
    title: "Core Values",
    description: "Demonstrating client-focused trustworthiness and excellence",
    icons: IoDiamondOutline,
  },
  {
    id: 2,
    title: "Mission",
    description: "Be the premier provider Of superior financial solutions",
    icons: TbTargetArrow,
  },

  {
    id: 3,
    title: "Vision",
    description: "To be the most preferred Financial Service Brand",
    icons: TiEyeOutline,
  },
];

export const aboutSupportData = [
  {
    topics: ["Why Choose Us?", "Our Approach"],
    points: [
      "Flexible and Affordable funding options",
      "Quick and Hassle-Free application process",
      "Expert Guidance and Support",
      "Personalized Financial Solutions",
      "Transparent and Fair Terms",
      "Timely Disbursement of Funds",
    ],
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
    to: ["services", "services", "services", "services"],
    lists: ["Our services"],
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
    name: "About",
    to: "/about",
  },
  {
    id: 2,
    name: "Services",
    to: "/services",
    services: ["Work Visa", "Student Visa", "Tourist Visa", "Show Money"],
  },
  {
    id: 3,
    image: logo,
    to: "/",
  },
  {
    id: 4,
    name: "News",
    to: "/news",
  },
  {
    id: 5,
    name: "Contact",
    to: "/loans",
  },
];
