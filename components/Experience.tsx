import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
            <React.Fragment key={index}>
                <VerticalTimelineElement>
                    <h3>{experience.title}</h3>
                    <p>{experience.location}</p>
                </VerticalTimelineElement>
            </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
