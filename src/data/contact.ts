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
    href: "https://wa.me/09668264925", // Replace with your actual WhatsApp number
    label: "+63 966-826-4925"
  },
  {
    id: 3,
    title: "LinkedIn",
    subtitle: "professional network",
    description: "Connect with me on LinkedIn to see updates and project stories.",
    href: "https://www.linkedin.com/in/dominic-ian-bravo-a773a93b2/",
    label: "https://www.linkedin.com/in/dominic-ian-bravo-a773a93b2/"
  },
  {
    id: 4,
    title: "GitHub",
    subtitle: "code portfolio",
    description: "Browse source code and open-source contributions on GitHub.",
    href: "https://github.com/Dominic-Bravo",
    label: "github.com/Dominic-Ian-Bravo"
  }
];
