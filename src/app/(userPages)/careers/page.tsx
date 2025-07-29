import React from "react";
import PageHeading from "../components/common/page-heading";
import CompanyPurpose from "./_components/company-purpose";
import ColleagueStories from "./_components/colleague-stories";
import ContactUsBanner from "../components/common/contact-us-banner";
import ParagraphSection from "../components/common/paragraph-section";
import CareerHero from "./_components/careers-hero";

const CareersPage = () => {
  return (
    <>
      <PageHeading currentPage="Careers" />
      <CareerHero />
      <ParagraphSection
        para1="Our purpose is to help people, businesses and places to achieve their growth potential and the same applies to our
              diverse and skilled workforce. After all, we know just how important it is to bring together different ideas and
              experiences to boost and nurture innovation, performance and creativity."
        para2="As an Investors in People 'Gold' accredited employer, we recognise the importance of developing talent – so you know you’ll be supported to
              achieve more, both professionally and personally."
      />
      <CompanyPurpose />
      <ColleagueStories />
      <ContactUsBanner />
    </>
  );
};

export default CareersPage;
