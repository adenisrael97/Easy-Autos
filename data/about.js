import {
  FaCalendarAlt,
  FaUsers,
  FaSmile,
  FaGlobe,
  FaHandshake,
  FaRegLightbulb,
  FaBalanceScale,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// ─── Landing-page About section ─────────────────────────────────────────────

export const aboutFeatures = [
  "Trusted by thousands of customers since 2009",
  "Award-winning customer service team",
  "100% transparent pricing & financing",
  "Comprehensive after-sales support & warranty",
];

export const landingMilestones = [
  { year: "2009", event: "Easy Autos founded in Lagos" },
  { year: "2015", event: "Expanded to 3 showroom locations" },
  { year: "2020", event: "Launched online vehicle marketplace" },
  { year: "2024", event: "3,500+ vehicles sold milestone" },
];

export const missionCards = [
  {
    title: "Our Mission",
    desc: "To deliver premium vehicles and exceptional service, making your car buying journey seamless and enjoyable.",
    accent: true,
  },
  {
    title: "Our Vision",
    desc: "To be the most trusted and innovative auto dealership, setting the gold standard for excellence in the industry.",
    accent: false,
  },
  {
    title: "Our Values",
    desc: "Integrity, customer focus, and continuous improvement drive everything we do at Easy Autos.",
    accent: false,
  },
  {
    title: "Our Promise",
    desc: "We stand by every vehicle we sell, ensuring quality, safety, and complete satisfaction for every customer.",
    accent: true,
  },
];

// ─── About page: Hero section ────────────────────────────────────────────────

export const aboutPageStats = [
  { icon: FaCalendarAlt, label: "Years in Business", value: "10+" },
  { icon: FaUsers, label: "Happy Clients", value: "5,000+" },
  { icon: FaSmile, label: "Satisfaction Rate", value: "98%" },
  { icon: FaGlobe, label: "Countries Served", value: "50+" },
];

export const aboutStoryCards = [
  {
    title: "Our Story",
    desc: "Easy Autos was founded with a vision to transform the automotive experience. What began as a small team of passionate car enthusiasts has grown into a trusted name, known for integrity, innovation, and a relentless commitment to our clients.",
  },
  {
    title: "Driven By Excellence",
    desc: "Our journey is defined by our pursuit of excellence in every aspect of our business. We believe in building lasting relationships, delivering exceptional service, and exceeding expectations at every turn.",
  },
  {
    title: "Our Growth",
    desc: "From our humble beginnings to serving clients in over 50 countries, our story is one of growth, dedication, and a passion for making a difference. We are proud of our achievements and grateful for the trust our clients place in us every day.",
  },
];

// ─── About page: Values & Journey ────────────────────────────────────────────

export const companyValues = [
  {
    icon: FaHandshake,
    title: "Trust",
    desc: "We build lasting relationships through honesty, transparency, and reliability in all our dealings.",
  },
  {
    icon: FaRegLightbulb,
    title: "Innovation",
    desc: "We embrace creativity and forward-thinking solutions to continually improve our services and your experience.",
  },
  {
    icon: FaBalanceScale,
    title: "Fairness",
    desc: "We treat everyone with respect and ensure every client receives equitable and just service.",
  },
  {
    icon: FaUsers,
    title: "Community",
    desc: "We foster a sense of belonging and give back to the communities that support us, making a positive impact together.",
  },
];

export const companyMilestones = [
  { step: "01", year: "2012", title: "Founded", desc: "Started with a vision to redefine car buying with integrity and transparency." },
  { step: "02", year: "2015", title: "Growth", desc: "Expanded our team and services, focusing on reliability and customer satisfaction." },
  { step: "03", year: "2018", title: "Innovation", desc: "Embraced new technologies to enhance the client experience and streamline operations." },
  { step: "04", year: "2024", title: "Community", desc: "Built strong relationships and gave back to the community, making a positive impact." },
];

// ─── About page: Team ────────────────────────────────────────────────────────

export const teamMembers = [
  { name: "Sophia Williams", role: "CEO", desc: "Visionary leader, shaping our strategy and culture.", socials: [FaInstagram, FaLinkedinIn] },
  { name: "James Lee", role: "Head of Sales", desc: "Connecting clients with their dream cars.", socials: [FaInstagram, FaLinkedinIn] },
  { name: "Priya Patel", role: "Marketing Director", desc: "Crafting our brand and outreach.", socials: [FaInstagram, FaLinkedinIn] },
  { name: "Michael Chen", role: "Lead Technician", desc: "Ensuring every vehicle meets our high standards.", socials: [FaInstagram, FaLinkedinIn] },
  { name: "Emily Johnson", role: "Customer Relations", desc: "Delivering exceptional service and support.", socials: [FaInstagram, FaLinkedinIn] },
  { name: "David Brown", role: "Finance Manager", desc: "Helping clients find the best financial solutions.", socials: [FaInstagram, FaLinkedinIn] },
];
