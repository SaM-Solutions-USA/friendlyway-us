import assert from "node:assert/strict";
import test from "node:test";

import {
  getActiveNavigationIds,
  isInternalHref,
  isPathActive,
  isTrustedExternalHref,
} from "../lib/navigation.ts";

const navigation = [
  {
    id: "solutions",
    children: [
      {
        id: "visitor-security",
        children: [{ id: "visitor-management", href: "/visitor-management-solution" }],
      },
    ],
  },
  { id: "about", href: "/about-us" },
] as const;

test("isPathActive matches a route and its descendants", () => {
  assert.equal(isPathActive("/about-us", "/about-us/"), true);
  assert.equal(isPathActive("/about-us", "/about-us/team"), true);
  assert.equal(isPathActive("/about-us", "/contact-us"), false);
  assert.equal(isPathActive("/", "/about-us"), false);
});

test("getActiveNavigationIds includes each active ancestor", () => {
  const activeIds = getActiveNavigationIds(navigation, "/visitor-management-solution");
  assert.deepEqual([...activeIds].sort(), ["solutions", "visitor-management", "visitor-security"]);
});

test("link helpers distinguish internal and approved external destinations", () => {
  assert.equal(isInternalHref("/about-us"), true);
  assert.equal(isInternalHref("//untrusted.example"), false);
  assert.equal(isTrustedExternalHref("https://helpdesk.friendlyway.com/en/support/home"), true);
  assert.equal(isTrustedExternalHref("http://helpdesk.friendlyway.com/en/support/home"), false);
  assert.equal(isTrustedExternalHref("https://untrusted.example"), false);
});