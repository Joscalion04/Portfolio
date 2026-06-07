/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderHead, a as renderSlot, b as renderTemplate, d as createAstro, e as addAttribute, u as unescapeHTML, f as renderScript, g as renderComponent } from '../chunks/astro/server_CZ6s4HTj.mjs';
import 'piccolore';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import { $ as $$Image } from '../chunks/_astro_assets_Ck_ADo2u.mjs';
import { getFirestore, doc, onSnapshot, updateDoc, increment } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Software Engineer"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon.png"><meta property="og:title" content="Joseph Leon"><meta property="og:description" content="Software Engineer"><meta property="og:image" content="https://joscalionportfolio.vercel.app/wallpaper-shortcut.png"><meta property="og:url" content="https://joscalionportfolio.vercel.app/"><meta property="og:type" content="website"><meta property="og:site_name" content="Joseph Leon Portfolio"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" media="print" onload="this.media='all'">${maybeRenderHead()}<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"></noscript><title>${title}</title>${renderHead()}</head> <body class="bg-[--background] md:px-48 lg:px-20 px-9"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      label: "Home",
      href: "#home",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>`
    },
    {
      label: "Areas",
      href: "#areas",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"></path></svg>`
    },
    {
      label: "Experience",
      href: "#experience",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 18H20V9H21C21.5523 9 22 9.44772 22 10V17C22 17.5523 21.5523 18 21 18ZM19 18H2V10C2 9.44772 2.44772 9 3 9H18V18H19ZM5 11V14H15V11H5ZM4 3C4 2.44772 4.44772 2 5 2H17C17.5523 2 18 2.44772 18 3V7H4V3Z"></path></svg>`
    },
    {
      label: "Certificates",
      href: "#certificates",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C8.13401 2 5 5.13401 5 9V13.2548C5 14.3877 5.27969 15.5031 5.81182 16.5L3 21H21L18.1882 16.5C18.7203 15.5031 19 14.3877 19 13.2548V9C19 5.13401 15.866 2 12 2ZM12 4C14.7614 4 17 6.23858 17 9V13.2548C17 13.8776 16.8725 14.4933 16.6257 15.0625L16.1882 16H7.81182L7.37432 15.0625C7.12754 14.4933 7 13.8776 7 13.2548V9C7 6.23858 9.23858 4 12 4ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"></path></svg>`
    },
    {
      label: "Contact",
      href: "#contact",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>`
    }
  ];
  return renderTemplate`<!-- El resto del código de navegación se mantiene igual -->${maybeRenderHead()}<div class="flex justify-center w-full" data-astro-cid-d6vcou2g> <nav id="main-nav" class="fixed left-1/2 -translate-x-1/2 z-[100] bg-[var(--background)] border border-1 border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%]" data-astro-cid-d6vcou2g> <div class="container mx-auto flex justify-center items-center p-3" data-astro-cid-d6vcou2g> <ul class="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6" data-astro-cid-d6vcou2g> ${navItems.map((item) => renderTemplate`<li class="flex-1 md:flex-none" data-astro-cid-d6vcou2g> <a${addAttribute(item.href, "href")} class="flex flex-col items-center gap-1 text-[var(--white-icon)] transition-colors text-xs md:text-base relative group" data-astro-cid-d6vcou2g> <div class="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[#A9FF5B] nav-indicator hidden md:block" data-astro-cid-d6vcou2g></div> <span class="md:hidden flex items-center justify-center w-6 h-6" data-astro-cid-d6vcou2g> <fragment data-astro-cid-d6vcou2g>${unescapeHTML(item.icon)}</fragment> </span> <span class="hidden md:inline-block" data-astro-cid-d6vcou2g>${item.label}</span> <span class="md:hidden" data-astro-cid-d6vcou2g>${item.label}</span> </a> </li>`)} </ul> </div> </nav> </div> <!-- El resto del código de estilos y scripts se mantiene igual -->  ${renderScript($$result, "/home/joseph/Documents/Projects/Portfolio/src/components/nav.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/nav.astro", void 0);

const LetterGlitch = ({
  glitchColors = ["#5e4491", "#A476FF", "#241a38"],
  glitchSpeed = 33,
  centerVignette = false,
  outerVignette = false,
  smooth = true
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());
  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;
  const lettersAndSymbols = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "@",
    "#",
    "$",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "/",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "<",
    ">",
    ",",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  const getRandomChar = () => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  };
  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  const interpolateColor = (start, end, factor) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor)
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };
  const calculateGrid = (width, height) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };
  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1
    }));
  };
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };
  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";
    letters.current.forEach((letter, index) => {
      const x = index % grid.current.columns * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };
  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return;
    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;
      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();
      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      } else {
        letters.current[index].colorProgress = 0;
      }
    }
  };
  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(
            startRgb,
            endRgb,
            letter.colorProgress
          );
          needsRedraw = true;
        }
      }
    });
    if (needsRedraw) {
      drawLetters();
    }
  };
  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = now;
    }
    if (smooth) {
      handleSmoothTransitions();
    }
    animationRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        animate();
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [glitchSpeed, smooth]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full bg-[#101010] overflow-hidden", children: [
    /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "block w-full h-full" }),
    outerVignette && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(16,16,16,0)_60%,_rgba(16,16,16,1)_100%)]" }),
    centerVignette && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]" })
  ] });
};

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

