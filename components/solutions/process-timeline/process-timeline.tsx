import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./process-timeline.module.css";

export interface ProcessTimelineStep {
  readonly title: string;
  readonly description: string;
}

export interface ProcessTimelineProps {
  readonly heading: string;
  readonly steps: readonly ProcessTimelineStep[];
}

export function ProcessTimeline({ heading, steps }: ProcessTimelineProps) {
  const headingId = "process-timeline-heading";

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      </div>
      <ol aria-labelledby={headingId} className={styles.list}>
        {steps.map((step, index) => (
          <li className={styles.item} data-reversed={index % 2 === 1 || undefined} key={step.title}>
            <span aria-hidden="true" className={styles.counter}>{index + 1}</span>
            <div className={styles.content}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}