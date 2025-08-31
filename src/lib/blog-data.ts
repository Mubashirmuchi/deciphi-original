export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cybersecurity-best-practices-2024",
    title: "Essential Cybersecurity Best Practices for 2024",
    excerpt: "Discover the latest cybersecurity strategies to protect your business from evolving threats in 2024.",
    content: `
# Essential Cybersecurity Best Practices for 2024

As cyber threats continue to evolve, businesses must stay ahead with robust security measures. Here are the essential practices every organization should implement:

## 1. Multi-Factor Authentication (MFA)
Implement MFA across all systems to add an extra layer of security beyond passwords.

## 2. Regular Security Audits
Conduct quarterly security assessments to identify vulnerabilities before attackers do.

## 3. Employee Training
Regular cybersecurity awareness training is crucial as human error remains a top attack vector.

## 4. Zero Trust Architecture
Adopt a "never trust, always verify" approach to network security.

## 5. Incident Response Planning
Have a comprehensive incident response plan ready for when breaches occur.

Stay vigilant and keep your defenses updated!
    `,
    date: "2024-08-30",
    author: "Deciphi Security Team",
    image: "/images/img_cybersecurity_1.png",
    tags: ["cybersecurity", "best-practices", "2024"]
  },
  {
    slug: "network-security-fundamentals",
    title: "Network Security Fundamentals Every Business Should Know",
    excerpt: "Learn the core principles of network security and how to implement them effectively.",
    content: `
# Network Security Fundamentals

Network security forms the backbone of any comprehensive cybersecurity strategy. Understanding these fundamentals is crucial for protecting your business.

## Firewalls and Network Segmentation
Properly configured firewalls and network segmentation can prevent lateral movement of threats.

## VPN Security
Secure remote access through properly configured VPNs is essential in today's hybrid work environment.

## Network Monitoring
Continuous monitoring helps detect anomalies and potential threats in real-time.

## Access Controls
Implement strict access controls to limit who can access sensitive network resources.
    `,
    date: "2024-08-25",
    author: "Deciphi Security Team",
    image: "/images/img_secure_database.png",
    tags: ["network-security", "fundamentals", "business"]
  },
  {
    slug: "penetration-testing-guide",
    title: "Complete Guide to Penetration Testing",
    excerpt: "Everything you need to know about penetration testing and its importance for your security posture.",
    content: `
# Complete Guide to Penetration Testing

Penetration testing is a critical component of a comprehensive security strategy. Here's what you need to know.

## What is Penetration Testing?
Penetration testing simulates real-world attacks to identify vulnerabilities in your systems.

## Types of Penetration Testing
- Network penetration testing
- Web application testing
- Social engineering testing
- Physical security testing

## Benefits
- Identify vulnerabilities before attackers do
- Validate security controls
- Meet compliance requirements
- Improve incident response

## When to Conduct Pen Tests
Regular testing should be conducted quarterly or after major system changes.
    `,
    date: "2024-08-20",
    author: "Deciphi Security Team",
    image: "/images/img_penetration_testing.png",
    tags: ["penetration-testing", "security-assessment", "vulnerability"]
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
