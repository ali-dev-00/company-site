import React from "react";
import PageHeading from "../components/common/page-heading";
import CompanyPurpose from "./_components/company-purpose";
import ColleagueStories from "./_components/colleague-stories";
import ContactUsBanner from "../components/common/contact-us-banner";
import ParagraphSection from "../components/common/paragraph-section";
import CareerHero from "./_components/careers-hero";
import { CareerAwards } from "./_components/career-awards";

const CareersPage = () => {
  return (
    <>
      <PageHeading currentPage="Careers" />
      <CareerHero />
      <ParagraphSection
        para1="Our goal is to empower people, businesses, and places by providing them with skills and training.' Our team is similarly impacted. We recognize the significance of combining diverse ideas and experiences to promote innovation and creativity."
        para2="We're committed to developing your talent and assisting you in reaching higher levels, both professionally and personally."
      />
      <CompanyPurpose />
      <CareerAwards />
      <ColleagueStories />
      <ContactUsBanner />
    </>
  );
};

export default CareersPage;
