import Image from "next/image";

import { SectionHeading } from "@/components/shared/typography/section-heading";

import styles from "./customer-story-grid.module.css";

export interface CustomerStoryGridProps {
  readonly heading: string;
  readonly stories: readonly {
    readonly title: string;
    readonly image: {
      readonly src: string;
      readonly width: number;
      readonly height: number;
      readonly alt: string;
    };
    readonly href?: string;
  }[];
}

export function CustomerStoryGrid({ heading, stories }: CustomerStoryGridProps) {
  const headingId = "customer-story-grid-heading";

  return (
    <div className={styles.root}>
      <SectionHeading as="h2" id={headingId}>{heading}</SectionHeading>
      <ul aria-labelledby={headingId} className={styles.grid}>
        {stories.map((story) => (
          <li className={styles.item} key={story.title}>
            {story.href ? (
              <a className={styles.story} href={story.href}>
                <StoryContent story={story} />
              </a>
            ) : (
              <div className={styles.story}>
                <StoryContent story={story} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryContent({ story }: { readonly story: CustomerStoryGridProps["stories"][number] }) {
  return (
    <>
      <Image className={styles.image} src={story.image.src} width={story.image.width} height={story.image.height} alt={story.image.alt} />
      <h3 className={styles.title}>{story.title}</h3>
    </>
  );
}