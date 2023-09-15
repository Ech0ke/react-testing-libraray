import * as matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { mockServer } from "./mockServer";

expect.extend(matchers);

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
});

afterAll(() => {
  mockServer.close();
});
