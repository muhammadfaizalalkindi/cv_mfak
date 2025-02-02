import { Icons } from "@/components/icons";
import { HomeIcon} from "lucide-react";

export const DATA = {
  name: "Faizal",
  initials: "MFAK",
  url: "https://dillion.io",
  location: "Lampung Tengah, Lampung",
  locationLink: "https://maps.app.goo.gl/BiUyPgdvRQm2LD7r6",
  description:
    "Computer Engineering Students at Semarang State University",
  summary:
    "I am a Computer Engineering student at Semarang State University with a focus on software development and data analysis. Have an understanding in several programming languages, including Python, Java, and SQL. I am results-oriented, analytical, and have the ability to work effectively in cross-disciplinary teams as well as independently. With a passion for continuous learning and adapting to the latest technological developments, I am currently seeking internship opportunities that will allow me to apply my technical skills and contribute to the development of innovations in the technology industry.",
  avatarUrl: "/me2.png",
  skills: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Blogger",
    "SQL",
    "Python",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "kindifaizal@students.unnes.ac.id",
    tel: "085161593480",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/muhammadfaizalalkindi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammadfaizalalkindi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      WhatsApp: {
        name: "X",
        url: "https://x.com/faizal_alkindi",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@AlKindi28",
        icon: Icons.youtube,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/faizal.alkindi/",
        icon: Icons.instagram,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Keluarga Mahasiswa Pelajar Lampung (KAMAPALA) Semarang",
      href: "https://www.instagram.com/kamapalasmg/",
      badges: [],
      location: "Semarang, Jawa Tengah",
      title: "Logistics Division Coordinator at KAMAPALA Semarang 2023 Cultural Performance",
      logoUrl: "/kmplsmg.png",
      start: "Apr 2023",
      end: "Jul 2023",
      description:(
        <>
          1. Responsible for providing and managing equipment and logistics for activities.
          <br />
          2. Prepare budgets according to activity needs.
          <br />
          3. Coordinate with other divisions to record equipment and logistics needs.
        </>
      ),    
    },
    {
      company: "Engineering English Club (E2C) UNNES",
      badges: [],
      href: "https://linktr.ee/e2cftunnes?fbclid=PAZXh0bgNhZW0CMTEAAaZRo1rgAeEYu18sSbmnWGhUWet8l3xxEzHyLTxLnwCxRsTwyxXJBmHoEfc_aem_vJpDWwbvj5rknCqzn3a47w",
      location: "Semarang, Jawa Tengah",
      title: "Member of Sponsorship Division at E2C Gets Talent 2023",
      logoUrl: "/e2c.png",
      start: "Sep 2023",
      end: "Des 2023",
      description:(
        <>
          1. Create and submit sponsorship proposals to certain parties.
          <br />
          2. Follow up on funds and business both before and after the event.
          <br />
          3. Make interpretations and understand the ins and outs of the form of agreement and master all parts of the proposal.
        </>
      ),
    },
    {
      company: "Badan Pusat Statistik Kabupaten Lampung Tengah",
      href: "https://lampungtengahkab.bps.go.id/id",
      badges: [],
      location: "Lampung Tengah, lampung",
      title: "Data Entry Officer",
      logoUrl: "/bps.png",
      start: "Agu 2023",
      end: "Sep 2023",
      description:(
        <>
          1. In charge of entering and validating the 2023 Census of Agriculture field data documents in the data entry program.
          <br />
          2. Successfully achieved the target of entering and validating 800 field data documents. In the 2023 Census of Agriculture data entry program.
        </>
      ),
    },
  ],
  education: [
    {
      school: "Universitas Negeri Semarang",
      href: "https://unnes.ac.id/",
      degree: "Bachelor's Degree of Computer Engineering (S.T.)",
      logoUrl: "/unnes.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "SMK Negeri 2 Terbanggi Besar",
      href: "https://www.smkn2terbanggibesar.sch.id/",
      degree: "Software Engineering",
      logoUrl: "/smk.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "To-Do-List MVC",
      href: "",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "In this Object-Oriented Programming final project, I developed a To-Do List information system application using the Java programming language with the concept of GUI (Graphical User Interface) and implementing MVC (Model View Controller) Design.",
      technologies: [
        "Java",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/muhammadfaizalalkindi/To-Do-List-MVC",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mvc.png",
      video: "",
    },
    { 
      title: "Peduli Diri",
      href: "",
      dates: "February 2022 - March 2022",
      active: true,
      description:
        "During the Vocational Competency Test at SMK Negeri 2 Terbanggi Besar, I developed a web-based application utilizing a Bootstrap template, incorporating a login system, registration, and a password recovery feature.",
      technologies: [
        "HTML",
        "CSS",
        "SCSS",
        "JavaScript",
        "PHP",
        "Hack",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/muhammadfaizalalkindi/Peduli_Diri",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Company Profile",
      href: "https://first-company-profile.vercel.app/",
      dates: "June 2021 - July 2021",
      active: true,
      description:
        "For my final project at LPK Creative Metro, I developed a simple company profile website using HTML and CSS. The website is designed to provide essential information about the company, including the services offered, portfolio, and contact information.",
      technologies: [
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://first-company-profile.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/muhammadfaizalalkindi/First-Company-profile",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/web1.png",
      video: "",
    },
  ],
  Organizations: [
    {
      title: "Keluarga Mahasiswa Pelajar Lampung (KAMAPALA) Semarang",
      dates: "December 2023 - Present",
      location: "Head of Sports Division",
      description:
        "Kamapala Sports Division is a platform for Kamapala members to develop their sporting talents, both conventionally and in the world of e-sports. The division provides various competitions and training to improve members' skills, as well as opportunities to join wider competitions.",
      image:
        "/kmplsmg.png",
      links: [
        {
          title: "Instagram",
          icon: <Icons.instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/kamapalasmg/",
        },
      ],
    },
    {
      title: "Engineering English Club (E2C) FT UNNES",
      dates: "April 2023 - February 2024",
      location: "Staff Media Communication and Information",
      description:
        "Manage all content, including audio, visual, and audiovisual needs as well as editing and publishing processes.",
      image:
        "/e2c.png",
      links: [
        {
          title: "Instagram",
          icon: <Icons.instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/e2c_ftunnes/",
        },
      ],
    },
    {
      title: "Unit Kegiatan Kerohanian Islam (UKKI) UNNES",
      dates: "July 2022 - March 2023",
      location: "Staff Creative Economy",
      description: (
        <>
          1. Tasked with developing and promoting creative economic business activities that can prosper the economy of members.
          <br />
          2. Assist in organizing study programs to guide and motivate members in overcoming business problems faced.
        </>
      ),
      image: "/ukki.png",
      links: [
        {
          title: "Instagram",
          icon: <Icons.instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/ukki_unnes/",
        },
      ],
    },    
    {
      title: "Pasukan Khusus Pengibar Bendera Sekolah (PASKUBASE) SMK Negeri 2 Terbanggi Besar",
      dates: "October 2020 - June 2021",
      location: "Head of Organizational Division",
      description:
        "Organizing/coordinating all activities related to issues outside the technical field, such as equipment, research and development, dealing with outside parties, and recording all organizational activities.",
      image:
        "/pbs.png",
      links: [
        {
          title: "Instagram",
          icon: <Icons.instagram className="h-4 w-4" />,
          href: "https://www.instagram.com/paskibra_smkn2terbanggibesar/",
        },
      ],
    },
  ],
} as const;
