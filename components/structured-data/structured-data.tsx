import { serializeStructuredData } from "./serialize-structured-data";

export interface StructuredDataProps {
  readonly data: unknown;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(data) }}
    />
  );
}