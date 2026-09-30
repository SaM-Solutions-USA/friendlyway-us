"use client";

import { useState } from "react";

import { CustomerStoryGrid, type CustomerStoryGridProps } from "./customer-story-grid";
import styles from "./customer-story-grid.module.css";

export interface FilteredCustomerStoryGridProps extends Omit<CustomerStoryGridProps, "controls" | "filtered" | "stories"> {
  readonly categories: readonly string[];
  readonly stories: readonly (CustomerStoryGridProps["stories"][number] & { readonly category: string })[];
}

export function FilteredCustomerStoryGrid({ heading, description, categories, stories }: FilteredCustomerStoryGridProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const controls = (
    <div aria-label="Filter customer stories by industry" className={styles.filters} role="group">
      {categories.map((category) => (
        <button
          aria-pressed={category === activeCategory}
          className={styles.filter}
          key={category}
          onClick={() => setActiveCategory(category)}
          type="button"
        >{category}</button>
      ))}
    </div>
  );

  return <CustomerStoryGrid heading={heading} description={description} controls={controls} filtered stories={stories.filter((story) => story.category === activeCategory)} />;
}