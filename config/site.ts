export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

const siteConfig: SiteConfig = {
  siteName: "Tech blog",
  description:
    "A minimal and lovely tech blog which shares experiences around the world!",
  currentlyAt: "India",
  socialLinks: {
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/@makrdev",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
  },
};

export default siteConfig;
