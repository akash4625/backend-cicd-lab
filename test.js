
const test = require("node:test");
const assert = require("node:assert/strict");
const { getStatus } = require("./server");

test("Backend returns the correct status", () => {
  const result = getStatus();

  assert.equal(
    result.message,
    "Backend application is running"
  );

  assert.equal(result.status, "success");
});
