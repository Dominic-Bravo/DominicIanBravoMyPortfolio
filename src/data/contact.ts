export interface ContactMethod {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  label: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "Email",
    subtitle: "direct email",
    description: "Reach out for freelance work, collaborations, or general questions.",
    href: "mailto:dominicianbravo017@gmail.com",
    label: "dominicianbravo017@gmail.com"
  },
  {
    id: 2,
    title: "WhatsApp",
    subtitle: "instant messaging",
    description: "Chat with me directly on WhatsApp for quick responses.",
    href: "https://wa.me/1234567890", // Replace with your actual WhatsApp number
    label: "+1 (234) 567-8900"
  },
  {
    id: 3,
    title: "Facebook",
    subtitle: "social network",
    description: "Follow me on Facebook for updates and personal posts.",
    href: "https://www.facebook.com/yourprofile", // Replace with your actual Facebook profile
    label: "facebook.com/yourprofile"
  },
  {
    id: 4,
    title: "Instagram",
    subtitle: "visual stories",
    description: "Check out my Instagram for behind-the-scenes and creative content.",
    href: "https://www.instagram.com/yourprofile", // Replace with your actual Instagram handle
    label: "@yourprofile"
  },
  {
    id: 5,
    title: "TikTok",
    subtitle: "short videos",
    description: "Watch fun short videos and tech tips on TikTok.",
    href: "https://www.tiktok.com/@yourprofile", // Replace with your actual TikTok handle
    label: "@yourprofile"
  },
  {
    id: 6,
    title: "LinkedIn",
    subtitle: "professional network",
    description: "Connect with me on LinkedIn to see updates and project stories.",
    href: "https://www.linkedin.com/in/your-profile",
    label: "linkedin.com/in/your-profile"
  },
  {
    id: 7,
    title: "GitHub",
    subtitle: "code portfolio",
    description: "Browse source code and open-source contributions on GitHub.",
    href: "https://github.com/Dominic-Bravo",
    label: "github.com/Dominic-Ian-Bravo"
  }
];
