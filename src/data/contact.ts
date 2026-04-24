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
    href: "mailto:hello@yourdomain.com",
    label: "hello@yourdomain.com"
  },
  {
    id: 2,
    title: "LinkedIn",
    subtitle: "professional network",
    description: "Connect with me on LinkedIn to see updates and project stories.",
    href: "https://www.linkedin.com/in/your-profile",
    label: "linkedin.com/in/your-profile"
  },
  {
    id: 3,
    title: "GitHub",
    subtitle: "code portfolio",
    description: "Browse source code and open-source contributions on GitHub.",
    href: "https://github.com/Dominic-Bravo",
    label: "github.com/Dominic-Ian-Bravo"
  }
];
