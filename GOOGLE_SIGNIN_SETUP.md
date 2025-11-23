# Google Sign-In Setup Guide

This guide will help you set up Google OAuth authentication for your website.

## Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select existing one)
   - Click on the project dropdown at the top
   - Click "New Project"
   - Enter a project name (e.g., "FlexWork Website")
   - Click "Create"

3. **Enable APIs & Services**
   - Go to **APIs & Services** → **Credentials**
   - Click **"Create Credentials"** → **"OAuth Client ID"**

4. **Configure OAuth Consent Screen** (if prompted)
   - User Type: Select **External**
   - Click "Create"
   - Fill in:
     - App name: `FlexWork Agency`
     - User support email: `shauryayadav1842@gmail.com`
     - Developer contact email: `shauryayadav1842@gmail.com`
   - Click "Save and Continue"
   - Skip scopes (click "Save and Continue")
   - Skip test users (click "Save and Continue")

5. **Create OAuth Client ID**
   - Application type: **Web application**
   - Name: `FlexWork Website`
   
6. **Add Authorized JavaScript Origins**
   Add these URLs:
   ```
   http://localhost
   http://127.0.0.1
   https://som121vk.github.io
   ```

7. **Add Authorized Redirect URIs**
   ```
   http://localhost/
   https://som121vk.github.io/aspirine/
   ```

8. **Copy Your Client ID**
   - After creating, you'll see your Client ID
   - It looks like: `123456789-abcdefg.apps.googleusercontent.com`
   - **COPY THIS!** You'll need it in the next step

## Step 2: Update Your Website Code

1. **Open the file:** `js/main.js`

2. **Find this line** (near the end of the file):
   ```javascript
   const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
   ```

3. **Replace it with YOUR actual Client ID:**
   ```javascript
   const GOOGLE_CLIENT_ID = '123456789-abcdefg.apps.googleusercontent.com';
   ```

## Step 3: Test Locally

1. **You MUST use a local server** (Google Sign-In doesn't work with `file://`)

   **Option A: Using Python** (if you have Python installed)
   ```bash
   # For Python 3
   python -m http.server 8000
   
   # For Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then open: http://localhost:8000

   **Option B: Using Node.js** (if you have npm installed)
   ```bash
   npx http-server -p 8000
   ```
   Then open: http://localhost:8000

   **Option C: Using VS Code**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Click "Open with Live Server"

2. **Test the Login Button**
   - Click the "Login" button in the navbar
   - You should see a Google Sign-In button
   - Click it and sign in with your Google account

## Step 4: Deploy to GitHub Pages

Your code is already set up to work on GitHub Pages!

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Add Google Sign-In integration"
   git push origin main
   ```

2. **Enable GitHub Pages** (if not already enabled):
   - Go to: https://github.com/som121vk/aspirine/settings/pages
   - Source: Select **main** branch
   - Click **Save**

3. **Wait a few minutes**, then visit:
   https://som121vk.github.io/aspirine/

## How It Works

When a user clicks the Google Sign-In button:

1. Google handles the authentication
2. User selects their Google account
3. Your website receives a JWT token
4. The token contains user info (name, email, picture)
5. The `handleGoogleSignIn()` function processes it
6. User is signed in!

## What Happens After Sign-In?

Currently, the code:
- Displays a welcome message with the user's name and email
- Logs user data to the console
- Closes the login modal

You can customize this in `js/main.js` by editing the `handleGoogleSignIn()` function.

### Example: Redirect to Dashboard
```javascript
function handleGoogleSignIn(response) {
    const userData = parseJwt(response.credential);
    
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Redirect to dashboard
    window.location.href = 'client-dashboard.html';
}
```

## Troubleshooting

### "Google Sign-In button doesn't appear"
- Check the browser console for errors
- Make sure you replaced `YOUR_GOOGLE_CLIENT_ID` with your actual Client ID
- Ensure you're using a web server (not opening the file directly)

### "Sign-In fails with redirect_uri_mismatch error"
- Double-check your Authorized Redirect URIs in Google Cloud Console
- Make sure the URL matches exactly (including http/https and trailing slashes)

### "Invalid Client ID"
- Verify you copied the entire Client ID correctly
- Check for extra spaces or characters

## Security Note

⚠️ **Never share your Client Secret** (if you see one). The Client ID is safe to use in client-side code.

## Need Help?

Contact: shauryayadav1842@gmail.com

---

**Your website is now ready with Google Sign-In! 🎉**
