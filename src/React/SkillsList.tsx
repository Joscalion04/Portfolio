import { useState } from "react";

const categories = [
  {
    id: "secops",
    label: "SecOps",
    color: "purple" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 1L3 5v6c0 5.55 4.24 10.74 9 12 4.76-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.12z"/>
      </svg>
    ),
    desc: "Design and operation of security programs — real-time monitoring, threat hunting, and incident response at scale.",
    skills: [
      "CrowdStrike Falcon SIEM", "Splunk & Splunk SOAR", "Wazuh", "Elastic SIEM",
      "Microsoft Sentinel", "FortiSIEM", "Threat Hunting", "Incident Response",
      "Digital Forensics", "SIEM Use Case Dev", "Playbook Automation", "SOC Operations",
      "Threat Intelligence", "Security Event Correlation", "MTTR Reduction",
    ],
  },
  {
    id: "vpm",
    label: "VPM",
    color: "purple" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
      </svg>
    ),
    desc: "End-to-end vulnerability lifecycle — risk-based prioritization, patch cycles, and compliance governance across heterogeneous environments.",
    skills: [
      "CrowdStrike Exposure Mgmt", "Nessus", "OpenVAS / Greenbone", "CVSS v3/v4",
      "Risk-Based Prioritization", "Windows Hardening", "Linux Hardening", "Ubuntu / Debian / SUSE",
      "ISO/IEC 27001", "NIST SP 800", "PCI DSS", "Patch Cycle Automation",
      "Post-Remediation Validation", "Asset Criticality Mapping", "Impact Analysis",
    ],
  },
  {
    id: "pentest",
    label: "Pentesting",
    color: "red" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
    desc: "Authorized offensive assessments — web, API, network, and AD. Active bug bounty researcher on HackerOne.",
    skills: [
      "Web App Pentesting", "API Security Testing", "Network Pentesting", "Active Directory Attacks",
      "Burp Suite", "Metasploit", "Nmap", "SQLmap", "BloodHound", "CrackMapExec",
      "Responder", "Impacket", "Gobuster", "Nikto", "Hydra", "Hashcat",
      "OWASP Top 10", "MITRE ATT&CK", "CVE Research", "PoC Development",
    ],
  },
  {
    id: "osint",
    label: "OSINT",
    color: "red" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/>
      </svg>
    ),
    desc: "Open source and dark intelligence — digital footprint mapping, adversary profiling, and Tor-based threat investigations.",
    skills: [
      "OSINT Operations", "DarkINT Research", "Tor Network Investigations", "Digital Footprint Analysis",
      "Adversary Profiling", "Maltego", "Recon-ng", "theHarvester", "Shodan",
      "Fierce", "SpiderFoot", "Social Media OSINT", "Dark Web Monitoring", "HUMINT Correlation",
    ],
  },
  {
    id: "devsecops",
    label: "DevSecOps",
    color: "green" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    ),
    desc: "Shifting security left — secure pipelines, container hardening, IaC, and cloud security posture management.",
    skills: [
      "AWS Security", "Azure Security", "GitHub Actions Security", "Jenkins Security",
      "GitLab CI/CD", "Container Image Scanning", "Kubernetes Security", "Secrets Management",
      "Terraform", "Ansible", "SAST / DAST", "Dependency Scanning",
      "Docker Hardening", "Secure SDLC", "IaC Security",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    color: "green" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.41zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.41z"/>
      </svg>
    ),
    desc: "Security automation and scripting — from log parsing and threat intelligence enrichment to full pipeline orchestration.",
    skills: [
      "Python", "Bash", "PowerShell", "Go", "Rust", "TypeScript", "C / C++",
      "AWK & Regex", "YAML / JSON", "REST API Integrations", "Log Parsing",
      "Threat Intel Enrichment", "Wireshark", "Zeek", "Scapy", "Suricata", "Snort",
    ],
  },
];

const tagClass: Record<string, string> = {
  purple: "tag-purple",
  red: "tag-red",
  green: "tag-green",
};

const borderClass: Record<string, string> = {
  purple: "border-[var(--sec)]",
  red: "border-[var(--red)]",
  green: "border-[var(--green)]",
};

const textClass: Record<string, string> = {
  purple: "text-[var(--sec)]",
  red: "text-[var(--red)]",
  green: "text-[var(--green)]",
};

const bgActiveClass: Record<string, string> = {
  purple: "bg-[rgba(164,118,255,0.08)] border-[var(--sec)] text-[var(--sec)]",
  red: "bg-[rgba(255,58,58,0.08)] border-[var(--red)] text-[var(--red)]",
  green: "bg-[rgba(0,255,135,0.08)] border-[var(--green)] text-[var(--green)]",
};

const SkillsList = () => {
  const [active, setActive] = useState("secops");

  const current = categories.find((c) => c.id === active)!;

  return (
    <div className="w-full pt-3 md:pt-9">

      {/* Header */}
      <div className="mb-5">
        <span className="section-label mono" style={{ fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sec)", opacity: 0.7 }}>
          // Capabilities
        </span>
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-bold mt-1">
          What I do
        </h3>
      </div>

      {/* Tab row */}
      <div className="flex flex-wrap gap-2 mb-5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer mono text-xs font-medium tracking-wide ${
              active === cat.id
                ? bgActiveClass[cat.color]
                : "border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.45)] hover:border-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,0.7)] bg-transparent"
            }`}
            style={{ fontFamily: "var(--mono)" }}
          >
            <span className={active === cat.id ? textClass[cat.color] : ""}>
              {cat.icon}
            </span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div
        className="terminal-window p-5 space-y-4"
        style={{
          borderLeft: `3px solid var(--${current.color === "purple" ? "sec" : current.color})`,
          borderRadius: "12px",
        }}
      >
        {/* Terminal title bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`${textClass[current.color]}`}>{current.icon}</span>
            <span className="text-[var(--white)] font-semibold text-base">
              {categories.find((c) => c.id === active)?.label === "VPM"
                ? "Vulnerability & Patch Management"
                : categories.find((c) => c.id === active)?.label === "OSINT"
                ? "OSINT & DarkINT Intelligence"
                : categories.find((c) => c.id === active)?.label === "SecOps"
                ? "Security Operations"
                : categories.find((c) => c.id === active)?.label === "Pentesting"
                ? "Penetration Testing & Red Team"
                : categories.find((c) => c.id === active)?.label === "DevSecOps"
                ? "DevSecOps & Cloud Security"
                : "Programming & Automation"}
            </span>
          </div>
          <span
            className={`mono text-xs px-2 py-0.5 rounded ${tagClass[current.color]}`}
            style={{ fontFamily: "var(--mono)" }}
          >
            {current.skills.length} skills
          </span>
        </div>

        <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed" style={{ fontFamily: "var(--mono)" }}>
          {current.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {current.skills.map((skill) => (
            <span
              key={skill}
              className={`mono text-xs px-2.5 py-1 rounded-lg ${tagClass[current.color]}`}
              style={{ fontFamily: "var(--mono)" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsList;
