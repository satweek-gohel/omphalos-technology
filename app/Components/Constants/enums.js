import { FaLaptopCode } from "react-icons/fa";
import { IoIosCloudUpload } from "react-icons/io";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

export const processSteps = [
    { number: '01', title: 'Our impact', description: 'We enable our clients and society to move confidently into the digital future by embracing sustainability, diversity, equity and inclusion.', imageUrl: '/counting.png' },
    { number: '02', title: 'Our values', description: 'Clients first: we strive to deliver outstanding outcomes as our clients’ trusted partner. Foresight: our excellence in innovation means we’re always thinking ahead, solving problems and helping our clients to transform their business for future success. Teamwork: bringing together a diverse group of individuals allows us to achieve extraordinary results that go far beyond what can be achieved by any one person.', imageUrl: '/video-call.png' },
    { number: '03', title: 'Sustainability', description: 'We are on a mission to create technology for good. As part of that mission, we recognize the importance of embedding sustainability into the fabric of our company, while continuing to use technology to create a more affluent and harmonious society. We want to lead by example and continue improving performance to be certain of reaching our net-zero goals.', imageUrl: '/strategy.png' },
    { number: '04', title: 'Diversity, Equity & Inclusion', description: 'It is our belief that an inclusive culture uplifts and empowers individuals, helping to inspire innovation and creativity to its maximum. We place great importance on values of trust and safety and encourage our people to feel a sense of belonging. Together, we are one team, at Cuentista Tech.', imageUrl: '/support.png' },
  ];

export  const carouselImages = [
    {id:1, src: '/cs1.jpg', title: 'IT Consultancy', description: '- Technology' },
    {id:2, src: '/cs2.jpg', title: 'Analysis Of Security', description: '- Technology' },
    {id:3, src: '/cs3.jpg', title: 'Social Media App', description: '- Technology' },
    {id:4, src: '/cs4.jpg', title: 'Cyber Security', description: '- Technology' },
  ];
  
 export const statsData = [
    { id:1,label: "Happy Clients", value: 92 },
    { id:2,label: "Finished Projects", value: 1200 },
    { id:3,label: "Skilled Experts", value: 55 },
   
  ];

  export const faqs = [
    {
      question: 'How can I contact support?',
      answer: 'You can contact support via email, chat, or phone through our support page.',
    },
    {
      question: 'What is the refund policy?',
      answer: 'We offer a full refund within 30 days of purchase if you are unsatisfied with the service.',
    },
    {
      question: 'Do you provide 24/7 customer support?',
      answer: 'Yes, we provide round-the-clock support for all our services.',
    },
  ];

  export const teamMembers = [
    {
      id: 1,
      name: 'Rishit Dubey',
      role: 'CEO/Co-Founder',
      imageUrl: 'https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 2,
      name: 'Shraddha Mishra',
      role: 'CCO/ Co-Founder',
      imageUrl: 'https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 3,
      name: 'Suchita Dubey',
      role: 'Director',
      imageUrl: 'https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 4,
      name: 'Manuraj Dubey',
      role: 'Director',
      imageUrl: 'https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 5,
      name: 'Nilesh Solanki',
      role: 'CIO',
      imageUrl: 'https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 6,
      name: 'Charisma Megayana',
      role: 'Head of Marketing',
      imageUrl: 'https://www.shutterstock.com/image-vector/person-gray-photo-placeholder-woman-600nw-1241538838.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];
  

 export const newsData = [
    {
      title: "Additions in conveying or collected objection",
      publishedAt: "2020-08-12T00:00:00Z",
      author: "John Botha",
      urlToImage: "/news1.jpg", 
    },
    {
      title: "Discourse ye continued pronounce we abilities",
      publishedAt: "2020-10-05T00:00:00Z",
      author: "Jork Mon",
      urlToImage: "/news2.jpg",
    },
    {
      title: "Children greatest online extended delicate of",
      publishedAt: "2020-12-27T00:00:00Z",
      author: "Spark Lee",
      urlToImage: "/news3.jpg", 
    },
  ];


 export const services = [
    {
      id: 1,
      icon: <FaLaptopCode  />,
      title: "AI Development & Consulting",
      description: "Leverage our expertise to develop and integrate cutting-edge AI solutions tailored to your business needs.",
    },
    {
      id: 2,
      icon: <MdOutlineSecurity  />,
      title: "Digital Literacy Training",
      description: "Boost your team’s digital skills through our comprehensive digital literacy training programs.",
    },
    {
      id: 3,
      icon: <IoIosCloudUpload  />,
      title: "IT Consultancy",
      description: "Our expert IT consultants provide strategic advice and solutions to streamline your IT infrastructure and operations.",
    },
    {
      id: 4,
      icon: <LuDatabaseBackup  />,
      title: "Project Management",
      description: "Our team will help you streamline project management, ensuring your projects are delivered on time and within budget.",
    },
    {
      id: 5,
      icon: <FaLaptopCode  />,
      title: "Microsoft Technology",
      description: "We offer comprehensive Microsoft technology services, helping you maximize the potential of Microsoft tools for your business.",
    },
    {
      id: 6,
      icon: <MdOutlineSecurity  />,
      title: "Smart Data Solutions",
      description: "Our experts will transform your data into actionable insights, driving smarter business decisions.",
    },
    {
      id: 7,
      icon: <IoIosCloudUpload  />,
      title: "Software Development",
      description: "We develop custom software solutions that meet your business’s unique needs, from concept to deployment.",
    },
    {
      id: 8,
      icon: <LuDatabaseBackup  />,
      title: "Web Development",
      description: "Our web development experts will help you build feature-rich, responsive websites tailored to your business needs.",
    },
    {
      id: 9,
      icon: <IoIosCloudUpload  />,
      title: "Training & Digital Literacy",
      description: "We provide tailored training programs to upskill your workforce in various digital tools and platforms.",
    }
  ];