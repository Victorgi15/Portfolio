import {
  Activity,
  Bot,
  CircuitBoard,
  Cpu,
  Gauge,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Terminal,
  Wrench,
} from 'lucide-react';
import spotifyExporterImage from '../assets/spotify-exporter.png';
import homeLabImage from '../assets/home-lab.png';
import kvmUsbImageOne from '../assets/KVM-USB/84e3f49d-fa4d-469e-b265-dc47853d7fb7.jpg';
import kvmUsbImageTwo from '../assets/KVM-USB/9891ff18-b3bd-4a22-859f-67f4102fd98c.jpg';

export const navigation = {
  brand: 'Victor Gilliocq',
  cta: { label: 'Contact', href: '#contact' },
  links: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'method', label: 'Method' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'contact', label: 'Contact' },
  ],
};

export const hero = {
  kicker: 'Mechatronics engineer',
  headline: 'Integrating software, electronics, and mechanics into reliable robotic systems.',
  subheadline:
    'I design, build, and validate embedded and robotic platforms with a focus on system integration, testing, and field performance.',
  ctas: [
    { label: 'View projects', href: '#projects', variant: 'primary' },
    { label: 'Start a conversation', href: '#contact', variant: 'ghost' },
  ],
  quickFacts: [
    { label: 'Focus', value: 'Robotics and embedded systems' },
    { label: 'Stack', value: 'C/C++, Python, ROS 2, embedded Linux' },
    { label: 'Validation', value: 'HIL, test benches, field trials' },
  ],
  systemSnapshot: {
    title: 'Integration snapshot',
    status: 'System healthy',
    liveLabel: 'Live',
    logsLabel: 'Bench log',
    metrics: [
      { label: 'Control loop', value: '1 kHz' },
      { label: 'Latency', value: '3.6 ms' },
      { label: 'Uptime', value: '99.8%' },
    ],
    signals: [
      { label: 'Sensor bus', value: 'stable', level: 'ok' },
      { label: 'Drive chain', value: 'nominal', level: 'ok' },
      { label: 'Safety state', value: 'armed', level: 'warn' },
      { label: 'Telemetry', value: 'streaming', level: 'ok' },
    ],
    logs: [
      { time: '14:02:18', message: 'HIL scenario passed', level: 'ok' },
      { time: '14:03:01', message: 'IMU bias within limits', level: 'ok' },
      { time: '14:03:46', message: 'Thermal model update queued', level: 'warn' },
    ],
  },
};

export const about = {
  eyebrow: 'About',
  title: 'Systems integration with measurable validation.',
  description:
    'I bridge firmware, electronics, and mechanics to deliver robotic systems that survive outside the lab.',
  paragraphs: [
    'My work spans embedded firmware, control loops, sensor fusion, and hardware integration. I focus on clear interfaces and rigorous testing so prototypes can evolve into dependable products.',
    'I enjoy cross-disciplinary environments where architecture, manufacturing constraints, and software reliability all matter. I build test benches, document failure modes, and iterate quickly with real data.',
  ],
  highlightsTitle: 'What you get',
  highlights: [
    'End-to-end ownership from requirements to field validation.',
    'Practical engineering documentation and system handoff.',
    'Focus on safety, reliability, and maintainable interfaces.',
  ],
};

