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
import spotifyExporterImage from '../assets/spotify-exporter/spotify-exporter.png';
import homeLabImage from '../assets/home-lab/home-lab.png';
import kvmUsbImageOne from '../assets/KVM-USB/84e3f49d-fa4d-469e-b265-dc47853d7fb7.jpg';
import kvmUsbImageTwo from '../assets/KVM-USB/9891ff18-b3bd-4a22-859f-67f4102fd98c.jpg';
import cocktailRobotImage from '../assets/robot-cocktails/robot-cocktails-01.jpg';
import easymileWebsiteImage from '../assets/Easymile-website/Home-screenshot.png';
import veloToulouseImage from '../assets/velo-toulouse/velo-toulouse.png';
import easyBattleshipsImage from '../assets/easy-battleships/easy-battleships.png';

export const navigation = {
  brand: 'Victor Gilliocq',
  cta: { label: 'Contact', href: '#contact' },
  links: [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'method', label: 'Method' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'contact', label: 'Contact' },
  ],
};

export const hero = {
  kicker: 'Mechatronics engineer',
  headline: 'I build machines that move, blink, and behave (most days).',
  subheadline:
    'Mechanical design, electronics, and code under one roof - plus the troubleshooting when "it worked yesterday".',
  ctas: [
    { label: 'View projects', href: '#projects', variant: 'primary' },
    { label: 'Start a conversation', href: '#contact', variant: 'ghost' },
  ],
  quickFacts: [
    { label: 'Focus', value: 'Robotics and embedded systems' },
    { label: 'Stack', value: 'Python, ROS, embedded Linux, JS/React' },
    { label: 'Mechanics', value: 'CAD design, assemblies, mesh, 3D printing' },
  ],
  toolbox: [
    { label: 'Electronics', detail: 'PCBs, sensors, power control', icon: CircuitBoard },
    { label: 'Tooling', detail: 'Git, VS Code, Jira, Docker', icon: Cpu },
    {
      label: 'Bias',
      detail: 'Unconditional love for stats, graphs, and numbers',
      icon: Activity,
    },
  ],
  systemSnapshot: {
    title: 'Current project',
    status: 'Tracking progress with real-world tinkering.',
    liveLabel: 'Live',
    barsStatus: 'Downloading...',
    barsStyle: 'shine',
    bars: [
      { label: 'Useless projects', detail: '78%', value: 78, tone: 'ok' },
      { label: 'Mystery bug', detail: '42%', value: 42, tone: 'warn' },
      { label: '3D print queue', detail: '2 parts', value: 28, tone: 'ok' },
      { label: 'Tea reserves', detail: '61%', value: 61, tone: 'ok' },
      { label: 'Schedule realism', detail: '+1 week', value: 34, tone: 'warn' },
    ],
  },
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
      title: 'EasyMile website sprint (24h)',
      summary:
        '24-hour rebuild of the EasyMile website with a focus on fast delivery and clean structure, deployed at easymile-website.victorgilliocq.com.',
      image: easymileWebsiteImage,
      imageAlt: 'EasyMile website homepage',
      stack: ['TypeScript', 'Web', 'Hosting'],
      impact: ['24-hour delivery', 'Live hosted deployment'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/easymile_website' },
      site: { label: 'Live site', href: 'https://easymile-website.victorgilliocq.com/' },
    },
    {
      title: 'Toulouse bike availability tracker',
      summary:
        "Couldn't find a VeloToulouse bike nearby, so I built a tracker that analyzes availability across city stations.",
      image: veloToulouseImage,
      imageAlt: 'VeloToulouse availability tracker interface',
      stack: ['Data', 'APIs', 'Mapping'],
      impact: ['Citywide station visibility', 'Quick availability checks'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/Volo-Toulouse-tracker' },
    },
    {
      title: 'GeoGuessSerge',
      summary:
        'Map-based guessing game to find where Serge was on a given date. Closer guesses score higher points.',
      stack: ['JavaScript', 'HTML', 'CSS'],
      impact: ['Live game', 'Score by distance'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/GeoguesSerge' },
      site: { label: 'Live site', href: 'https://geoguessserge.victorgilliocq.com/' },
    },
    {
      title: 'EasyMile battleships',
      summary:
        'Battleship-style game inspired by EasyMile lore, with a Python backend and peer-to-peer web gameplay.',
      image: easyBattleshipsImage,
      imageAlt: 'EasyMile battleships game screenshot',
      stack: ['Python', 'JavaScript', 'CSS', 'Web', 'P2P'],
      impact: ['No database required', 'Live multiplayer matchups'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/bataille-navale' },
      site: { label: 'Live site', href: 'https://easy-battleships.victorgilliocq.com/' },
    },
    {
      title: 'Cocktail robot',
      summary:
        'Automated cocktail-making robot combining mechanical design, custom electronics, motor control, and sensor-driven dosing with an Android companion app.',
      image: cocktailRobotImage,
      imageAlt: 'Cocktail robot prototype',
      stack: [
        'Mechanical design',
        'Electronics',
        'Power control',
        'Sensors',
        'Arduino',
        'Motors',
        'Android',
      ],
      impact: ['Repeatable dispensing', 'Integrated mobile control'],
      status: 'Prototype',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/robot-cocktails.git' },
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
import dotAndBoxesImage from '../assets/dot-and-boxes/dot-and-boxes.png';
    {
      title: 'Dots and Boxes bots',
      summary:
        'Dots and Boxes playground built to compare bot strategies, from API-driven AI to MCTS, AlphaZero-style self-play, and neural networks.',
      image: dotAndBoxesImage,
      imageAlt: 'Dots and Boxes game interface',
      stack: ['Python', 'JavaScript', 'Game AI', 'MCTS', 'Neural networks'],
      impact: ['Comparative bot benchmarks', 'Live playable demo'],
      status: 'Open source',
      link: { label: 'GitHub', href: 'https://github.com/Victorgi15/Dots_and_box/tree/master' },
      site: { label: 'Live site', href: 'https://dots-and-boxes.victorgilliocq.com/' },
    },