const CategoryIcons = {
  "Security Operations (SecOps)": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 text-[var(--sec)] opacity-70", children: /* @__PURE__ */ jsx("path", { d: "M12 1L3 5v6c0 5.55 4.24 10.74 9 12 4.76-1.26 9-6.45 9-12V5L12 1zm0 2.18l7 3.12V11c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z" }) }),
  "Vulnerability & Patch Management": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 text-[var(--sec)] opacity-70", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" }) }),
  "Penetration Testing & Red Team": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 text-[var(--sec)] opacity-70", children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" }) }),
  "Security Architecture & Defense": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 text-[var(--sec)] opacity-70", children: /* @__PURE__ */ jsx("path", { d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" }) }),
  "Cloud & DevSecOps": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 text-[var(--sec)] opacity-70", children: /* @__PURE__ */ jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" }) }),
  "Programming & Automation": /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-6 h-6 text-[var(--sec)] opacity-70", children: /* @__PURE__ */ jsx("path", { d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" }) })
};
const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);
  const skills = {
    "Security Operations (SecOps)": [
      "CrowdStrike Falcon Next-Gen SIEM — real-time monitoring, threat hunting & incident response",
      "SIEM use case development, playbook creation, and SOAR orchestration (Falcon Fusion, Splunk SOAR)",
      "Threat intelligence integration and security event correlation",
      "Digital forensics, SOC operations, and MTTR reduction",
      "Wazuh, FortiSIEM, Elastic SIEM, and Microsoft Sentinel"
    ],
    "Vulnerability & Patch Management": [
      "End-to-end VPM across Windows (Server/Endpoint) and Linux (Ubuntu, Debian, SUSE, Arch)",
      "Risk-based prioritization combining CVSS, exploitability context, and asset criticality",
      "Post-patch validation, impact analysis, and service continuity assurance",
      "CrowdStrike Falcon Exposure Management, Nessus, and OpenVAS (Greenbone)",
      "Compliance-aligned governance under ISO/IEC 27001, NIST SP 800, and PCI DSS"
    ],
    "Penetration Testing & Red Team": [
      "Web application and API security testing (OWASP Top 10, MITRE ATT&CK)",
      "Network reconnaissance & exploitation: Nmap, Metasploit, Impacket, CrackMapExec",
      "Web assessment tools: Burp Suite, OWASP ZAP, SQLmap, Gobuster, Nikto, Dirsearch",
      "AD attack paths: BloodHound, Responder, Enum4linux, SMBMap",
      "OSINT & recon: Maltego, Recon-ng, theHarvester, Fierce, Shodan"
    ],
    "Security Architecture & Defense": [
      "Fortinet Security Fabric — FortiGate, FortiAnalyzer, FortiSIEM, FortiOS",
      "Sophos Central, Sophos Intercept X, and Sophos Firewall administration",
      "Zero Trust Architecture (ZTA), network segmentation, and NAC concepts",
      "Active Directory security, privilege management, and IAM governance",
      "Defense-in-Depth, IDS/IPS architecture, and secure hybrid infrastructure"
    ],
    "Cloud & DevSecOps": [
      "AWS and Azure security posture management",
      "Secure CI/CD pipelines with GitHub Actions, GitLab CI/CD, and Jenkins",
      "Container image scanning, Kubernetes security policies, and secrets management",
      "Infrastructure as Code (Terraform, Ansible) with security controls",
      "Dependency scanning, SAST/DAST integration, and secure SDLC practices"
    ],
    "Programming & Automation": [
      "Python, Bash, PowerShell — security automation and log parsing",
      "AWK, Regex, YAML/JSON for pipeline and threat intelligence automation",
      "Go, Rust, TypeScript, C/C++ for tooling and system-level scripting",
      "REST API integrations for threat intelligence enrichment",
      "Network traffic analysis tooling: Wireshark, Zeek, Scapy, Suricata, Snort"
    ]
  };
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
  return /* @__PURE__ */ jsxs("div", { className: "text-left pt-3 md:pt-9", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6", children: "What I do?" }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-4 mt-4 text-lg", children: Object.entries(skills).map(([category, items]) => /* @__PURE__ */ jsx("li", { className: "w-full", children: /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => toggleItem(category),
        className: "md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4", children: [
            CategoryIcons[category],
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-grow justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "min-w-0 max-w-[200px] md:max-w-none overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "block truncate text-[var(--white)] text-lg", children: category }) }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: `w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? "rotate-180" : ""}`,
                  children: /* @__PURE__ */ jsx("path", { d: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-all duration-300 px-4 ${openItem === category ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[var(--white-icon)] text-sm", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "pl-1", children: "•" }),
                /* @__PURE__ */ jsx("li", { className: "pl-3", children: item })
              ] }, index)) })
            }
          )
        ]
      }
    ) }, category)) })
  ] });
};

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-[var(--white)] mt-12 md:mt-0" id="home"> <div class="max-w-5xl mx-auto space-y-8 md:py-36 pb-14"> <div class="text-left space-y-4"> <p class="text-md md:text-lg text-[var(--white-icon)] shiny-white">
Hi, I'm Joseph Leon
</p> <div class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4"> <h1 class="text-[var(--white)] text-5xl md:text-6xl font-medium text-pretty leading-none">
SecOps <br> Engineer
</h1> <p class="text-md md:text-2xl text-[var(--white-icon)]">
SecOps Engineer & Cybersecurity Analyst focused on <span class="text-[var(--sec)] shiny-sec">Vulnerability & Patch Management</span>,
<span class="text-[var(--sec)] shiny-sec">security operations</span>, and
<span class="text-[var(--sec)] shiny-sec">Purple Team</span> practices.
            I reduce organizational risk through structured, scalable, and security-first solutions
            aligned with real-world threat models and frameworks like
