import { useState } from "react";
import type { ReactElement } from "react";

const CategoryIcons: Record<string, ReactElement> = {
  "Security Operations (SecOps)": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 1L3 5v6c0 5.55 4.24 10.74 9 12 4.76-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z"/>
    </svg>
  ),
  "Vulnerability & Patch Management": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
    </svg>
  ),
  "Penetration Testing & Red Team": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>
    </svg>
  ),
  "Security Architecture & Defense": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  ),
  "Cloud & DevSecOps": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
  ),
  "Programming & Automation": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills: Record<string, string[]> = {
    "Security Operations (SecOps)": [
      "CrowdStrike Falcon Next-Gen SIEM — real-time monitoring, threat hunting & incident response",
      "SIEM use case development, playbook creation, and SOAR orchestration (Falcon Fusion, Splunk SOAR)",
      "Threat intelligence integration and security event correlation",
      "Digital forensics, SOC operations, and MTTR reduction",
      "Wazuh, FortiSIEM, Elastic SIEM, and Microsoft Sentinel",
    ],
    "Vulnerability & Patch Management": [
      "End-to-end VPM across Windows (Server/Endpoint) and Linux (Ubuntu, Debian, SUSE, Arch)",
      "Risk-based prioritization combining CVSS, exploitability context, and asset criticality",
      "Post-patch validation, impact analysis, and service continuity assurance",
      "CrowdStrike Falcon Exposure Management, Nessus, and OpenVAS (Greenbone)",
      "Compliance-aligned governance under ISO/IEC 27001, NIST SP 800, and PCI DSS",
    ],
    "Penetration Testing & Red Team": [
      "Web application and API security testing (OWASP Top 10, MITRE ATT&CK)",
      "Network reconnaissance & exploitation: Nmap, Metasploit, Impacket, CrackMapExec",
      "Web assessment tools: Burp Suite, OWASP ZAP, SQLmap, Gobuster, Nikto, Dirsearch",
      "AD attack paths: BloodHound, Responder, Enum4linux, SMBMap",
      "OSINT & recon: Maltego, Recon-ng, theHarvester, Fierce, Shodan",
    ],
    "Security Architecture & Defense": [
      "Fortinet Security Fabric — FortiGate, FortiAnalyzer, FortiSIEM, FortiOS",
      "Sophos Central, Sophos Intercept X, and Sophos Firewall administration",
      "Zero Trust Architecture (ZTA), network segmentation, and NAC concepts",
      "Active Directory security, privilege management, and IAM governance",
      "Defense-in-Depth, IDS/IPS architecture, and secure hybrid infrastructure",
    ],
    "Cloud & DevSecOps": [
      "AWS and Azure security posture management",
      "Secure CI/CD pipelines with GitHub Actions, GitLab CI/CD, and Jenkins",
      "Container image scanning, Kubernetes security policies, and secrets management",
      "Infrastructure as Code (Terraform, Ansible) with security controls",
      "Dependency scanning, SAST/DAST integration, and secure SDLC practices",
    ],
    "Programming & Automation": [
      "Python, Bash, PowerShell — security automation and log parsing",
      "AWK, Regex, YAML/JSON for pipeline and threat intelligence automation",
      "Go, Rust, TypeScript, C/C++ for tooling and system-level scripting",
      "REST API integrations for threat intelligence enrichment",
      "Network traffic analysis tooling: Wireshark, Zeek, Scapy, Suricata, Snort",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
