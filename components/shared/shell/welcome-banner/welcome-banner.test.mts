import assert from "node:assert/strict";
import test from "node:test";

import {
  createBannerDismissal,
  isBannerDismissed,
} from "./welcome-banner-state.ts";

test("a matching release keeps the welcome banner dismissed", () => {
  const stored = createBannerDismissal("1785931796", 1_785_931_796);
  assert.equal(isBannerDismissed(stored, "1785931796"), true);
});

test("a stale, malformed, or absent dismissal shows the welcome banner", () => {
  assert.equal(isBannerDismissed(createBannerDismissal("stale-release", 0), "1785931796"), false);
  assert.equal(isBannerDismissed("not valid json", "1785931796"), false);
  assert.equal(isBannerDismissed(null, "1785931796"), false);
});