<span class="text-[var(--sec)] shiny-sec">ISO/IEC 27001</span>, NIST SP 800, and PCI DSS.
            Active <span class="text-[var(--sec)] shiny-sec">Bug Bounty researcher</span> on HackerOne
            with hands-on experience in pentesting, SIEM/SOAR operations, and
<span class="text-[var(--sec)] shiny-sec">DevSecOps</span> pipelines.
</p>  </div> <div class="flex justify-start gap-2 pt-3 md:pt-6"> <a target="_blank" href="https://github.com/Joscalion04" aria-label="GitHub" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"> <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path> </svg> </a> <a target="_blank" href="https://www.linkedin.com/in/joscalion/" aria-label="LinkedIn" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"> <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path> </svg> </a> <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=joscalion04@gmail.com&su=Hey%20Joseph!" aria-label="Email" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24"> <path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path> </svg> </a> </div> </div> ${renderComponent($$result, "LogoWall", $$LogoWall, {})} <div class="flex flex-col lg:flex-row items-center gap-8"> ${renderComponent($$result, "SkillsList", SkillsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/joseph/Documents/Projects/Portfolio/src/React/SkillsList.tsx", "client:component-export": "default" })} <div class="flex justify-center md:w-full md:h-[292px] size-[290px] pt-3 md:pt-9 md:ml-16"> ${renderComponent($$result, "LetterGlitch", LetterGlitch, { "client:load": true, "glitchColors": ["#5e4491", "#A476FF", "#241a38"], "glitchSpeed": 33, "centerVignette": false, "outerVignette": true, "smooth": true, "client:component-hydration": "load", "client:component-path": "/home/joseph/Documents/Projects/Portfolio/src/React/LetterGlitch.tsx", "client:component-export": "default" })} </div> </div> </div> </section> `;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/home.astro", void 0);

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

