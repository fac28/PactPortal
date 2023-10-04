const test = require("node:test");
const assert = require("node:assert");
const { reset, request, get_sid } = require("./helpers.js");
const { getUserByUsername } = require(`../src/model/user.js`);
const { getSession } = require(`../src/model/session.js`);

test("POST /sign-up creates new user", async () => {
    reset();

    const { status, headers } = await request("/sign-up", {
      method: "POST",
      body: "username=helen&password=123&imageURL=image.jpg&isWizard=1&bio=hopethisworks",
      redirect: "manual",
      headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    
    assert.equal(
      status,
      302,
      `Expected sign up to redirect, but got status: ${status}`
    );

    assert.equal(
      headers.location,
      "/",
      `Expected sign up to redirect to home page, but got location header: ${headers.location}`
    );

    assert.ok(
      headers["set-cookie"]?.startsWith("sid="),
      `Expected sign up to set cookie named 'sid', but set-cookie header was: ${headers["set-cookie"]}`
    );

    const sid = get_sid(headers);
    const session = getSession(sid);
    assert.ok(
      session,
      `Expected sign up to create a new session created in the DB`
    );

    const user = getUserByUsername("helen");
    assert.ok(
      user.hash.startsWith("$2a$12$"),
      `Expected user's password to be hashed with BCrypt, but got: ${user.hash}`
    );

    reset()
  });
  