export const projects = {
  eyebrow: 'Projects',
  title: 'Selected mechatronics work.',
  description: 'Robotics, embedded control, and integration projects with measurable outcomes.',
  items: [
    {
      title: 'Spotify playlist exporter',
      summary: 'Python CLI tool that extracts track titles and artists from Spotify playlists into CSV and JSON.',
      stack: ['Python', 'Spotify API', 'CSV', 'JSON'],
      impact: ['One-command export workflow', 'Clean data structure for analysis or reuse'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/spotify-playlist-export' },
      image: spotifyExporterImage,
      imageAlt: 'Spotify playlist exporter UI preview',
    },
    {
      title: 'Home server with YAMS',
      summary:
        'Self-hosted Docker services orchestrated with YAMS, including Home Assistant and secure network access.',
      stack: ['Linux', 'Docker', 'YAMS', 'Home Assistant', 'DNS', 'DHCP', 'VPN'],
      impact: ['Dedicated DNS and VPN access', 'Hardened system services and maintenance workflows'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/Home-Server' },
      image: homeLabImage,
      imageAlt: 'Home lab server monitoring overview',
    },
    {
      title: 'DIY USB KVM switch',
      summary:
        'Mechanical enclosure, 3D-printed housing, and custom PCB to switch USB peripherals between a work laptop and personal PC with a single button.',
      images: [
        { src: kvmUsbImageOne, alt: 'USB KVM switch prototype photo 1' },
        { src: kvmUsbImageTwo, alt: 'USB KVM switch prototype photo 2' },
      ],
      stack: ['Mechanical design', '3D printing', 'PCB design', 'USB', 'CAD'],
      impact: ['One-button device switching', 'Compact, desk-ready assembly'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/usb-kvm-switch' },
    },
    {
      title: 'Autonomous mobile robot stack',
      summary: 'ROS 2 navigation with SLAM, sensor fusion, and mission control.',
      stack: ['ROS 2', 'C++', 'SLAM', 'Linux'],
      impact: ['Reduced localization drift by 30%', '15 Hz mapping and planning loop'],
      status: 'Prototype',
    },
    {
      title: 'Embedded motor control firmware',
      summary: 'Field-oriented control with CAN telemetry and safety interlocks.',
      stack: ['C', 'FOC', 'CAN', 'RTOS'],
      impact: ['Stable torque control under load', 'Integrated fault handling'],
      status: 'Deployed',
    },
    {
      title: 'HIL validation bench',
      summary: 'Hardware-in-the-loop rig for servo drive and sensor validation.',
      stack: ['Python', 'DAQ', 'LabVIEW', 'Test rigs'],
      impact: ['Cut regression time by 40%', 'Automated edge-case scenarios'],
      status: 'In use',
    },
    {
      title: 'Vision-guided pick and place',
      summary: 'Camera pipeline with calibration and motion synchronization.',
      stack: ['OpenCV', 'ROS 2', 'Kinematics'],
      impact: ['Repeatability within 0.6 mm', 'Cycle time under 2.8 s'],
      status: 'Pilot',
    },
    {
      title: 'Battery management prototype',
      summary: 'Telemetry, balancing, and thermal safeguards for mobile platforms.',
      stack: ['Embedded C', 'CAN', 'Thermal modeling'],
      impact: ['Improved runtime consistency', 'Safe shutdown sequencing'],
      status: 'Prototype',
    },
    {
      title: 'Robotic end-effector design',
      summary: 'Mechanical integration with sensor routing and stress analysis.',
      stack: ['CAD', 'FEA', 'Manufacturing'],
      impact: ['Weight reduced by 18%', 'Simplified maintenance access'],
      status: 'Delivered',
    },
  ],
};

export const method = {
  eyebrow: 'Method',
  title: 'A structured loop for complex systems.',
  description: 'A repeatable approach that de-risks integration and speeds iteration.',
  outputsLabel: 'Outputs',
  steps: [
    {
      title: 'Frame the system',
      summary: 'Translate requirements into architecture, interfaces, and constraints.',
      outputs: ['System map', 'Risk register', 'Integration plan'],
    },
    {
      title: 'Prototype and instrument',
      summary: 'Build fast, add telemetry, and make assumptions visible.',
      outputs: ['Bench prototype', 'Telemetry spec', 'Failure modes'],
    },
    {
      title: 'Validate and iterate',
      summary: 'Run HIL and field tests, close gaps, and harden the design.',
      outputs: ['Test reports', 'Release candidate', 'Handoff docs'],
    },
  ],
};

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

export const highlights = {
  eyebrow: 'Highlights',
  title: 'Outcomes that improve reliability and speed.',
  description: 'Focused on performance, safety, and repeatable validation.',
  metrics: [
    { label: 'Prototype cycles', value: '8+', detail: 'Robotics and automation builds' },
    { label: 'Regression time', value: '-40%', detail: 'Automated test pipelines' },
    { label: 'Field uptime', value: '99%', detail: 'After stabilization and fixes' },
    { label: 'Integration latency', value: '<4 ms', detail: 'Real-time control loops' },
  ],
  highlights: [
    {
      title: 'Integration audits',
      detail: 'Interface reviews and wiring documentation to reduce bench time.',
      icon: GitBranch,
    },
    {
      title: 'Diagnostics telemetry',
      detail: 'Unified logs for firmware, ROS nodes, and test instrumentation.',
      icon: Terminal,
    },
    {
      title: 'Predictive monitoring',
      detail: 'Health signals to anticipate failures before deployment.',
      icon: Activity,
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
