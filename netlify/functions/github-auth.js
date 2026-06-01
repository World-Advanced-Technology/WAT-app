/*
 * GitHub OAuth code exchange for WAT social sign-in.
 *
 * The browser cannot do this step because it requires the GitHub
 * client secret. This serverless function takes the temporary ?code,
 * swaps it for an access token, fetches the user's profile + primary
 * email, and returns a small JSON object the front-end can use.
 *
 * Required Netlify environment variables (Site settings → Environment):
 *   GITHUB_CLIENT_ID      – your GitHub OAuth App client ID
 *   GITHUB_CLIENT_SECRET  – your GitHub OAuth App client secret
 *
 * Runtime: Netlify uses Node 18+ which provides a global `fetch`.
 */
exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const code = event.queryStringParameters && event.queryStringParameters.code;
  if (!code) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'missing_code' }) };
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'server_not_configured' }) };
  }

  try {
    // 1) Exchange the code for an access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const tokenJson = await tokenRes.json();
    const accessToken = tokenJson.access_token;
    if (!accessToken) {
      return { statusCode: 401, headers, body: JSON.stringify({ error: 'token_exchange_failed' }) };
    }

    const ghHeaders = {
      Authorization: 'token ' + accessToken,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'WAT-Website',
    };

    // 2) Fetch the user profile
    const userRes = await fetch('https://api.github.com/user', { headers: ghHeaders });
    const user = await userRes.json();

    // 3) Email may be private — fetch the primary verified email if needed
    let email = user.email;
    if (!email) {
      try {
        const emailRes = await fetch('https://api.github.com/user/emails', { headers: ghHeaders });
        const emails = await emailRes.json();
        if (Array.isArray(emails) && emails.length) {
          const primary = emails.find((e) => e.primary && e.verified) || emails.find((e) => e.verified) || emails[0];
          email = primary && primary.email;
        }
      } catch (e) { /* non-fatal */ }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        name: user.name || user.login,
        email: email || '',
        avatar: user.avatar_url || '',
        provider: 'github',
      }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'exception', detail: String(err) }) };
  }
};
