"use client";
import React from "react";
import SectionHeader from "./sectionHeader";
import Image from "next/image";
import Container from "./spacing";

export default function AboutOurStory({
  label = "Our Story",
  title = "Building Better Hiring Since 2019",
  align = "left",
  subtitle = "Founded by a team of HR professionals and tech innovators, Hirezy was born from a simple observation: recruitment was broken. Too many tools, too much complexity, and not enough focus on what matters – finding great people.",

  imageSrc = "https://ik.imagekit.io/75zj3bigp/default-image.jpg",
  imageAlt = "About image",
  imageWidth = 571,
  imageHeight = 520,
}) {
  return (
    <Container className="about-spacing-two" variant="primary">
      <div className="about-container">
        <div className="about-heading">
          <SectionHeader
            label={label}
            title={title}
            align={align}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            subtitle={subtitle}
          />
        </div>

        <div className="about-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </Container>
  );
}
