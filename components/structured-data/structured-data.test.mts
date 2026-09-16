import assert from "node:assert/strict";
import test from "node:test";

import { serializeStructuredData } from "./serialize-structured-data.ts";

test("StructuredData serializes escaped JSON-LD", () => {
  const serialized = serializeStructuredData({
    "@context": "https://schema.org",
    name: "<script>",
  });

  assert.match(serialized, /\\u003cscript>/);
  assert.doesNotMatch(serialized, /name":"<script>/);
});