const cd_cd = new Proxy({"src":"/_astro/ci_cd-example.CIrdf6UR.png","width":1982,"height":1020,"format":"png"}, {
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

const $$Areas = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "SNYPSHARK \u2013 PCAP Network Analyzer",
      image: pcapImg,
      link: "https://github.com/Joscalion04/Snypshark",
      preview: "https://github.com/Joscalion04/Snypshark",
      status: "Completed",
      area: "SecOps & Pentesting",
      description: "Python CLI tool for analyzing network captures (.pcap/.pcapng) with full OSI layer breakdown, anomaly detection, and protocol statistics."
    },
    {
      title: "Secure LAMP Server + Nextcloud & Traffic Analysis",
      image: lamp,
      link: "https://www.linkedin.com/in/joscalion/details/projects/1743371783472/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      preview: "https://www.linkedin.com/in/joscalion/details/projects/1743371783472/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      status: "Completed",
      area: "SecOps & Pentesting",
      description: "Configured a hardened LAMP stack with Nextcloud on VirtualBox. Implemented Apache firewall rules, SSL, and conducted network traffic analysis using Wireshark."
    },
    {
      title: "Virtualized Network \u2014 LDAP, iptables & LAMP",
      image: ldap,
      link: "https://www.linkedin.com/in/joscalion/details/projects/1756176969204/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      preview: "https://www.linkedin.com/in/joscalion/details/projects/1756176969204/single-media-viewer/?profileId=ACoAADo_jh4BCQfhm55eWhF0w-w0jnZ11lv9EUk",
      status: "Completed",
      area: "SecOps & Pentesting",
      description: "Built a virtualized environment with 4 VMs: iptables firewall, OpenLDAP IAM, client, and LAMP server. Configured role-based access and monitored traffic for security enforcement."
    },
    {
      title: "Hardened CI/CD Pipeline with Jenkins, Docker & Kubernetes",
      image: cd_cd,
      link: "",
      preview: "",
      status: "Completed",
      area: "DevSecOps",
      description: "Local CI/CD pipeline with Jenkins, Docker, and Kubernetes. Integrated security gates, automated scans, and hardened deployment workflows triggered on git push."
    },
    {
      title: "Remote CI/CD with Flask, Docker & Azure",
      image: cd_cd,
      link: "https://github.com/Joscalion04/CI-CD_Proyecto",
      preview: "https://github.com/Joscalion04/CI-CD_Proyecto",
      status: "Completed",
      area: "DevSecOps",
      description: "Remote CI/CD pipeline using GitHub hooks \u2192 Jenkins \u2192 Azure. Deployed a Dockerized Python Flask app with security controls and automated compliance checks."
    },
    {
      title: "SOC Platform \u2014 Billing & Accounting System",
      image: socImg,
      link: "",
      preview: "https://drive.google.com/file/d/1UmnxfwXnA_mU_yGjjtnvXGayFwNbqYqH/view?usp=drive_link",
      status: "Confidential (Deployed)",
      area: "DevSecOps",
      description: "Secure billing and accounting platform deployed in production. Applied WAF rules, RBAC, secure CI/CD validation, and Wazuh-based monitoring for ongoing security visibility."
    }
  ];
  const areas = [
    {
      id: "secops-pentesting",
      title: "SecOps & Pentesting",
      description: "Security operations, threat hunting, incident response, and offensive security \u2014 translating attack paths into risk-driven remediation.",
      skills: ["CrowdStrike Falcon", "Wazuh", "Splunk", "Threat Hunting", "Incident Response", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "OWASP Top 10", "MITRE ATT&CK"],
      color: "from-red-700 to-orange-600",
      projects: projects.filter((p) => p.area === "SecOps & Pentesting")
    },
    {
      id: "vuln-management",
      title: "Vulnerability Management",
      description: "End-to-end vulnerability and patch lifecycle: risk-based prioritization, remediation planning, compliance governance, and post-patch validation.",
      skills: ["Nessus", "OpenVAS", "CrowdStrike Exposure Mgmt", "CVSS Scoring", "ISO 27001", "NIST SP 800", "PCI DSS", "Windows Hardening", "Linux Hardening"],
      color: "from-purple-700 to-indigo-600",
      projects: []
    },
    {
      id: "devsecops",
      title: "DevSecOps",
      description: "Secure pipeline design, container hardening, Infrastructure as Code, and shifting security left throughout the SDLC.",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "Container Scanning", "Secrets Management", "AWS", "Azure"],
      color: "from-green-700 to-teal-600",
      projects: projects.filter((p) => p.area === "DevSecOps")
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="areas" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">My Expertise</h2> <h3 class="text-4xl md:text-5xl font-medium mb-12">Areas & Projects</h3> ${areas.map((area) => renderTemplate`<details class="mb-8 group bg-[#1414149c] rounded-2xl border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-all"> <summary class="cursor-pointer p-6 flex justify-between items-center"> <div class="flex items-center"> <div${addAttribute(`p-3 rounded-xl bg-gradient-to-r ${area.color} mr-4`, "class")}></div> <h4 class="text-2xl font-semibold">${area.title}</h4> </div> <span class="text-[var(--sec)] text-sm">${area.projects.length > 0 ? `${area.projects.length} projects` : "Operations"}</span> </summary> <div class="px-6 pb-6"> <p class="text-[var(--white-icon)] mb-4">${area.description}</p> <div class="flex flex-wrap gap-2 mb-6"> ${area.skills.map((skill) => renderTemplate`<span class="px-3 py-1 text-sm rounded-full bg-[#ffffff10] text-[var(--white-icon)]">${skill}</span>`)} </div> ${area.projects.length > 0 && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${area.projects.map((project) => renderTemplate`<div class="group"> <a${addAttribute(project.preview || project.link, "href")} target="_blank" rel="noopener noreferrer" class="block"> <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-3"> ${renderComponent($$result, "Image", $$Image, { "src": project.image, "alt": project.title, "class": "w-full h-48 md:h-60 object-cover group-hover:scale-105 transition-transform duration-300" })} </div> <h5 class="text-xl font-semibold">${project.title}</h5> <p class="text-sm text-[var(--white-icon)] py-1">${project.description}</p> <span class="text-sm text-[var(--white-icon)]">${project.status}</span> </a> </div>`)} </div>`} ${area.id === "vuln-management" && renderTemplate`<div class="rounded-2xl bg-[#0d0d0d60] border border-[var(--white-icon-tr)] p-5 text-[var(--white-icon)] text-sm leading-relaxed"> <p class="mb-2 text-[var(--white)] font-medium">Operational work — not open-source</p> <p>Day-to-day VPM operations are performed in enterprise environments under confidentiality agreements. This includes risk-based patch cycles, exploitability triage, asset criticality mapping, and compliance reporting under ISO 27001 and PCI DSS frameworks at SWAT Consulting Services.</p> </div>`} </div> </details>`)} </div> </section> `;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/areas.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      title: "Ethical Hacker / Bug Bounty Researcher",
      company: "HackerOne",
      period: "Jan 2026 \u2013 Present",
      description: [
        "Conducted authorized security assessments against web applications, APIs, cloud environments, and mobile platforms through the HackerOne bug bounty platform.",
        "Identified, validated, and responsibly disclosed vulnerabilities including authentication flaws, access control weaknesses, injection vulnerabilities, business logic issues, and misconfigurations.",
        "Performed reconnaissance, attack surface mapping, and vulnerability research using industry-standard offensive security methodologies.",
        "Developed proof-of-concept demonstrations and detailed technical reports to support vulnerability remediation efforts.",
        "Applied OWASP Top 10, MITRE ATT&CK, and CVSS frameworks to assess vulnerability impact and risk."
      ],
      type: "professional",
      skills: ["Bug Bounty", "Web App Pentesting", "API Security", "OWASP Top 10", "MITRE ATT&CK", "CVSS", "Recon & OSINT", "PoC Development"]
    },
    {
      title: "Cybersecurity Operations Engineer",
      company: "SWAT Consulting Services",
      period: "Nov 2025 \u2013 Present",
      description: [
        "End-to-end ownership of Vulnerability & Patch Management (VPM) across Windows and Linux environments, including risk-based prioritization (CVSS, exploitability, asset criticality) and post-remediation validation.",
        "Design, operation, and continuous improvement of Security Operations (SecOps) leveraging CrowdStrike Falcon (Next-Gen SIEM) with real-time monitoring, incident response, threat hunting, and threat intelligence integration.",
        "Development of SIEM use cases, playbooks, and automated response workflows, enhancing detection capabilities, reducing MTTR, and enabling scalable SOC operations.",
        "Governance of cybersecurity controls aligned with ISO/IEC 27001, NIST SP 800, and PCI DSS in regulated environments.",
        "Execution of attack surface reduction strategies, network segmentation analysis, and validation through adversarial techniques (pentesting & exposure validation).",
        "Acting as Cybersecurity Consultant for third-party incidents: leading incident response, threat hunting, and providing expert guidance across diverse infrastructures and compliance frameworks.",
        "Translation of complex technical findings into risk-driven remediation strategies and executive-level insights."
      ],
      type: "professional",
      skills: ["CrowdStrike Falcon", "SIEM/SOAR", "Vulnerability Management", "Patch Management", "ISO 27001", "NIST SP 800", "PCI DSS", "Incident Response", "Threat Hunting", "SecOps"]
    },
    {
      title: "Security Engineer",
      company: "SINART Digital Systems",
      period: "Feb 2024 \u2013 Jun 2025",
      description: [
        "Administered and secured Active Directory environments, managing IAM processes, privileged access controls, GPOs, and identity governance.",
        "Supported secure software delivery through Security QA activities, secure CI/CD pipeline validation, and security controls across development and deployment lifecycles.",
        "Managed and hardened Dockerized Ubuntu environments and hybrid infrastructures, improving security posture, observability, and operational resilience.",
        "Implemented and maintained WAF protections, firewall policies, DNS security controls, and infrastructure hardening measures to reduce attack surface.",
        "Deployed and administered Sophos security solutions and Wazuh monitoring platforms, enabling centralized security visibility, threat detection, and incident response."
      ],
      type: "professional",
      skills: ["Active Directory", "IAM", "Wazuh", "Sophos", "WAF", "Docker Hardening", "CI/CD Security", "Linux Hardening", "Windows Server"]
    },
    {
      title: "Volunteer Staff",
      company: "Cloud Native Computing Foundation (CNCF)",
      period: "Feb 2025 \u2013 May 2025",
      description: [
        "Supported logistics and coordination for Kubernetes Community Day Costa Rica."
      ],
      type: "extracurricular",
      skills: ["Community Engagement", "Event Organization", "Kubernetes"]
    }
  ];
  const softSkills = [
    "Technical Leadership",
    "Mentoring",
    "Team Collaboration",
    "Effective Communication",
    "Public Speaking",
    "Problem-Solving",
    "Agile Mindset",
    "Adaptability",
    "Empathy",
    "Active Listening",
    "Conflict Resolution",
    "Time Management",
    "Self-Motivation"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">My Journey</h2> <h3 class="text-4xl md:text-5xl font-medium mb-12">Experience</h3> <div class="mb-12"> <h4 class="text-2xl md:text-3xl font-medium mb-8 text-[var(--sec)] shiny-sec">Professional Experience</h4> <div class="space-y-8"> ${experiences.filter((exp) => exp.type === "professional").map((experience) => renderTemplate`<div class="bg-[#1414149c] rounded-2xl p-6 border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-all duration-300"> <div class="flex flex-col md:flex-row md:items-center justify-between mb-4"> <div> <h5 class="text-xl font-semibold">${experience.title}</h5> <p class="text-[var(--white-icon)]">${experience.company}</p> </div> <span class="px-3 py-1 mt-2 md:mt-0 text-sm rounded-full bg-[var(--sec)] bg-opacity-20 text-black"> ${experience.period} </span> </div> <ul class="mb-4 space-y-2"> ${experience.description.map((item) => renderTemplate`<li class="text-[var(--white-icon)] flex items-start"> <span class="text-[var(--sec)] mr-2">•</span> ${item} </li>`)} </ul> <div class="flex flex-wrap gap-2"> ${experience.skills.map((skill) => renderTemplate`<span class="px-3 py-1 text-sm rounded-full bg-[#ffffff10] text-[var(--white-icon)]">${skill}</span>`)} </div> </div>`)} </div> </div> <div class="mb-12"> <h4 class="text-2xl md:text-3xl font-medium mb-8 text-[var(--sec)] shiny-sec">Extracurricular Activities</h4> <div class="space-y-8"> ${experiences.filter((exp) => exp.type === "extracurricular").map((experience) => renderTemplate`<div class="bg-[#1414149c] rounded-2xl p-6 border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-all duration-300"> <div class="flex flex-col md:flex-row md:items-center justify-between mb-4"> <div> <h5 class="text-xl font-semibold">${experience.title}</h5> <p class="text-[var(--white-icon)]">${experience.company}</p> </div> <span class="px-3 py-1 mt-2 md:mt-0 text-sm rounded-full bg-[var(--sec)] bg-opacity-20 text-black"> ${experience.period} </span> </div> <ul class="mb-4 space-y-2"> ${experience.description.map((item) => renderTemplate`<li class="text-[var(--white-icon)] flex items-start"> <span class="text-[var(--sec)] mr-2">•</span> ${item} </li>`)} </ul> <div class="flex flex-wrap gap-2"> ${experience.skills.map((skill) => renderTemplate`<span class="px-3 py-1 text-sm rounded-full bg-[#ffffff10] text-[var(--white-icon)]">${skill}</span>`)} </div> </div>`)} </div> </div> <div> <h4 class="text-2xl md:text-3xl font-medium mb-8 text-[var(--sec)] shiny-sec">Soft Skills</h4> <div class="bg-[#1414149c] rounded-2xl p-6 border border-[var(--white-icon-tr)]"> <div class="flex flex-wrap gap-3"> ${softSkills.map((skill) => renderTemplate`<span class="px-4 py-2 rounded-full bg-[#ffffff10] text-[var(--white-icon)] hover:bg-[var(--sec)] hover:bg-opacity-20 hover:text-[var(--sec)] transition-all duration-300"> ${skill} </span>`)} </div> </div> </div> </div> </section> `;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/experience.astro", void 0);

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

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer id="contact" class="w-full py-12 border-t border-[#ffffff10]"> <div class="max-w-5xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10"> <div class="flex flex-col lg:items-start items-center space-y-6 gap-9"> <div class="flex space-x-6 sm:space-x-8"> ${[
    {
      href: "//github.com/Joscalion04",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>',
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/joscalion/",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>',
      label: "LinkedIn"
    },
    {
      href: "mailto:joscalion04@gmail.com",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/></svg>',
      label: "Email"
    }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" class="flex flex-col items-center group"${addAttribute(link.label, "aria-label")}> <div class="text-[var(--white-icon)] hover:text-[var(--white)] transition duration-300 ease-in-out"> <div>${unescapeHTML(link.icon)}</div> </div> </a>`)} </div> ${renderComponent($$result, "LikeButton", LikeButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/joseph/Documents/Projects/Portfolio/src/React/LikeButton.tsx", "client:component-export": "default" })} </div> <div class="flex flex-col items-center md:items-start space-y-6"> <div class="grid grid-cols-1 gap-3 w-full max-w-xs"> ${[
    {
      desc: "Built with",
      name: "Astro",
      icon: "/svg/astro.svg",
      alt: "Astro Logo"
    },
    {
      desc: "Styled with",
      name: "TailwindCSS",
      icon: "/svg/tailwindcss.svg",
      alt: "TailwindCSS Logo"
    },
    {
      desc: "Deployed on",
      name: "Vercel",
      icon: "/svg/vercel.svg",
      alt: "Vercel Logo"
    }
  ].map((tech) => renderTemplate`<div class="flex items-center space-x-3"> <span class="text-[var(--white-icon)] text-sm">${tech.desc}</span> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.alt, "alt")} class="h-5 w-5 object-contain filter brightness-0 invert opacity-50" loading="lazy"> <span class="text-[var(--white-icon)] text-sm">${tech.name}</span> </div>`)} </div> </div> <div class="flex flex-col items-center md:items-start space-y-6"> <h4 class="text-lg font-semibold text-[var(--white)]">Development Areas</h4> <div class="flex flex-wrap gap-2 justify-center md:justify-start"> <span class="px-3 py-1 text-sm rounded-full bg-purple-500 bg-opacity-20 text-purple-300">Cybersecurity</span> <span class="px-3 py-1 text-sm rounded-full bg-green-500 bg-opacity-20 text-green-300">DevOps</span> <span class="px-3 py-1 text-sm rounded-full bg-blue-500 bg-opacity-20 text-blue-300">Development</span> </div> </div> </div> <div class="mt-12 pt-8 border-t border-[#ffffff10]"> <p class="text-center text-sm text-[var(--white-icon)] space-y-2"> <span class="block sm:inline">
Copyright © 2025 <a href="//github.com/Joscalion04">Joscalion04</a>. All rights reserved.
</span> </p> </div> </div> </footer>`;
}, "/home/joseph/Documents/Projects/Portfolio/src/components/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Joseph Leon" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Areas", $$Areas, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Certificates", $$Certificates, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
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
