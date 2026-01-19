import {
  Activity,
  Bot,
  CircuitBoard,
  Cpu,
  Gauge,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import spotifyExporterImage from '../assets/spotify-exporter/spotify-exporter.png';
import homeLabImage from '../assets/home-lab/home-lab.png';
import kvmUsbImageOne from '../assets/KVM-USB/84e3f49d-fa4d-469e-b265-dc47853d7fb7.jpg';
import kvmUsbImageTwo from '../assets/KVM-USB/9891ff18-b3bd-4a22-859f-67f4102fd98c.jpg';
import cocktailRobotImage from '../assets/robot-cocktails/robot-cocktails-01.jpg';
import easymileWebsiteImage from '../assets/Easymile-website/Home-screenshot.png';
import veloToulouseImage from '../assets/velo-toulouse/velo-toulouse.png';
import easyBattleshipsImage from '../assets/easy-battleships/easy-battleships.png';
import mosquitoTrapImage from '../assets/piege-moustiques/piege-moustique.png';
import mosquitoTrapImageTwo from '../assets/piege-moustiques/piege-moustique2.jpg';
import mosquitoTrapImageThree from '../assets/piege-moustiques/piege-moustique3.jpg';
import geoguessSergeImageOne from '../assets/GeoguessSerge/GeoguessSerge1.png';
import geoguessSergeImageTwo from '../assets/GeoguessSerge/GeoguessSerge2.png';
import dotAndBoxesImage from '../assets/dot-and-boxes/dot-and-boxes.png';
import ragPocImage from '../assets/RAG/rag.png';
import jumpEvolutionVideo from '../assets/simu/triad.mp4';
import projectsData from './projects.json';
import methodData from './method.json';
import heroData from './hero.json';
import currentProjectData from './currentProject.json';

const projectMedia = {
  dotAndBoxesImage,
  jumpEvolutionVideo,
  ragPocImage,
  kvmUsbImageOne,
  kvmUsbImageTwo,
  mosquitoTrapImage,
  mosquitoTrapImageTwo,
  mosquitoTrapImageThree,
  cocktailRobotImage,
  homeLabImage,
  easyBattleshipsImage,
  easymileWebsiteImage,
  veloToulouseImage,
  geoguessSergeImageOne,
  geoguessSergeImageTwo,
  spotifyExporterImage,
};

const heroIcons = {
  Activity,
  CircuitBoard,
  Cpu,
};

const mapHeroToolboxItem = (item) => ({
  ...item,
  icon: heroIcons[item.icon] ?? item.icon,
});

const mapProjectItem = (item) => {
  const mapped = { ...item };

  if (item.image) {
    mapped.image = projectMedia[item.image] ?? item.image;
  }

  if (item.video) {
    mapped.video = projectMedia[item.video] ?? item.video;
  }

  if (item.images) {
    mapped.images = item.images.map((image) => ({
      ...image,
      src: projectMedia[image.src] ?? image.src,
    }));
  }

  return mapped;
};

export const navigation = {
  brand: 'Victor Gilliocq',
  cta: { label: 'Contact', href: '#contact' },
  links: [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'method', label: 'Method' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' },
  ],
};

export const hero = {
  ...heroData,
  toolbox: heroData.toolbox.map(mapHeroToolboxItem),
  systemSnapshot: currentProjectData,
};

export const about = {
  eyebrow: 'About',
  title: 'Swiss-army mechatronics with a taste for the real world.',
  description:
    'I design, build, and debug full systems - and I can explain why the plan moved by a week.',
  paragraphs: [
    'I mix mechanical design, electronics, and software to get prototypes out of slides and onto the bench. If it moves, blinks, or prints in 3D, I am interested.',
    'I am usually the one who reads the documentation when things stop working, then turns the fix into a repeatable process. I also enjoy planning and aligning stakeholders when the timeline needs a realistic reset.',
  ],
  highlightsTitle: 'What you get',
  highlights: [
    'A full-stack builder across mechanics, electronics, and code.',
    'Field-first mindset with practical testing and documentation.',
    'Engineering + management perspective on scope, risks, and timelines.',
  ],
};

export const projects = {
  ...projectsData,
  items: projectsData.items.map(mapProjectItem),
};

export const method = methodData;

export const skills = {
  eyebrow: 'Capabilities',
  title: 'Cross-domain engineering expertise.',
  description: 'From embedded control to mechanical integration and validation.',
  categories: [
    {
      title: 'Embedded and control',
      icon: Cpu,
      items: ['C/C++', 'RTOS', 'Motor control', 'Sensor fusion', 'Safety systems'],
    },
    {
      title: 'Robotics software',
      icon: Bot,
      items: ['ROS 2', 'Navigation', 'Kinematics', 'Computer vision', 'Simulation'],
    },
    {
      title: 'Electronics and hardware',
      icon: CircuitBoard,
      items: ['PCB bring-up', 'Signal integrity', 'Power systems', 'CAN and UART', 'EMC basics'],
    },
    {
      title: 'Mechanical integration',
      icon: Wrench,
      items: ['CAD', 'Tolerance stacks', 'Thermal design', 'Manufacturing handoff'],
    },
    {
      title: 'Validation and test',
      icon: ShieldCheck,
      items: ['HIL rigs', 'Test automation', 'Reliability metrics', 'Field trials'],
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  title: "Let's build reliable systems together.",
  description:
    'Open to robotics, automation, or embedded systems projects that need tight integration and testing.',
  directLabel: 'Direct',
  socialLabel: 'Social',
  email: 'victor@your-domain.com',
  location: 'France / EU',
  availability: 'Freelance or full-time collaborations',
  ctas: [
    { label: 'Email me', href: 'mailto:victor@your-domain.com', variant: 'primary' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', variant: 'ghost' },
  ],
  socials: [
    { label: 'Email', href: 'mailto:victor@your-domain.com', icon: Mail },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/your-handle', icon: Github },
  ],
  meta: [
    { label: 'Location', value: 'France / EU', icon: MapPin },
    { label: 'Focus', value: 'Robotics, embedded, integration', icon: Gauge },
  ],
};

export const footer = {
  note: 'Built for engineering teams that value reliable systems and clear validation.',
};
