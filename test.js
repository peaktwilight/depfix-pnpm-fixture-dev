const test = require("node:test");
const assert = require("node:assert");
const { shout } = require("./index");
test("shouts", () => assert.strictEqual(shout("hi"), "HI"));
