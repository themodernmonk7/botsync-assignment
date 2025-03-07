import RoommateDetails from "@/components/TabContent/RoommateDetails"
import { GoHome } from "react-icons/go"
import { HiOutlinePencilSquare } from "react-icons/hi2"

export const TabsData = [
  {
    id: 1,
    title: "personal details",
    description: "description",
    content: "content",
  },
  {
    id: 2,
    title: "application details",
    description: "description",
    content: "content",
  },
  {
    id: 3,
    title: "lease details",
    description: "description",
    content: "content",
  },
  {
    id: 4,
    title: "roommate details",
    description: `student's personal details`,
    content: RoommateDetails,
    fields: [
      {
        id: 1,
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "John",
        required: true,
      },
      {
        id: 2,
        name: "middleName",
        label: "Middle Initial",
        type: "text",
        placeholder: "N/A",
        required: false,
      },
      {
        id: 3,
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Doe",
        required: true,
      },
      {
        id: 4,
        name: "gender",
        label: "Gender",
        type: "text",
        placeholder: "Male",
        required: true,
      },
      {
        id: 5,
        name: "phone",
        label: "Phone Number",
        type: "text",
        placeholder: "Enter your phone number",
        required: true,
      },
      {
        id: 6,
        name: "email",
        label: "Email address",
        type: "text",
        placeholder: "Enter your email address",
        required: true,
      },
      {
        id: 7,
        name: "university",
        label: "University/College",
        type: "text",
        placeholder: "University",
        required: true,
      },
      {
        id: 8,
        name: "registrationNumber",
        label: "Registration number",
        type: "text",
        placeholder: "Enter your registration number",
        required: true,
      },
    ],
  },
  {
    id: 5,
    title: "document",
    description: "description",
    content: "content",
  },
  {
    id: 6,
    title: " guardian information",
    description: "description",
    content: "content",
  },
  {
    id: 7,
    title: "reject/approve",
    description: "description",
    content: "content",
  },
]

export const navLinks = [
  {
    id: 1,
    title: "home",
    icon: <GoHome size={24} />,
    url: "/",
  },
  {
    id: 2,
    title: "Application",
    icon: <HiOutlinePencilSquare size={24} />,
    url: "/application",
  },
]
