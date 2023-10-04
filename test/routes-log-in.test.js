const test = require("node:test");
const assert = require("node:assert");
const bcrypt = require("bcryptjs");
const { reset, request, get_sid } = require("./helpers.js");
const { createUser } = require(`../src/model/user.js`);
const { getSession } = require(`../src/model/session.js`);

test("POST /log-in creates new session", async () => {
    reset();
    const hash = await bcrypt.hash("abc", 12);
    createUser('helen', hash, 'image.jpg', 1, 'hopethisworks');
  
    const { status, headers } = await request("/log-in", {
        method: "POST",
        body: "username=helen&password=abc&imageURL=image.jpg&isWizard=1&bio=hopethisworks",
        redirect: "manual",
        headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  
    assert.equal(
    status,
    302,
    `Expected log in to redirect, but got status: ${status}`
    );

    assert.equal(
    headers.location,
    "/",
    `Expected log in to redirect to home, but got location header: ${headers.location}`
    );
    assert.ok(
    headers["set-cookie"]?.startsWith("sid="),
    `Expected log in to set cookie named 'sid', but set-cookie header was: ${headers["set-cookie"]}`
    );

    const sid = get_sid(headers);
    const session = getSession(sid);
    assert.ok(
    session,
    `Expected log in to create a new session created in the DB`
    );

    reset()

});
  
test("POST /log-in with wrong email returns error", async () => {
    reset();
    const hash = await bcrypt.hash("abc", 12);
    createUser('helen', hash, 'image.jpg', 1, 'hopethisworks');
  
    const { status } = await request("/log-in", {
        method: "POST",
        body: "username=mirren&password=abc&imageURL=image.jpg&isWizard=1&bio=hopethisworks",
        redirect: "manual",
        headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  
    assert.equal(
      status,
      400,
      `Expected log in with wrong email to return 400 status, but got: ${status}`
    );
});
  
test("POST /log-in with incorrect password returns error", async () => {
    reset();
    const hash = await bcrypt.hash("abc", 12);
    createUser('helen', hash, 'image.jpg', 1, 'hopethisworks');
  
    const { status } = await request("/log-in", {
        method: "POST",
        body: "username=helen&password=notabc&imageURL=image.jpg&isWizard=1&bio=hopethisworks",
        redirect: "manual",
        headers: { "content-type": "application/x-www-form-urlencoded" },
    });
  
    assert.equal(
      status,
      400,
      `Expected log in with wrong pw to return 400 status, but got: ${status}`
    );
    reset()
});
  