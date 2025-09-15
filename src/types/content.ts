export type HomeHeroSection = {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string; 
};

export type SiteContent = {
  HomeHeroSection: HomeHeroSection;
};

export type HomeJoinWorkWithUs = {
  JoinUsTitle: string;
  JoinUsDescription: string;
  JoinUsButtonText: string;
  JoinUsButtonLink: string;
  WorkWithUsTitle: string;
  WorkWithUsDescription: string;
  WorkWithUsButtonText: string;
  WorkWithUsButtonLink: string;
};

export type SiteContentExtended = SiteContent & {
  HomeJoinWorkWithUs: HomeJoinWorkWithUs;
};

export type HomeContactUsBanner = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  rightImage: string;
};

export type SiteContentWithBanner = SiteContentExtended & {
  HomeContactUsBanner: HomeContactUsBanner;
};
