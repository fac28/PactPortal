const test = require("node:test");
const assert = require("node:assert");
const { resetDatabase } = require("../src/database/reset.js");

test("testing is working", () => {
    resetDatabase();
});