/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderHead, a as renderSlot, b as renderTemplate, d as createAstro, e as addAttribute, u as unescapeHTML, f as renderScript, g as renderComponent } from '../chunks/astro/server_CZ6s4HTj.mjs';
import 'piccolore';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Image } from '../chunks/_astro_assets_Ck_ADo2u.mjs';
import { getFirestore, doc, onSnapshot, updateDoc, increment } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="SecOps Engineer · Pentester · Cybersecurity Specialist — Joseph Leon Cabezas"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon.png"><meta property="og:title" content="Joseph Leon Cabezas — SecOps Engineer"><meta property="og:description" content="SecOps Engineer · Pentester · Vulnerability Management · OSINT & DarkINT"><meta property="og:image" content="https://joscalionportfolio.vercel.app/wallpaper-shortcut.png"><meta property="og:url" content="https://joscalionportfolio.vercel.app/"><meta property="og:type" content="website"><meta property="og:site_name" content="Joseph Leon — SecOps"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:wght@400;500;700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:wght@400;500;700&display=swap" media="print" onload="this.media='all'">${maybeRenderHead()}<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:wght@400;500;700&display=swap"></noscript><title>${title}</title>${renderHead()}</head> <body class="bg-[var(--background)] md:px-48 lg:px-20 px-9"> <div class="grid-bg" aria-hidden="true"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      label: "Home",
      href: "#home",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>`
    },
    {
      label: "Operations",
      href: "#operations",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 4.24 10.74 9 12 4.76-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.12z"/></svg>`
    },
    {
      label: "Areas",
      href: "#areas",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"></path></svg>`
    },
    {
      label: "Experience",
      href: "#experience",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M21 18H20V9H21C21.5523 9 22 9.44772 22 10V17C22 17.5523 21.5523 18 21 18ZM19 18H2V10C2 9.44772 2.44772 9 3 9H18V18H19ZM5 11V14H15V11H5ZM4 3C4 2.44772 4.44772 2 5 2H17C17.5523 2 18 2.44772 18 3V7H4V3Z"></path></svg>`
    },
    {
      label: "Community",
      href: "#community",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.4874L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>`
    },
    {
      label: "Certs",
      href: "#certificates",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8 5h6v2h-6V8zm0 4h6v2h-6v-2zM7 8h2v2H7V8zm0 4h2v2H7v-2z"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center w-full" data-astro-cid-d6vcou2g> <nav id="main-nav" class="fixed left-1/2 -translate-x-1/2 z-[100] bg-[var(--background)] border border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[90%] md:w-[80%]" data-astro-cid-d6vcou2g> <div class="container mx-auto flex justify-center items-center p-3" data-astro-cid-d6vcou2g> <ul class="flex w-full justify-between md:space-x-4 md:justify-center md:gap-8 gap-3" data-astro-cid-d6vcou2g> ${navItems.map((item) => renderTemplate`<li class="flex-1 md:flex-none" data-astro-cid-d6vcou2g> <a${addAttribute(item.href, "href")} class="flex flex-col items-center gap-1 text-[var(--white-icon)] transition-colors text-xs md:text-sm relative group" data-astro-cid-d6vcou2g> <div class="absolute -left-5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[var(--sec)] nav-indicator hidden md:block" style="box-shadow: 0 0 6px var(--sec);" data-astro-cid-d6vcou2g></div> <span class="md:hidden flex items-center justify-center w-5 h-5" data-astro-cid-d6vcou2g> <fragment data-astro-cid-d6vcou2g>${unescapeHTML(item.icon)}</fragment> </span> <span class="hidden md:inline-block font-mono text-xs tracking-widest uppercase" data-astro-cid-d6vcou2g>${item.label}</span> <span class="md:hidden text-[10px] tracking-wide" data-astro-cid-d6vcou2g>${item.label}</span> </a> </li>`)} </ul> </div> </nav> </div>  ${renderScript($$result, "/home/joseph/Documents/Projects/Portfolio/src/components/nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/nav.astro", void 0);

const $$LogoWall = createComponent(($$result, $$props, $$slots) => {
  const technologies = [
    "crowdstrike",
    "splunk",
    "wazuh",
    "fortinet",
    "metasploit",
    "burpSuite",
    "wireshark",
    "kalilinux",
    "nmap",
    "elastic",
    "python",
    "powershell",
    "bash",
    "docker",
    "kubernetes",
    "aws",
    "linux",
    "ubuntuServer",
    "git",
    "github",
    "typeScript",
    "rust",
    "proxmox",
    "ngnix"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-x-hidden py-8"> <div class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div> <div class="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max"> ${[...technologies, ...technologies, ...technologies].map((tech) => renderTemplate`<div class="flex items-center gap-2 group transition-all duration-300"> <img${addAttribute(`/svg/${tech}.svg`, "src")}${addAttribute(tech, "alt")} class="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60" width="30" height="30" loading="lazy"> <span class="text-lg font-medium text-[var(--white-icon)]"> ${tech.charAt(0).toUpperCase() + tech.slice(1)} </span> </div>`)} </div> </div> `;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/logoWall.astro", void 0);

const categories = [
  {
    id: "secops",
    label: "SecOps",
    color: "purple",
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M12 1L3 5v6c0 5.55 4.24 10.74 9 12 4.76-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.12z" }) }),
    desc: "Design and operation of security programs — real-time monitoring, threat hunting, and incident response at scale.",
    skills: [
      "CrowdStrike Falcon SIEM",
      "Splunk & Splunk SOAR",
      "Wazuh",
      "Elastic SIEM",
      "Microsoft Sentinel",
      "FortiSIEM",
      "Threat Hunting",
      "Incident Response",
      "Digital Forensics",
      "SIEM Use Case Dev",
      "Playbook Automation",
      "SOC Operations",
      "Threat Intelligence",
      "Security Event Correlation",
      "MTTR Reduction"
    ]
  },
  {
    id: "vpm",
    label: "VPM",
    color: "purple",
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" }) }),
    desc: "End-to-end vulnerability lifecycle — risk-based prioritization, patch cycles, and compliance governance across heterogeneous environments.",
    skills: [
      "CrowdStrike Exposure Mgmt",
      "Nessus",
      "OpenVAS / Greenbone",
      "CVSS v3/v4",
      "Risk-Based Prioritization",
      "Windows Hardening",
      "Linux Hardening",
      "Ubuntu / Debian / SUSE",
      "ISO/IEC 27001",
      "NIST SP 800",
      "PCI DSS",
      "Patch Cycle Automation",
      "Post-Remediation Validation",
      "Asset Criticality Mapping",
      "Impact Analysis"
    ]
  },
  {
    id: "pentest",
    label: "Pentesting",
    color: "red",
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" }) }),
    desc: "Authorized offensive assessments — web, API, network, and AD. Active bug bounty researcher on HackerOne.",
    skills: [
      "Web App Pentesting",
      "API Security Testing",
      "Network Pentesting",
      "Active Directory Attacks",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "SQLmap",
      "BloodHound",
      "CrackMapExec",
      "Responder",
      "Impacket",
      "Gobuster",
      "Nikto",
      "Hydra",
      "Hashcat",
      "OWASP Top 10",
      "MITRE ATT&CK",
      "CVE Research",
      "PoC Development"
    ]
  },
  {
    id: "osint",
    label: "OSINT",
    color: "red",
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" }) }),
    desc: "Open source and dark intelligence — digital footprint mapping, adversary profiling, and Tor-based threat investigations.",
    skills: [
      "OSINT Operations",
      "DarkINT Research",
      "Tor Network Investigations",
      "Digital Footprint Analysis",
      "Adversary Profiling",
      "Maltego",
      "Recon-ng",
      "theHarvester",
      "Shodan",
      "Fierce",
      "SpiderFoot",
      "Social Media OSINT",
      "Dark Web Monitoring",
      "HUMINT Correlation"
    ]
  },
  {
    id: "devsecops",
    label: "DevSecOps",
    color: "green",
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" }) }),
    desc: "Shifting security left — secure pipelines, container hardening, IaC, and cloud security posture management.",
    skills: [
      "AWS Security",
      "Azure Security",
      "GitHub Actions Security",
      "Jenkins Security",
      "GitLab CI/CD",
      "Container Image Scanning",
      "Kubernetes Security",
      "Secrets Management",
      "Terraform",
      "Ansible",
      "SAST / DAST",
      "Dependency Scanning",
      "Docker Hardening",
      "Secure SDLC",
      "IaC Security"
    ]
  },
  {
    id: "automation",
    label: "Automation",
    color: "green",
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-4 h-4", children: /* @__PURE__ */ jsx("path", { d: "M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.41zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.41z" }) }),
    desc: "Security automation and scripting — from log parsing and threat intelligence enrichment to full pipeline orchestration.",
    skills: [
      "Python",
      "Bash",
      "PowerShell",
      "Go",
      "Rust",
      "TypeScript",
      "C / C++",
      "AWK & Regex",
      "YAML / JSON",
      "REST API Integrations",
      "Log Parsing",
      "Threat Intel Enrichment",
      "Wireshark",
      "Zeek",
      "Scapy",
      "Suricata",
      "Snort"
    ]
  }
];
const tagClass = {
  purple: "tag-purple",
  red: "tag-red",
  green: "tag-green"
};
const textClass = {
  purple: "text-[var(--sec)]",
  red: "text-[var(--red)]",
  green: "text-[var(--green)]"
};
const bgActiveClass = {
  purple: "bg-[rgba(164,118,255,0.08)] border-[var(--sec)] text-[var(--sec)]",
  red: "bg-[rgba(255,58,58,0.08)] border-[var(--red)] text-[var(--red)]",
  green: "bg-[rgba(0,255,135,0.08)] border-[var(--green)] text-[var(--green)]"
};
const SkillsList = () => {
  const [active, setActive] = useState("secops");
  const current = categories.find((c) => c.id === active);
  return /* @__PURE__ */ jsxs("div", { className: "w-full pt-3 md:pt-9", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx("span", { className: "section-label mono", style: { fontFamily: "var(--mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--sec)", opacity: 0.7 }, children: "// Capabilities" }),
      /* @__PURE__ */ jsx("h3", { className: "text-[var(--white)] text-3xl md:text-4xl font-bold mt-1", children: "What I do" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: categories.map((cat) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setActive(cat.id),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer mono text-xs font-medium tracking-wide ${active === cat.id ? bgActiveClass[cat.color] : "border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.45)] hover:border-[rgba(255,255,255,0.2)] hover:text-[rgba(255,255,255,0.7)] bg-transparent"}`,
        style: { fontFamily: "var(--mono)" },
        children: [
          /* @__PURE__ */ jsx("span", { className: active === cat.id ? textClass[cat.color] : "", children: cat.icon }),
          cat.label
        ]
      },
      cat.id
    )) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "terminal-window p-5 space-y-4",
        style: {
          borderLeft: `3px solid var(--${current.color === "purple" ? "sec" : current.color})`,
          borderRadius: "12px"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: `${textClass[current.color]}`, children: current.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-[var(--white)] font-semibold text-base", children: categories.find((c) => c.id === active)?.label === "VPM" ? "Vulnerability & Patch Management" : categories.find((c) => c.id === active)?.label === "OSINT" ? "OSINT & DarkINT Intelligence" : categories.find((c) => c.id === active)?.label === "SecOps" ? "Security Operations" : categories.find((c) => c.id === active)?.label === "Pentesting" ? "Penetration Testing & Red Team" : categories.find((c) => c.id === active)?.label === "DevSecOps" ? "DevSecOps & Cloud Security" : "Programming & Automation" })
            ] }),
            /* @__PURE__ */ jsxs(
              "span",
              {
                className: `mono text-xs px-2 py-0.5 rounded ${tagClass[current.color]}`,
                style: { fontFamily: "var(--mono)" },
                children: [
                  current.skills.length,
                  " skills"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgba(255,255,255,0.55)] leading-relaxed", style: { fontFamily: "var(--mono)" }, children: current.desc }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: current.skills.map((skill) => /* @__PURE__ */ jsx(
            "span",
            {
              className: `mono text-xs px-2.5 py-1 rounded-lg ${tagClass[current.color]}`,
              style: { fontFamily: "var(--mono)" },
              children: skill
            },
            skill
          )) })
        ]
      }
    )
  ] });
};

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-[var(--white)] mt-12 md:mt-0" id="home"> <div class="max-w-5xl mx-auto space-y-10 md:py-36 pb-14"> <div class="text-left space-y-6"> <!-- Status Badge --> <div class="flex items-center gap-3"> <span class="status-active text-[var(--green)]">Online · Available for Engagements</span> <span class="mono text-[10px] text-[var(--white-icon)] tracking-widest opacity-50">// CR · Remote</span> </div> <!-- Terminal prompt --> <div class="mono text-[var(--sec)] text-sm opacity-60 tracking-wide">
root@joscalion:~$ whoami
</div> <!-- Hero heading --> <div class="flex flex-col lg:flex-row lg:items-start space-y-5 lg:space-y-0 lg:space-x-10"> <div class="space-y-4 flex-1"> <h1 class="text-[var(--white)] text-5xl md:text-7xl font-bold leading-none tracking-tight">
SecOps<br> <span class="shiny-sec">Engineer</span> </h1> <p class="mono text-sm text-[var(--sec)] opacity-70 tracking-widest">
Pentester · CyberSec Analyst · OSINT & DarkINT
</p> <p class="text-base md:text-lg text-[var(--white-icon)] leading-relaxed max-w-xl pt-2">
I reduce organizational risk through <span class="text-[var(--white)]">structured, scalable security programs</span> —
            from vulnerability triage and patch cycles to threat hunting, adversarial testing, and
<span class="text-[var(--sec)]">OSINT & DarkINT</span> investigations using Tor-based threat intelligence.
            Aligned with <span class="text-[var(--white)]">ISO/IEC 27001</span>, NIST SP 800, and PCI DSS.
</p> <!-- Social Links --> <div class="flex flex-wrap gap-2 pt-2"> <a target="_blank" href="https://github.com/Joscalion04" aria-label="GitHub" class="flex items-center gap-2 text-[var(--white-icon)] hover:text-white transition-all duration-200 border border-[var(--white-icon-tr)] px-4 py-2 rounded-xl bg-[#1414149c] hover:border-[var(--sec)] hover:bg-[#1e1e2e] text-sm mono"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 shrink-0"> <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path> </svg>
GitHub
</a> <a target="_blank" href="https://www.linkedin.com/in/joscalion/" aria-label="LinkedIn" class="flex items-center gap-2 text-[var(--white-icon)] hover:text-white transition-all duration-200 border border-[var(--white-icon-tr)] px-4 py-2 rounded-xl bg-[#1414149c] hover:border-[var(--sec)] hover:bg-[#1e1e2e] text-sm mono"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 shrink-0"> <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path> </svg>
LinkedIn
</a> <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=joscalion04@gmail.com&su=Hey%20Joseph!" aria-label="Email" class="flex items-center gap-2 text-[var(--white-icon)] hover:text-white transition-all duration-200 border border-[var(--white-icon-tr)] px-4 py-2 rounded-xl bg-[#1414149c] hover:border-[var(--sec)] hover:bg-[#1e1e2e] text-sm mono"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 shrink-0"> <path d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path> </svg>
Contact
</a> </div> </div> </div> <!-- Stats row --> <div class="flex flex-wrap gap-3 pt-2"> ${[
    { label: "2+ yrs", sub: "SecOps" },
    { label: "HackerOne", sub: "Bug Bounty" },
    { label: "OSINT", sub: "& DarkINT" },
    { label: "ISO 27001", sub: "Aligned" },
    { label: "PCI DSS", sub: "& NIST" }
  ].map((s) => renderTemplate`<div class="flex items-center gap-2 border border-[var(--white-icon-tr)] rounded-lg px-3 py-2 bg-[#0d0d1660]"> <span class="mono text-sm font-bold text-[var(--sec)]">${s.label}</span> <span class="text-xs text-[var(--white-icon)]">${s.sub}</span> </div>`)} </div> </div> <!-- Arsenal / Logo Wall --> <div> <div class="flex items-center gap-3 mb-4"> <span class="section-label">// Arsenal</span> <div class="flex-1 h-px bg-[var(--white-icon-tr)]"></div> </div> ${renderComponent($$result, "LogoWall", $$LogoWall, {})} </div> <!-- Skills --> <div class="w-full"> ${renderComponent($$result, "SkillsList", SkillsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/joseph/Documents/Projects/Portfolio/src/React/SkillsList.tsx", "client:component-export": "default" })} </div> </div> </section>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/home.astro", void 0);

const pcapImg = new Proxy({"src":"/_astro/snypshark-example.DDqdCZyL.png","width":601,"height":412,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/Documents/Projects/Portfolio/public/snypshark-example.png";
							}
							
							return target[name];
						}
					});

const socImg = new Proxy({"src":"/_astro/soc-example.B6yTM7QQ.png","width":1113,"height":526,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/Documents/Projects/Portfolio/public/soc-example.png";
							}
							
							return target[name];
						}
					});

const lamp = new Proxy({"src":"/_astro/lamp-example.D4n6Q_pR.png","width":1023,"height":502,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/Documents/Projects/Portfolio/public/lamp-example.png";
							}
							
							return target[name];
						}
					});

const ldap = new Proxy({"src":"/_astro/OpenLDAP-example.BtqEg_Mj.png","width":273,"height":260,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/Documents/Projects/Portfolio/public/OpenLDAP-example.png";
							}
							
							return target[name];
						}
					});

const cicd = new Proxy({"src":"/_astro/ci_cd-example.CIrdf6UR.png","width":1982,"height":1020,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/joseph/Documents/Projects/Portfolio/public/ci_cd-example.png";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const operations = [
    {
      codename: "OP-001",
      title: "OffsecAssistant \u2014 AI Security Agent",
      image: socImg,
      description: "AI agent designed to assist offensive security operations \u2014 automating reconnaissance workflows, threat modeling, vulnerability correlation, and generating structured pentest reports. Integrates LLM capabilities with offensive security toolchains.",
      type: "AI \xB7 Offensive Security",
      typeColor: "red",
      status: "ACTIVE",
      tags: ["AI Agent", "LLM", "Offensive Security", "Automation", "Pentest Workflow"],
      link: "https://github.com/Joscalion04",
      preview: "https://github.com/Joscalion04",
      featured: true
    },
    {
      codename: "OP-002",
      title: "SNYPSHARK \u2014 Network PCAP Analyzer",
      image: pcapImg,
      description: "Python CLI tool for deep analysis of network captures (.pcap/.pcapng) with full OSI layer breakdown, protocol statistics, anomaly flagging, and threat indicator extraction.",
      type: "Network Security",
      typeColor: "purple",
      status: "COMPLETED",
      tags: ["Python", "Wireshark", "PCAP", "OSI Analysis", "Network Forensics"],
      link: "https://github.com/Joscalion04/Snypshark",
      preview: "https://github.com/Joscalion04/Snypshark",
      featured: true
    },
    {
      codename: "OP-003",
      title: "Virtualized Network \u2014 LDAP, iptables & LAMP",
      image: ldap,
      description: "4-VM virtualized network environment with iptables firewall, OpenLDAP identity management, LAMP server, and client nodes. Configured RBAC, traffic inspection, and security policy enforcement.",
      type: "Infrastructure Security",
      typeColor: "purple",
      status: "COMPLETED",
      tags: ["OpenLDAP", "iptables", "RBAC", "Virtualization", "Network Hardening"],
      link: "https://www.linkedin.com/in/joscalion/details/projects/1756176969204/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      preview: "https://www.linkedin.com/in/joscalion/details/projects/1756176969204/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      featured: false
    },
    {
      codename: "OP-004",
      title: "Secure LAMP + Nextcloud + Traffic Analysis",
      image: lamp,
      description: "Hardened LAMP stack with Nextcloud on VirtualBox. Implemented Apache WAF rules, SSL/TLS configuration, and conducted network traffic analysis with Wireshark to validate security controls.",
      type: "Hardening & Analysis",
      typeColor: "purple",
      status: "COMPLETED",
      tags: ["LAMP", "Nextcloud", "Apache", "SSL/TLS", "Wireshark", "WAF"],
      link: "https://www.linkedin.com/in/joscalion/details/projects/1743371783472/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      preview: "https://www.linkedin.com/in/joscalion/details/projects/1743371783472/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      featured: false
    },
    {
      codename: "OP-005",
      title: "Hardened CI/CD \u2014 Jenkins, Docker & Kubernetes",
      image: cicd,
      description: "Secure CI/CD pipeline with integrated security gates: container image scanning, SAST checks, secrets detection, and automated compliance validation on every push.",
      type: "DevSecOps",
      typeColor: "green",
      status: "COMPLETED",
      tags: ["Jenkins", "Docker", "Kubernetes", "SAST", "Container Scanning", "DevSecOps"],
      link: "",
      preview: "",
      featured: false
    },
    {
      codename: "OP-006",
      title: "Production Security Platform",
      image: socImg,
      description: "Secure billing and accounting platform in production. Applied WAF rules, RBAC, hardened CI/CD, Wazuh-based monitoring, and continuous vulnerability scanning. Confidential enterprise deployment.",
      type: "SecOps \xB7 Production",
      typeColor: "gray",
      status: "CLASSIFIED",
      tags: ["Wazuh", "WAF", "RBAC", "Monitoring", "Confidential"],
      link: "",
      preview: "https://drive.google.com/file/d/1UmnxfwXnA_mU_yGjjtnvXGayFwNbqYqH/view?usp=drive_link",
      featured: false
    }
  ];
  const statusColors = {
    ACTIVE: "tag-green",
    LIVE: "tag-green",
    COMPLETED: "tag-gray",
    CLASSIFIED: "tag-red"
  };
  return renderTemplate`${maybeRenderHead()}<section id="operations" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <div class="flex items-center gap-3 mb-2"> <span class="section-label">// Field Operations</span> <div class="flex-1 h-px bg-[var(--white-icon-tr)]"></div> </div> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">Security Projects</h2> <h3 class="text-4xl md:text-5xl font-bold mb-12">Operations</h3> <!-- Featured operations --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> ${operations.filter((op) => op.featured).map((op) => renderTemplate`<div class="terminal-window group hover:border-[var(--sec)] transition-all duration-300 hover:shadow-[0_0_24px_rgba(164,118,255,0.08)]"> <div class="terminal-titlebar justify-between"> <div class="flex items-center gap-2"> <span class="terminal-dot bg-[#ff5f57]"></span> <span class="terminal-dot bg-[#ffbd2e]"></span> <span class="terminal-dot bg-[#28c840]"></span> </div> <span${addAttribute(`mono text-xs px-2 py-0.5 rounded ${statusColors[op.status]}`, "class")}>${op.status}</span> </div> <div class="overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": op.image, "alt": op.title, "class": "w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" })} </div> <div class="p-5 space-y-3"> <div class="flex items-start justify-between gap-2"> <div> <span${addAttribute(`mono text-xs px-2 py-0.5 rounded ${op.typeColor === "red" ? "tag-red" : op.typeColor === "green" ? "tag-green" : "tag-purple"}`, "class")}>${op.type}</span> <h4 class="text-lg font-bold mt-2">${op.title}</h4> </div> <span class="mono text-xs text-[var(--white-icon)] opacity-40 shrink-0">${op.codename}</span> </div> <p class="text-sm text-[var(--white-icon)] leading-relaxed">${op.description}</p> <div class="flex flex-wrap gap-1.5"> ${op.tags.map((tag) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-gray">${tag}</span>`)} </div> <div class="flex gap-2 pt-1"> ${op.link && renderTemplate`<a${addAttribute(op.link, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs mono text-[var(--white-icon)] hover:text-[var(--sec)] transition-colors border border-[var(--white-icon-tr)] px-3 py-1.5 rounded-lg hover:border-[var(--sec)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"> <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path> </svg>
Repo
</a>`} ${op.preview && renderTemplate`<a${addAttribute(op.preview, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-xs mono text-[var(--white-icon)] hover:text-[var(--sec)] transition-colors border border-[var(--white-icon-tr)] px-3 py-1.5 rounded-lg hover:border-[var(--sec)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg>
View
</a>`} </div> </div> </div>`)} </div> <!-- Other operations list --> <div class="space-y-3"> ${operations.filter((op) => !op.featured).map((op) => renderTemplate`<div class="flex flex-col md:flex-row gap-4 bg-[var(--terminal-bg)] border border-[rgba(255,255,255,0.06)] rounded-xl p-4 hover:border-[rgba(164,118,255,0.2)] transition-all duration-300 group"> <div class="md:w-32 h-20 md:h-auto rounded-lg overflow-hidden shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": op.image, "alt": op.title, "class": "w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300" })} </div> <div class="flex-1 space-y-2"> <div class="flex flex-wrap items-center gap-2"> <span class="mono text-xs text-[var(--white-icon)] opacity-40">${op.codename}</span> <span${addAttribute(`mono text-xs px-2 py-0.5 rounded ${op.typeColor === "red" ? "tag-red" : op.typeColor === "green" ? "tag-green" : op.typeColor === "gray" ? "tag-gray" : "tag-purple"}`, "class")}>${op.type}</span> <span${addAttribute(`mono text-xs px-2 py-0.5 rounded ml-auto ${statusColors[op.status]}`, "class")}>${op.status}</span> </div> <h4 class="font-semibold">${op.title}</h4> <p class="text-sm text-[var(--white-icon)]">${op.description}</p> <div class="flex flex-wrap gap-1.5"> ${op.tags.slice(0, 4).map((tag) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-gray">${tag}</span>`)} </div> </div> <div class="flex md:flex-col gap-2 md:justify-center shrink-0"> ${op.link && renderTemplate`<a${addAttribute(op.link, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1 text-xs mono text-[var(--white-icon)] hover:text-[var(--sec)] transition-colors border border-[var(--white-icon-tr)] px-3 py-1.5 rounded-lg hover:border-[var(--sec)]">
Repo
</a>`} ${op.preview && renderTemplate`<a${addAttribute(op.preview, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-1 text-xs mono text-[var(--white-icon)] hover:text-[var(--sec)] transition-colors border border-[var(--white-icon-tr)] px-3 py-1.5 rounded-lg hover:border-[var(--sec)]">
View
</a>`} </div> </div>`)} </div> <a target="_blank" href="https://github.com/Joscalion04?tab=repositories" class="w-full flex items-center justify-center gap-2 mt-8 text-[var(--white-icon)] hover:text-white transition-all duration-200 border border-[var(--white-icon-tr)] py-3 px-6 rounded-full bg-[#1414149c] hover:border-[var(--sec)] hover:bg-[#1e1e2e] mono text-sm tracking-widest uppercase">
All repositories on GitHub
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> </div> </section>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/projects.astro", void 0);

const $$Areas = createComponent(($$result, $$props, $$slots) => {
  const areas = [
    {
      id: "secops",
      label: "01",
      title: "SecOps & Incident Response",
      shortDesc: "Security operations, threat hunting, and real-time incident management.",
      description: "Design and operation of security programs using Next-Gen SIEM platforms, playbook automation, and threat intelligence integration. Deep focus on reducing MTTR and enabling scalable SOC operations aligned with business risk.",
      color: "border-[var(--sec)]",
      gradientDot: "bg-purple-500",
      skills: [
        "CrowdStrike Falcon SIEM",
        "Splunk & Splunk SOAR",
        "Wazuh",
        "Elastic SIEM",
        "Microsoft Sentinel",
        "FortiSIEM",
        "Threat Hunting",
        "Incident Response",
        "Digital Forensics",
        "SIEM Use Case Development",
        "Playbook Automation",
        "SOAR Orchestration"
      ],
      tools: ["crowdstrike", "splunk", "wazuh", "elastic"]
    },
    {
      id: "vuln-mgmt",
      label: "02",
      title: "Vulnerability & Patch Management",
      shortDesc: "Risk-based prioritization, patch cycles, and compliance governance.",
      description: "End-to-end VPM lifecycle across Windows and Linux environments. Combines CVSS scoring with exploitability context, asset criticality, and business impact. Strong emphasis on post-patch validation, service continuity, and auditability under ISO 27001 and PCI DSS.",
      color: "border-[#6366f1]",
      gradientDot: "bg-indigo-500",
      skills: [
        "CrowdStrike Exposure Management",
        "Nessus",
        "OpenVAS / Greenbone",
        "CVSS v3/v4 Scoring",
        "Risk-Based Prioritization",
        "Windows Server Hardening",
        "Linux Hardening (Ubuntu, Debian, SUSE, Arch)",
        "ISO/IEC 27001",
        "NIST SP 800",
        "PCI DSS",
        "Patch Cycle Automation",
        "Post-Remediation Validation"
      ],
      tools: ["crowdstrike", "linux", "ubuntuServer", "nmap"]
    },
    {
      id: "osint",
      label: "03",
      title: "OSINT & DarkINT Intelligence",
      shortDesc: "Open source intelligence, dark web monitoring, and Tor-based threat investigations.",
      description: "Advanced OSINT and DarkINT operations \u2014 digital footprint mapping, adversary profiling, and threat intelligence gathering via open web, dark web, and Tor network. Translates raw intelligence into actionable threat models and risk reports.",
      color: "border-[var(--red)]",
      gradientDot: "bg-red-500",
      skills: [
        "Open Source Intelligence (OSINT)",
        "DarkINT / Dark Web Monitoring",
        "Tor Network \u2014 Threat Investigation",
        "Digital Footprint Analysis",
        "Adversary Profiling",
        "Maltego",
        "Recon-ng",
        "theHarvester",
        "Shodan",
        "Fierce",
        "SpiderFoot",
        "Social Media OSINT",
        "HUMINT Correlation"
      ],
      tools: ["python", "bash", "wireshark", "nmap"]
    },
    {
      id: "pentesting",
      label: "04",
      title: "Penetration Testing & Red Team",
      shortDesc: "Authorized offensive assessments, bug bounty, and attack surface validation.",
      description: "Hands-on offensive security across web applications, APIs, networks, and Active Directory environments. Active bug bounty researcher on HackerOne applying OWASP Top 10 and MITRE ATT&CK. Converts attack path findings into executive-level risk-driven remediation.",
      color: "border-orange-500",
      gradientDot: "bg-orange-500",
      skills: [
        "Web App Pentesting (OWASP Top 10)",
        "API Security Testing",
        "Network Pentesting",
        "Active Directory Attacks",
        "Burp Suite",
        "Metasploit",
        "Nmap",
        "SQLmap",
        "BloodHound",
        "CrackMapExec",
        "Responder",
        "Impacket",
        "Gobuster",
        "Nikto",
        "Hydra",
        "Hashcat",
        "MITRE ATT&CK",
        "CVE Research",
        "PoC Development"
      ],
      tools: ["kalilinux", "metasploit", "burpSuite", "nmap"]
    },
    {
      id: "devsecops",
      label: "05",
      title: "DevSecOps & Cloud Security",
      shortDesc: "Secure pipelines, container hardening, IaC, and cloud security posture.",
      description: "Integrating security throughout the SDLC \u2014 from secure design patterns and code review to hardened CI/CD pipelines, container scanning, secrets management, and cloud security posture management on AWS and Azure.",
      color: "border-green-500",
      gradientDot: "bg-green-500",
      skills: [
        "AWS Security",
        "Azure Security",
        "CI/CD Security (GitHub Actions, Jenkins, GitLab)",
        "Container Image Scanning",
        "Kubernetes Security Policies",
        "Secrets Management",
        "Terraform",
        "Ansible",
        "SAST/DAST Integration",
        "Dependency Scanning",
        "Docker Hardening",
        "Secure SDLC",
        "IaC Security"
      ],
      tools: ["docker", "kubernetes", "aws", "git"]
    },
    {
      id: "secarch",
      label: "06",
      title: "Security Architecture & Defense",
      shortDesc: "Enterprise defense frameworks, ZTA, network segmentation, and hardening.",
      description: "Design and implementation of enterprise-grade defensive security architectures: Zero Trust, network segmentation, NAC, Defense-in-Depth. Administration of Fortinet Security Fabric, Sophos Central, and AD identity governance.",
      color: "border-blue-500",
      gradientDot: "bg-blue-500",
      skills: [
        "Fortinet Security Fabric",
        "FortiGate / FortiOS",
        "Sophos Central",
        "Zero Trust Architecture (ZTA)",
        "Network Segmentation",
        "IDS/IPS",
        "Active Directory Security",
        "Privilege Management",
        "IAM Governance",
        "VPN Infrastructure",
        "Defense-in-Depth",
        "Lumu Defender"
      ],
      tools: ["fortinet", "linux", "docker", "proxmox"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="areas" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <div class="flex items-center gap-3 mb-2"> <span class="section-label">// Competency Map</span> <div class="flex-1 h-px bg-[var(--white-icon-tr)]"></div> </div> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">Specializations</h2> <h3 class="text-4xl md:text-5xl font-bold mb-12">Areas of Expertise</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${areas.map((area) => renderTemplate`<details${addAttribute(`group terminal-window border-t-2 ${area.color} hover:shadow-[0_0_20px_rgba(164,118,255,0.06)] transition-all duration-300`, "class")}> <summary class="cursor-pointer p-5 flex items-start justify-between gap-3 select-none"> <div class="flex items-start gap-4"> <span class="mono text-xs text-[var(--white-icon)] opacity-40 mt-1 shrink-0">${area.label}</span> <div> <h4 class="text-lg font-bold leading-tight">${area.title}</h4> <p class="text-sm text-[var(--white-icon)] mt-1">${area.shortDesc}</p> </div> </div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-[var(--white-icon)] shrink-0 mt-1 transform transition-transform duration-300 group-open:rotate-180"> <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path> </svg> </summary> <div class="px-5 pb-5 border-t border-[rgba(255,255,255,0.05)] pt-4 space-y-4"> <p class="text-sm text-[var(--white-icon)] leading-relaxed">${area.description}</p> <div> <span class="mono text-xs text-[var(--sec)] opacity-60 tracking-widest uppercase block mb-2">// Skills & Tools</span> <div class="flex flex-wrap gap-1.5"> ${area.skills.map((skill) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-gray">${skill}</span>`)} </div> </div> <div class="flex gap-2 pt-1"> ${area.tools.map((tool) => renderTemplate`<img${addAttribute(`/svg/${tool}.svg`, "src")}${addAttribute(tool, "alt")} class="h-5 w-auto opacity-40 hover:opacity-80 transition-opacity" loading="lazy">`)} </div> </div> </details>`)} </div> </div> </section>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/areas.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      title: "Ethical Hacker / Bug Bounty Researcher",
      company: "HackerOne",
      companyType: "Independent \xB7 Bug Bounty",
      period: "Jan 2026 \u2013 Present",
      location: "Remote",
      current: true,
      badgeColor: "red",
      description: [
        "Conducting authorized security assessments against web applications, APIs, cloud environments, and mobile platforms through the HackerOne bug bounty platform.",
        "Identifying, validating, and responsibly disclosing vulnerabilities \u2014 authentication flaws, access control weaknesses, injection vulnerabilities, business logic issues, and misconfigurations.",
        "Performing reconnaissance, attack surface mapping, and vulnerability research using industry-standard offensive security methodologies.",
        "Applying OWASP Top 10, MITRE ATT&CK, and CVSS to assess vulnerability impact and risk. Developing PoC demonstrations and structured technical reports."
      ],
      type: "professional",
      skills: ["Bug Bounty", "Web App Pentesting", "API Security", "OWASP Top 10", "MITRE ATT&CK", "CVSS", "Recon & OSINT", "PoC Development"]
    },
    {
      title: "Cybersecurity Operations Engineer",
      company: "SWAT Consulting Services",
      companyType: "Full-time \xB7 Hybrid",
      period: "Nov 2025 \u2013 Present",
      location: "Escaz\xFA, San Jos\xE9, CR",
      current: true,
      badgeColor: "purple",
      description: [
        "End-to-end ownership of Vulnerability & Patch Management (VPM) across Windows and Linux environments \u2014 risk-based prioritization (CVSS, exploitability, asset criticality) with post-remediation validation.",
        "Design and operation of Security Operations leveraging CrowdStrike Falcon Next-Gen SIEM \u2014 real-time monitoring, incident response, threat hunting, and threat intelligence integration.",
        "Development of SIEM use cases, playbooks, and automated SOAR workflows, reducing MTTR and enabling scalable SOC operations.",
        "Governance of cybersecurity controls aligned with ISO/IEC 27001, NIST SP 800, and PCI DSS in regulated environments.",
        "Execution of attack surface reduction strategies, network segmentation analysis, and adversarial validation (pentesting & exposure validation).",
        "Acting as Cybersecurity Consultant for third-party incidents \u2014 IR leadership, threat hunting, and expert guidance across diverse frameworks."
      ],
      type: "professional",
      skills: ["CrowdStrike Falcon", "SIEM/SOAR", "VPM", "ISO 27001", "NIST SP 800", "PCI DSS", "Incident Response", "Threat Hunting", "SecOps"]
    },
    {
      title: "Security Software Engineer",
      company: "Serkes Consulting",
      companyType: "Full-time",
      period: "Jun 2025 \u2013 Nov 2025",
      location: "Costa Rica",
      badgeColor: "gray",
      description: [
        "Implemented container security controls across Dockerized environments, enforcing image hardening, least-privilege policies, and runtime protection.",
        "Designed and applied security measures for banking transaction flows within backend applications \u2014 ensuring data integrity, secure session handling, and encrypted communication channels.",
        "Managed secrets and cryptographic key lifecycles using vault solutions integrated into CI/CD pipelines, preventing key exposure and enforcing rotation policies.",
        "Handled sensitive data governance: classification, encryption at rest and in transit, access control, and audit logging aligned with financial security standards.",
        "Hardened Angular frontend applications using WAF-oriented techniques \u2014 implementing input sanitization, Content Security Policy (CSP), and protection against XSS, SQL injection, CSRF, and clickjacking attacks."
      ],
      type: "professional",
      skills: ["Container Security", "Vault / Secrets Management", "Secure Banking Apps", "Angular Hardening", "WAF / XSS / SQLi", "CSP", "Sensitive Data Handling", "CI/CD Security", "Docker"]
    },
    {
      title: "Security Engineer",
      company: "SINART Digital Systems",
      companyType: "Full-time",
      period: "Feb 2024 \u2013 Jun 2025",
      location: "San Jos\xE9, CR",
      badgeColor: "gray",
      description: [
        "Administered and secured Active Directory environments \u2014 IAM processes, privileged access controls, GPOs, and identity governance.",
        "Supported secure software delivery through Security QA, secure CI/CD pipeline validation, and security controls across development and deployment lifecycles.",
        "Managed and hardened Dockerized Ubuntu environments and hybrid infrastructures, improving security posture, observability, and resilience.",
        "Implemented WAF protections, firewall policies, DNS security controls, and infrastructure hardening to reduce attack surface.",
        "Deployed Sophos security solutions and Wazuh monitoring platform \u2014 centralized security visibility, threat detection, and incident response."
      ],
      type: "professional",
      skills: ["Active Directory", "IAM", "Wazuh", "Sophos", "WAF", "Docker Hardening", "CI/CD Security", "Linux Hardening", "Windows Server"]
    },
    {
      title: "Speaker \u2014 Cloud & Security",
      company: "Google Developers Group (GDG)",
      companyType: "Speaking Engagement",
      period: "2026",
      location: "Costa Rica",
      badgeColor: "green",
      description: [
        "Delivered technical session for the GDG community on cloud security practices and DevSecOps integration."
      ],
      type: "extracurricular",
      skills: ["Public Speaking", "Cloud Security", "DevSecOps", "Technical Communication"]
    },
    {
      title: "Volunteer",
      company: "PwnedCR \u2014 Cybersecurity Community",
      companyType: "Community Volunteer",
      period: "2025 \u2013 Present",
      location: "Costa Rica",
      badgeColor: "red",
      description: [
        "Active contributor to Costa Rica's cybersecurity community \u2014 knowledge sharing, CTF collaboration, and community building for offensive and defensive security practitioners."
      ],
      type: "extracurricular",
      skills: ["Community Building", "CTF", "Offensive Security", "Knowledge Sharing"]
    },
    {
      title: "Volunteer Staff",
      company: "Cloud Native Computing Foundation (CNCF)",
      companyType: "Community Volunteer",
      period: "Feb \u2013 May 2025",
      location: "Costa Rica",
      badgeColor: "gray",
      description: [
        "Supported logistics, coordination, and attendee experience for Kubernetes Community Day Costa Rica 2025."
      ],
      type: "extracurricular",
      skills: ["Event Organization", "Community Engagement", "Kubernetes"]
    },
    {
      title: "Volunteer",
      company: "Google Developers Group (GDG)",
      companyType: "Community Volunteer",
      period: "2025 \u2013 Present",
      location: "Costa Rica",
      badgeColor: "gray",
      description: [
        "Volunteer organizer for GDG Costa Rica events, supporting logistics and technical content for the developer and security community."
      ],
      type: "extracurricular",
      skills: ["Event Organization", "Community", "Technical Content"]
    }
  ];
  const badgeClass = {
    red: "tag-red",
    purple: "tag-purple",
    green: "tag-green",
    gray: "tag-gray"
  };
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <div class="flex items-center gap-3 mb-2"> <span class="section-label">// Career Timeline</span> <div class="flex-1 h-px bg-[var(--white-icon-tr)]"></div> </div> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">Professional Path</h2> <h3 class="text-4xl md:text-5xl font-bold mb-12">Experience</h3> <!-- Professional --> <div class="mb-14"> <span class="mono text-xs text-[var(--sec)] opacity-60 tracking-widest uppercase">// Professional</span> <div class="mt-6 relative"> <div class="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--sec)] via-[rgba(164,118,255,0.3)] to-transparent hidden md:block"></div> <div class="space-y-6"> ${experiences.filter((e) => e.type === "professional").map((exp) => renderTemplate`<div class="md:pl-8 relative group"> <div${addAttribute(`absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2 border-[var(--sec)] hidden md:block transition-all duration-300 group-hover:shadow-[0_0_8px_var(--sec)] ${exp.current ? "bg-[var(--sec)] animate-pulse" : "bg-[var(--background)]"}`, "class")}></div> <div class="terminal-window hover:border-[rgba(164,118,255,0.3)] transition-all duration-300"> <div class="p-5 space-y-3"> <div class="flex flex-col md:flex-row md:items-start justify-between gap-2"> <div class="space-y-0.5"> <div class="flex items-center gap-2 flex-wrap"> <h4 class="text-lg font-bold">${exp.title}</h4> ${exp.current && renderTemplate`<span class="status-active text-[var(--green)] text-xs">Active</span>`} </div> <p class="text-[var(--sec)] font-medium">${exp.company}</p> <p class="text-xs text-[var(--white-icon)] mono">${exp.companyType} · ${exp.location}</p> </div> <span${addAttribute(`mono text-xs px-2.5 py-1 rounded shrink-0 ${badgeClass[exp.badgeColor]}`, "class")}>${exp.period}</span> </div> <ul class="space-y-1.5"> ${exp.description.map((item) => renderTemplate`<li class="text-sm text-[var(--white-icon)] flex items-start gap-2"> <span class="text-[var(--sec)] mt-1 shrink-0">▸</span> ${item} </li>`)} </ul> <div class="flex flex-wrap gap-1.5 pt-1"> ${exp.skills.map((skill) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-gray">${skill}</span>`)} </div> </div> </div> </div>`)} </div> </div> </div> <!-- Extracurricular --> <div> <span class="mono text-xs text-[var(--sec)] opacity-60 tracking-widest uppercase">// Community & Volunteering</span> <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"> ${experiences.filter((e) => e.type === "extracurricular").map((exp) => renderTemplate`<div class="terminal-window hover:border-[rgba(164,118,255,0.2)] transition-all duration-300 p-4 space-y-2"> <div class="flex items-start justify-between gap-2"> <div> <h4 class="font-semibold">${exp.title}</h4> <p class="text-sm text-[var(--sec)]">${exp.company}</p> <p class="text-xs text-[var(--white-icon)] mono">${exp.companyType}</p> </div> <span${addAttribute(`mono text-xs px-2 py-0.5 rounded shrink-0 ${badgeClass[exp.badgeColor]}`, "class")}>${exp.period}</span> </div> <p class="text-sm text-[var(--white-icon)]">${exp.description[0]}</p> <div class="flex flex-wrap gap-1.5"> ${exp.skills.map((skill) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-gray">${skill}</span>`)} </div> </div>`)} </div> </div> </div> </section>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/experience.astro", void 0);

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="community" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <div class="flex items-center gap-3 mb-2"> <span class="section-label">// Initiatives & Community</span> <div class="flex-1 h-px bg-[var(--white-icon-tr)]"></div> </div> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">Beyond the Job</h2> <h3 class="text-4xl md:text-5xl font-bold mb-12">Initiatives & Community</h3> <!-- OpenVector Intelligence — Featured Initiative --> <div class="mb-10"> <span class="mono text-xs text-[var(--red)] opacity-80 tracking-widest uppercase">// Featured Initiative</span> <div class="mt-4 relative terminal-window border-l-4 border-l-[var(--red)] overflow-hidden"> <!-- background decoration --> <div class="absolute inset-0 bg-gradient-to-br from-[rgba(255,58,58,0.04)] to-transparent pointer-events-none"></div> <div class="p-6 md:p-8 space-y-4 relative"> <div class="flex flex-col md:flex-row md:items-center justify-between gap-3"> <div class="space-y-1"> <div class="flex items-center gap-3"> <span class="tag-red mono text-xs px-2 py-0.5 rounded">INITIATIVE</span> <span class="status-active text-[var(--green)] text-xs">Active</span> </div> <h4 class="text-3xl font-bold mt-2">OpenVector Intelligence</h4> <p class="mono text-sm text-[var(--sec)] opacity-80">Threat Hunting · Digital Footprint Analysis · DarkINT Research</p> </div> <div class="shrink-0 border border-[rgba(255,58,58,0.3)] rounded-xl p-4 bg-[rgba(255,58,58,0.05)] text-center min-w-[120px]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-[var(--red)] mx-auto mb-1"> <path d="M12 1L3 5v6c0 5.55 4.24 10.74 9 12 4.76-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z"></path> </svg> <span class="mono text-xs text-[var(--white-icon)]">Threat Intel</span> </div> </div> <p class="text-[var(--white-icon)] leading-relaxed max-w-3xl">
OpenVector Intelligence is a threat hunting and digital intelligence initiative focused on
<strong class="text-[var(--white)]">adversary tracking, digital footprint analysis, and DarkINT research</strong>.
            Operations include deep web and dark web monitoring, Tor network investigations for threat intelligence gathering,
            OSINT-driven adversary profiling, and digital exposure assessment for individuals and organizations.
            The goal: surface hidden threats before they materialize.
</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-3"> ${[
    { icon: "\u{1F310}", label: "OSINT Ops", sub: "Open-source intelligence gathering" },
    { icon: "\u{1F9C5}", label: "Tor/DarkINT", sub: "Dark web threat investigations" },
    { icon: "\u{1F50D}", label: "Digital Footprint", sub: "Exposure & identity mapping" },
    { icon: "\u{1F3AF}", label: "Adversary Intel", sub: "Profiling & attribution" }
  ].map((item) => renderTemplate`<div class="bg-[rgba(255,58,58,0.05)] border border-[rgba(255,58,58,0.15)] rounded-xl p-3 text-center space-y-1"> <span class="text-2xl">${item.icon}</span> <p class="mono text-xs font-bold text-[var(--white)]">${item.label}</p> <p class="text-xs text-[var(--white-icon)]">${item.sub}</p> </div>`)} </div> <div class="flex flex-wrap gap-1.5"> ${[
    "OSINT",
    "DarkINT",
    "Tor Network",
    "Digital Footprint",
    "Adversary Profiling",
    "Maltego",
    "Shodan",
    "Recon-ng",
    "theHarvester",
    "Dark Web Monitoring",
    "Threat Intel"
  ].map((tag) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-red">${tag}</span>`)} </div> </div> </div> </div> <!-- Speaking --> <div class="mb-10"> <span class="mono text-xs text-[var(--sec)] opacity-60 tracking-widest uppercase">// Speaking</span> <div class="mt-4"> <div class="terminal-window border-l-4 border-l-[var(--green)] p-5 md:p-6"> <div class="flex flex-col md:flex-row md:items-center gap-4"> <div class="shrink-0 w-14 h-14 rounded-xl bg-[rgba(0,255,135,0.08)] border border-[rgba(0,255,135,0.2)] flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 text-[var(--green)]"> <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm6.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"></path> </svg> </div> <div class="flex-1 space-y-1"> <div class="flex items-center gap-2 flex-wrap"> <span class="tag-green mono text-xs px-2 py-0.5 rounded">SPEAKER</span> <span class="mono text-xs text-[var(--white-icon)] opacity-50">2026</span> </div> <h4 class="text-xl font-bold">Technical Speaker — Google Developers Group (GDG)</h4> <p class="text-sm text-[var(--white-icon)]">
Delivered a technical session for the GDG Costa Rica community covering cloud security practices,
                DevSecOps integration, and real-world threat scenarios.
</p> <div class="flex flex-wrap gap-1.5 pt-1"> ${["Cloud Security", "DevSecOps", "Public Speaking", "GDG Costa Rica"].map((tag) => renderTemplate`<span class="mono text-xs px-2 py-0.5 rounded tag-green">${tag}</span>`)} </div> </div> </div> </div> </div> </div> <!-- Community Volunteering --> <div> <span class="mono text-xs text-[var(--sec)] opacity-60 tracking-widest uppercase">// Community Contributions</span> <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="terminal-window p-5 space-y-3 hover:border-[rgba(255,58,58,0.3)] transition-all duration-300 group"> <div class="w-10 h-10 rounded-lg bg-[rgba(255,58,58,0.1)] border border-[rgba(255,58,58,0.2)] flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-[var(--red)]"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path> </svg> </div> <div> <span class="tag-red mono text-xs px-2 py-0.5 rounded">VOLUNTEER</span> <h4 class="font-bold mt-2">PwnedCR</h4> <p class="text-sm text-[var(--sec)]">Cybersecurity Community</p> </div> <p class="text-sm text-[var(--white-icon)]">
Active contributor to Costa Rica's offensive and defensive security community — CTF collaboration,
            knowledge sharing, and mentoring security practitioners.
</p> <div class="flex flex-wrap gap-1"> ${["CTF", "Offensive Sec", "Community"].map((t) => renderTemplate`<span class="mono text-xs px-1.5 py-0.5 rounded tag-red">${t}</span>`)} </div> </div> <div class="terminal-window p-5 space-y-3 hover:border-[rgba(164,118,255,0.3)] transition-all duration-300 group"> <div class="w-10 h-10 rounded-lg bg-[rgba(164,118,255,0.1)] border border-[rgba(164,118,255,0.2)] flex items-center justify-center"> <img src="/svg/kubernetes.svg" alt="Kubernetes" class="h-5 w-5 opacity-70"> </div> <div> <span class="tag-purple mono text-xs px-2 py-0.5 rounded">VOLUNTEER</span> <h4 class="font-bold mt-2">KCD Costa Rica 2025</h4> <p class="text-sm text-[var(--sec)]">Cloud Native Computing Foundation</p> </div> <p class="text-sm text-[var(--white-icon)]">
Supported logistics, coordination, and attendee experience for Kubernetes Community Day Costa Rica 2025.
</p> <div class="flex flex-wrap gap-1"> ${["CNCF", "Kubernetes", "Event Org"].map((t) => renderTemplate`<span class="mono text-xs px-1.5 py-0.5 rounded tag-purple">${t}</span>`)} </div> </div> <div class="terminal-window p-5 space-y-3 hover:border-[rgba(0,255,135,0.2)] transition-all duration-300 group"> <div class="w-10 h-10 rounded-lg bg-[rgba(0,255,135,0.08)] border border-[rgba(0,255,135,0.2)] flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-[var(--green)]"> <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path> </svg> </div> <div> <span class="tag-green mono text-xs px-2 py-0.5 rounded">VOLUNTEER</span> <h4 class="font-bold mt-2">Google Developers Group</h4> <p class="text-sm text-[var(--sec)]">GDG Costa Rica</p> </div> <p class="text-sm text-[var(--white-icon)]">
Volunteer organizer for GDG Costa Rica events. Supporting technical content, logistics, and community growth for developers and security practitioners.
</p> <div class="flex flex-wrap gap-1"> ${["GDG", "Google", "Dev Community"].map((t) => renderTemplate`<span class="mono text-xs px-1.5 py-0.5 rounded tag-green">${t}</span>`)} </div> </div> </div> </div> </div> </section>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/community.astro", void 0);

const $$Certificates = createComponent(($$result, $$props, $$slots) => {
  const certificates = [
    {
      title: "Cybersecurity Analyst",
      issuer: "Information Risk and Security Institute (IRSI)",
      date: "2024",
      credentialLink: "https://www.linkedin.com/in/joscalion/",
      description: "Focused on OS security, network defense, traffic monitoring, cloud security, penetration testing, digital forensics, incident response, risk management, and security scripting for SOC environments."
    },
    {
      title: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      date: "2025\u201326",
      credentialLink: "https://www.credly.com/badges/69cd0d41-11d9-4bc8-8985-7da897d1f942/linked_in_profile",
      description: "Foundational knowledge in cybersecurity principles, access controls, network security, and incident response."
    },
    {
      title: "Introduction to DevOps and Site Reliability Engineering",
      issuer: "Linux Foundation (LFS162)",
      date: "2025",
      credentialLink: "https://www.credly.com/badges/bda72962-d778-498f-b3ce-be96ea62f639/linked_in_profile",
      description: "Fundamentals of DevOps practices, SRE principles, automation, and reliability engineering."
    },
    {
      title: "Introduction to Cloud Infrastructure Technologies",
      issuer: "Linux Foundation (LFS151)",
      date: "2025",
      credentialLink: "https://www.credly.com/badges/afcb3f41-1a12-42a6-a60e-d445aa8c1cda/linked_in_profile",
      description: "Overview of cloud computing concepts, containers, orchestration, and infrastructure technologies."
    },
    {
      title: "Scrum Fundamentals Certified",
      issuer: "SCRUMstudy",
      date: "2025",
      credentialLink: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1075938",
      description: "Understanding of Scrum roles, events, artifacts, and the Scrum framework for agile project delivery."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="certificates" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">My Credentials</h2> <h3 class="text-4xl md:text-5xl font-medium mb-12">Certificates</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${certificates.map((certificate) => renderTemplate`<div class="bg-[#1414149c] rounded-2xl p-6 border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-all duration-300"> <div class="flex items-start justify-between mb-4 gap-2"> <h4 class="text-xl font-semibold">${certificate.title}</h4> <span class="px-3 py-1 shrink-0 text-sm rounded-full bg-[var(--sec)] bg-opacity-20 text-black"> ${certificate.date} </span> </div> <p class="text-[var(--white-icon)] mb-2">${certificate.issuer}</p> <p class="text-[var(--white-icon)] text-sm mb-4">${certificate.description}</p> <a${addAttribute(certificate.credentialLink, "href")} target="_blank" class="inline-flex items-center text-[var(--sec)] hover:text-[var(--white)] transition-colors duration-300">
View credential
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> </div>`)} </div> </div> </section> `;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/certificates.astro", void 0);

const firebaseConfig = {
  apiKey: undefined                                ,
  authDomain: undefined                                           ,
  projectId: undefined                                          ,
  storageBucket: undefined                                              ,
  messagingSenderId: undefined                                                   ,
  appId: undefined                                      
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [animateLikes, setAnimateLikes] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    setIsClient(true);
    const storedIsLiked = localStorage.getItem("websiteIsLiked");
    if (storedIsLiked) {
      setIsLiked(storedIsLiked === "true");
    }
    const likeDocRef = doc(db, "likes", "counter");
    const unsubscribe = onSnapshot(likeDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const currentLikes = docSnap.data().likes;
        setLikes(Math.max(0, currentLikes));
        setAnimateLikes(true);
        setTimeout(() => setAnimateLikes(false), 300);
      } else {
        console.log("Document does not exist.");
      }
    });
    return () => unsubscribe();
  }, []);
  const triggerLikeAnimation = () => {
    setTriggerAnimation(true);
    setTimeout(() => {
      setTriggerAnimation(false);
    }, 300);
  };
  const handleLike = async () => {
    if (isProcessing) return;
    if (isLiked) {
      triggerLikeAnimation();
      return;
    }
    try {
      setIsProcessing(true);
      const likeDocRef = doc(db, "likes", "counter");
      await updateDoc(likeDocRef, {
        likes: increment(1)
      });
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
      triggerLikeAnimation();
    } catch (error) {
      console.error("Error updating likes:", error);
    } finally {
      setIsProcessing(false);
    }
  };
  if (!isClient) return null;
  const borderColorClass = isLiked ? "border-[var(--sec)]" : "border-[var(--white-icon)]";
  const svgClasses = `
    w-6 h-6 transition-all duration-300 ease-in-out 
    ${isLiked ? "text-[var(--sec)] scale-110" : "text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
    ${triggerAnimation ? " animate-scale" : ""}
  `;
  return /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleLike,
      disabled: isProcessing,
      className: `
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-all duration-300 ease-in-out transform border-2 ${borderColorClass}
          ${!isLiked ? "md:hover:border-[var(--white)]" : ""}
          ${triggerAnimation ? " animate-scale" : ""}
        `,
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: svgClasses,
            children: /* @__PURE__ */ jsx("path", { d: "M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "span",
          {
            className: `
          text-sm pl-3 transition-all duration-300 ease-in-out ${animateLikes ? "animate-scale" : ""}
          text-[var(--white)]
        `,
            children: [
              likes,
              " Likes"
            ]
          }
        )
      ]
    }
  ) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(["", `<footer id="contact" class="w-full py-14 border-t border-[#ffffff10]"> <div class="max-w-5xl mx-auto"> <!-- Contact CTA --> <div class="terminal-window border-l-4 border-l-[var(--sec)] p-6 mb-10"> <div class="flex items-center gap-3 mb-2"> <span class="section-label">// Contact</span> </div> <h3 class="text-3xl md:text-4xl font-bold mb-2">Let's Connect</h3> <p class="text-[var(--white-icon)] mb-6 max-w-xl">
Available for security engagements, consulting, speaking opportunities, and collaboration on cybersecurity initiatives.
        Based in <strong class="text-[var(--white)]">Costa Rica</strong>, operating <strong class="text-[var(--white)]">remotely</strong>.
</p> <form id="contact-form" action="https://formspree.io/f/mnnjznkj" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-4"> <input type="text" name="from_name" placeholder="Name" required class="mono px-4 py-3 bg-[rgba(255,255,255,0.04)] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-xl focus:outline-none focus:border-[var(--sec)] transition-colors placeholder:text-[var(--white-icon)] text-sm"> <input type="email" name="reply_to" placeholder="Email" required class="mono px-4 py-3 bg-[rgba(255,255,255,0.04)] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-xl focus:outline-none focus:border-[var(--sec)] transition-colors placeholder:text-[var(--white-icon)] text-sm"> <textarea name="message" placeholder="Message" rows="4" required class="mono md:col-span-2 px-4 py-3 bg-[rgba(255,255,255,0.04)] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-xl focus:outline-none focus:border-[var(--sec)] transition-colors resize-none placeholder:text-[var(--white-icon)] text-sm"></textarea> <button type="submit" class="mono md:col-span-2 px-6 py-3 bg-[rgba(164,118,255,0.12)] text-[var(--sec)] border border-[rgba(164,118,255,0.3)] rounded-xl hover:bg-[rgba(164,118,255,0.2)] hover:border-[var(--sec)] transition-all duration-200 font-semibold tracking-widest uppercase text-sm">
Send Message
</button> </form> <div id="form-message" class="hidden justify-center items-center mt-4 text-[var(--green)] text-sm mono">
\u2713 Message sent \u2014 I'll get back to you shortly.
</div> </div> <!-- Bottom row --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"> <!-- Social links --> <div class="space-y-4"> <span class="section-label">// Connect</span> <div class="flex gap-3 mt-3"> `, " </div> ", ' </div> <!-- Built with --> <div class="space-y-3"> <span class="section-label">// Built with</span> <div class="mt-3 space-y-2"> ', ' </div> </div> <!-- Specializations --> <div class="space-y-3"> <span class="section-label">// Focus Areas</span> <div class="mt-3 flex flex-wrap gap-1.5"> <span class="tag-red mono text-xs px-2 py-0.5 rounded">Pentesting</span> <span class="tag-purple mono text-xs px-2 py-0.5 rounded">SecOps</span> <span class="tag-purple mono text-xs px-2 py-0.5 rounded">SIEM/SOAR</span> <span class="tag-red mono text-xs px-2 py-0.5 rounded">OSINT</span> <span class="tag-red mono text-xs px-2 py-0.5 rounded">DarkINT</span> <span class="tag-green mono text-xs px-2 py-0.5 rounded">DevSecOps</span> <span class="tag-gray mono text-xs px-2 py-0.5 rounded">ISO 27001</span> <span class="tag-gray mono text-xs px-2 py-0.5 rounded">PCI DSS</span> </div> </div> </div> <div class="pt-6 border-t border-[#ffffff08] flex flex-col md:flex-row items-center justify-between gap-2"> <p class="mono text-xs text-[var(--white-icon)] opacity-40">\n\xA9 2026 Joseph Leon Cabezas \xB7 SecOps Engineer \xB7 Costa Rica\n</p> <p class="mono text-xs text-[var(--white-icon)] opacity-30">\njoscalion04@gmail.com\n</p> </div> </div> </footer> <script type="module">\n  const form = document.getElementById("contact-form");\n  const formMessage = document.getElementById("form-message");\n  form.addEventListener("submit", async (e) => {\n    e.preventDefault();\n    const formData = new FormData(form);\n    try {\n      const response = await fetch(form.action, { method: "POST", body: formData, headers: { Accept: "application/json" } });\n      if (response.ok) {\n        form.reset();\n        form.style.display = "none";\n        formMessage.classList.remove("hidden");\n        formMessage.classList.add("flex");\n      } else {\n        alert("There was a problem sending your message.");\n      }\n    } catch (error) {\n      alert("There was a problem sending your message.");\n    }\n  });\n<\/script>'])), maybeRenderHead(), [
    { href: "//github.com/Joscalion04", label: "GitHub", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"/></svg>` },
    { href: "https://www.linkedin.com/in/joscalion/", label: "LinkedIn", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"/></svg>` },
    { href: "mailto:joscalion04@gmail.com", label: "Email", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/></svg>` }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank"${addAttribute(link.label, "aria-label")} class="text-[var(--white-icon)] hover:text-[var(--sec)] transition-all duration-200 border border-[var(--white-icon-tr)] p-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] hover:border-[var(--sec)]"> <div>${unescapeHTML(link.icon)}</div> </a>`), renderComponent($$result, "LikeButton", LikeButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/joseph/Documents/Projects/Portfolio/src/React/LikeButton.tsx", "client:component-export": "default" }), [
    { desc: "Built with", name: "Astro", icon: "/svg/astro.svg" },
    { desc: "Styled with", name: "TailwindCSS", icon: "/svg/tailwindcss.svg" },
    { desc: "Deployed on", name: "Vercel", icon: "/svg/vercel.svg" }
  ].map((tech) => renderTemplate`<div class="flex items-center gap-2"> <span class="mono text-xs text-[var(--white-icon)]">${tech.desc}</span> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} class="h-4 w-4 object-contain opacity-50 invert" loading="lazy"> <span class="mono text-xs text-[var(--white)]">${tech.name}</span> </div>`));
}, "/home/joseph/Documents/Projects/Portfolio/src/components/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Joseph Leon \u2014 SecOps Engineer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Operations", $$Projects, {})} ${renderComponent($$result2, "Areas", $$Areas, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Community", $$Community, {})} ${renderComponent($$result2, "Certificates", $$Certificates, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/joseph/Documents/Projects/Portfolio/src/pages/index.astro", void 0);

const $$file = "/home/joseph/Documents/Projects/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
