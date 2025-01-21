import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    title: "B.Tech in Electronics and Communication",
    institution: "SRKR Engineering College, Bhimavaram",
    period: "2021 - 2025",
    description: "Currently pursuing B.Tech in Electronics and Communication Engineering"
  },
  {
    title: "Intermediate Education",
    institution: "Narayana Junior College",
    period: "2019 - 2021",
    description: "Completed intermediate education with focus on Mathematics and Sciences"
  },
  {
    title: "Secondary Education",
    institution: "Narayana High School",
    period: "2018 - 2019",
    description: "Completed secondary education with distinction"
  }
];

const experience = [

  {
    title: "Cybersecurity Virtual Trainee",
    company: "AICTE (All India Council for Technical Education)",
    period: "October 2024 – December 2024",
    description: [
      "Gained knowledge in cloud security, covering cloud architecture, risk management, and security protocols for protecting cloud environments..",
      "Beacon Security Operation Fundamentals:Learned security operations, including incident detection, response strategies, and using security monitoring tools to maintain a secure environment.",
      "Learned security operations, including incident detection, response strategies, and using security monitoring tools to maintain a secure environment.",
      "Studied the core principles of cybersecurity, including risk management, threat analysis, encryption, and strategies to safeguard information systems.."
    ]
  },
  {
    title: "Cyber Security Analyst and Ethical Hacker",
    company: "Coincent AI",
    period: "August 2024 - October 2024",
    description: [
      "Conducted vulnerability assessments and penetration testing",
      "Implemented security measures and protocols",
      "Performed ethical hacking exercises and security audits",
      "Developed and maintained security documentation",
      "Collaborated with team members to enhance system security"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Blackbucks",
    period: "June 2024 - August 2024",
    description: [
      "Developed full-stack web applications using modern technologies",
      "Implemented responsive designs and user interfaces",
      "Collaborated with design team for optimal user experience",
      "Integrated APIs and managed database operations",
      "Participated in code reviews and system architecture discussions"
    ]
  },
  {
    title: "Java Developer",
    company: "Henotic IT Solutions PVT. LTD",
    period: "July 2023 - August 2023",
    description: [
      "Developed Java-based applications and services",
      "Implemented backend APIs and database integrations",
      "Worked on performance optimization and bug fixes",
      "Collaborated with senior developers on project architecture",
      "Participated in daily stand-ups and sprint planning"
    ]
  }
];

export default function Timeline() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Education & Experience</h2>
        
        <h3 className="text-2xl font-bold mb-8">Education</h3>
        <VerticalTimeline>
          {education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              date={item.period}
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<GraduationCap />}
              contentStyle={{ 
                background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '12px'
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2 text-blue-600">{item.institution}</h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <h3 className="text-2xl font-bold mb-8 mt-16">Experience</h3>
        <VerticalTimeline>
          {experience.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.period}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Briefcase />}
              contentStyle={{ 
                background: 'linear-gradient(145deg, #ffffff, #f3f4f6)',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '12px'
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2 text-blue-600">{item.company}</h4>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}