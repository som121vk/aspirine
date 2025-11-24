# 🔐 Google OAuth Setup Guide for Aspirine

## Overview
This guide will help you configure Google OAuth for your Aspirine website, allowing users to sign in with their Google accounts.

---

## 📋 Prerequisites

- Google Account
- Your website URL: `https://som121vk.github.io/aspirine/`
- Admin access to Google Cloud Console

---

## 🚀 Step-by-Step Setup

### Step 1: Create Google Cloud Project

1. **Go to Google Cloud Console:**
   ```
   https://console.cloud.google.com/
   ```

2. **Create a new project:**
   - Click "Select a project" (top bar)
   - Click "New Project"
   - Project name: `Aspirine`
   - Click "Create"

3. **Wait for project creation** (takes a few seconds)

---

### Step 2: Enable Google+ API

1. **Navigate to APIs & Services:**
   - Click hamburger menu (☰)
   - Select "APIs & Services" → "Library"

2. **Search and enable:**
   - Search for "Google+ API"
   - Click on it
   - Click "Enable"

---

### Step 3: Configure OAuth Consent Screen

1. **Go to OAuth consent screen:**
   - Click "APIs & Services" → "OAuth consent screen"

2. **Choose User Type:**
   - Select **"External"**
   - Click "Create"

3. **Fill in App Information:**
   ```
   App name: Aspirine
   User support email: shauryayadav1842@gmail.com
   App logo: (optional - upload your logo)
   ```

4. **App Domain (optional but recommended):**
   ```
   Application home page: https://som121vk.github.io/aspirine/
   Application privacy policy: https://som121vk.github.io/aspirine/#privacy
   Application terms of service: https://som121vk.github.io/aspirine/#terms
   ```

5. **Developer contact information:**
   ```
   Email: shauryayadav1842@gmail.com
   ```

6. **Click "Save and Continue"**

7. **Scopes:**
   - Click "Add or Remove Scopes"
   - Select:
     - `email`
     - `profile`
     - `openid`
   - Click "Update"
   - Click "Save and Continue"

8. **Test users (for testing):**
   - Click "Add Users"
   - Add your email: `shauryayadav1842@gmail.com`
   - Click "Save and Continue"

9. **Summary:**
   - Review and click "Back to Dashboard"

---

### Step 4: Create OAuth 2.0 Credentials

1. **Go to Credentials:**
   - Click "APIs & Services" → "Credentials"

2. **Create credentials:**
   - Click "Create Credentials"
   - Select "OAuth client ID"

3. **Configure OAuth client:**
   - Application type: **Web application**
   - Name: `Aspirine Web Client`

4. **Authorized JavaScript origins:**
   ```
   https://som121vk.github.io
   http://localhost
   http://127.0.0.1
   ```
   
   Click "Add URI" for each one.

5. **Authorized redirect URIs:**
   ```
   https://som121vk.github.io/aspirine/
   https://som121vk.github.io/aspirine/index.html
   https://som121vk.github.io/aspirine/client-dashboard.html
   http://localhost/aspirine/
   ```
   
   Click "Add URI" for each one.

6. **Click "Create"**

7. **Copy your credentials:**
   - You'll see a popup with:
     - **Client ID** (looks like: `123456789-abc123.apps.googleusercontent.com`)
     - **Client Secret** (keep this private!)
   
   - **IMPORTANT:** Copy the Client ID now!

---

### Step 5: Update Your Website Code

1. **Open `js/main.js`**

2. **Find this line (around line 524):**
   ```javascript
   const GOOGLE_CLIENT_ID = '762400240434-cnn7gho3gqfk5k0dpohe3lms0ainn9u0.apps.googleusercontent.com';
   ```

3. **Replace with YOUR Client ID:**
   ```javascript
   const GOOGLE_CLIENT_ID = 'YOUR_CLIENT_ID_HERE.apps.googleusercontent.com';
   ```

4. **Save the file**

5. **Commit and push:**
   ```bash
   git add js/main.js
   git commit -m "Update Google OAuth Client ID"
   git push origin main
   ```

---

### Step 6: Test Google Sign-In

1. **Wait 1-2 minutes** for GitHub Pages to deploy

2. **Open your website:**
   ```
   https://som121vk.github.io/aspirine/
   ```

3. **Click "Login" button**

4. **Click "Sign in with Google"**

5. **You should see:**
   - Google account selection
   - Permission request
   - Successful sign-in
   - Welcome message with your name

---

## 🔧 Troubleshooting

### Error: "redirect_uri_mismatch"

**Solution:**
- Go back to Google Cloud Console
- Check "Authorized redirect URIs"
- Make sure you added:
  ```
  https://som121vk.github.io/aspirine/
  https://som121vk.github.io/aspirine/index.html
  ```

### Error: "origin_mismatch"

**Solution:**
- Check "Authorized JavaScript origins"
- Make sure you added:
  ```
  https://som121vk.github.io
  ```

### Google Sign-In button not showing

**Solution:**
- Check browser console (F12)
- Make sure Google API script is loaded
- Verify Client ID is correct
- Clear browser cache

### "This app isn't verified"

**Solution:**
- This is normal for testing
- Click "Advanced"
- Click "Go to Aspirine (unsafe)"
- For production, submit app for verification

---

## 🔒 Security Best Practices

### 1. Keep Client Secret Private
- Never commit Client Secret to GitHub
- Use environment variables for production

### 2. Restrict Authorized Origins
- Only add domains you control
- Remove localhost in production

### 3. Verify Tokens on Backend
```javascript
// For production, verify token on server
async function verifyGoogleToken(token) {
    const response = await fetch(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );
    const data = await response.json();
    return data;
}
```

### 4. Use HTTPS Only
- GitHub Pages uses HTTPS by default
- Never use OAuth over HTTP in production

---

## 📱 Production Checklist

Before going live:

- [ ] Update Client ID in code
- [ ] Test sign-in flow
- [ ] Remove test users
- [ ] Submit app for verification (if needed)
- [ ] Update privacy policy
- [ ] Add terms of service
- [ ] Set up backend token verification
- [ ] Monitor OAuth usage in console

---

## 🎯 Current Configuration

Your current setup:
- **Client ID:** In `js/main.js` line 524
- **Scopes:** email, profile, openid
- **Redirect URIs:** GitHub Pages URLs
- **Storage:** User data saved to localStorage → Admin panel

---

## 📊 What Happens After Sign-In

1. User clicks "Sign in with Google"
2. Google authentication popup appears
3. User grants permissions
4. Google returns JWT token
5. Token is decoded to get user info
6. User data is saved to admin panel
7. User sees welcome message
8. Modal closes

---

## 🔗 Useful Links

- **Google Cloud Console:** https://console.cloud.google.com/
- **OAuth Playground:** https://developers.google.com/oauthplayground/
- **Google Identity Docs:** https://developers.google.com/identity/gsi/web
- **Your Credentials:** https://console.cloud.google.com/apis/credentials

---

## 💡 Tips

1. **Testing:**
   - Use incognito mode for testing
   - Test with multiple Google accounts
   - Check admin panel after each sign-in

2. **Debugging:**
   - Open browser console (F12)
   - Look for error messages
   - Check Network tab for API calls

3. **Updates:**
   - Changes to OAuth settings take effect immediately
   - Code changes need deployment (1-2 minutes)

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all URLs are correct
3. Ensure Client ID is updated
4. Check Google Cloud Console for errors

---

**Your Google OAuth is ready to configure!** 🎉

Follow the steps above and your users will be able to sign in with Google.

*Last Updated: November 24, 2024*
