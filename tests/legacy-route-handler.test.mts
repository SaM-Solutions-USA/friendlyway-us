// Focused tests for the legacy route handlers (Node built-in runner). Run with:
// npm run test:legacy-route
//
// These import route handlers directly and invoke GET/HEAD with real Request
// objects. Tests cover the non-root catch-all handler
// (`app/[...slug]/route.ts`); `/` is now a native page.

import assert from "node:assert/strict";
import test from "node:test";

import {
  GET as SLUG_GET,
  HEAD as SLUG_HEAD,
} from "../app/[...slug]/route.ts";

function requestFor(pathname: string): Request {
  return new Request(`http://localhost:3000${pathname}`);
}

test("legacy catch-all route handler", async (t) => {
  await t.test("GET serves a real non-root legacy document raw as text/html", async () => {
    const response = await SLUG_GET(requestFor("/about-us"));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "text/html; charset=utf-8");

    const body = await response.text();
    // Raw legacy markup markers: the original document is returned untouched.
    assert.match(body, /<!DOCTYPE html>/i);
    assert.match(body, /<html[\s>]/i);
    assert.match(body, /<\/html>\s*$/i);
    // Legacy wp-content asset links are preserved exactly as stored.
    assert.match(body, /wp-content/);
  });

  await t.test("HEAD returns 200 with content type but no body bytes", async () => {
    const response = await SLUG_HEAD(requestFor("/about-us"));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "text/html; charset=utf-8");

    const body = await response.text();
    assert.equal(body, "");
  });

  await t.test("GET returns a bare 404 for a missing non-root path", async () => {
    const response = await SLUG_GET(
      requestFor("/this-route-handler-test-target-does-not-exist-9d4f"),
    );
    assert.equal(response.status, 404);
    const body = await response.text();
    assert.equal(body, "");
  });

  await t.test("HEAD returns a bare 404 for a missing non-root path", async () => {
    const response = await SLUG_HEAD(
      requestFor("/this-route-handler-test-target-does-not-exist-9d4f"),
    );
    assert.equal(response.status, 404);
    const body = await response.text();
    assert.equal(body, "");
  });
});
