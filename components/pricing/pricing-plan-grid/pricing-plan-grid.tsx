import styles from "./pricing-plan-grid.module.css";

interface Plan {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price?: string;
  readonly pricePrefix?: string;
  readonly period?: string;
  readonly bestseller?: boolean;
  readonly features: readonly string[];
  readonly ctaLabel: string;
}

export interface PricingPlanGridProps {
  readonly introduction: {
    readonly heading: string;
    readonly description: string;
  };
  readonly plans: readonly Plan[];
  readonly billingNote: string;
}

export function PricingPlanGrid({
  introduction,
  plans,
  billingNote,
}: PricingPlanGridProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>{introduction.heading}</h1>
        </div>
        <div className={styles.description}>
          <p>{introduction.description}</p>
        </div>
      </header>
      <div className={styles.grid}>
        {plans.map((plan) => (
          <article
            className={`${styles.plan} ${plan.bestseller ? styles.featured : ""}`}
            key={plan.id}
          >
            {plan.bestseller ? (
              <p className={styles.badge}>Bestseller</p>
            ) : null}
            <div className={styles.name}>
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
            </div>
            <div className={styles.price}>
              {plan.pricePrefix ? <span className={styles.pricePrefix}>{plan.pricePrefix}</span> : null}
              <strong className={plan.price ? styles.tariff : styles.customPrice}>{plan.price ?? "Custom pricing"}</strong>
              {plan.period ? <span>{plan.period}</span> : null}
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className={styles.button} href="#block-formback_view">
              {plan.ctaLabel}
            </a>
          </article>
        ))}
      </div>
      <p className={styles.note}>{billingNote}</p>
    </>
  );
}
