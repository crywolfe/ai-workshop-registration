# AI Lunch-n-Learn Registration System: Setup Guide

Follow these steps to deploy the registration page and backend processing script.

## Part 1: Google Sheet & Apps Script Backend Setup

This part configures the Google Sheet to store registrations and the script to handle form submissions.

**1. Create the Google Sheet:**
   - Go to [sheets.new](https://sheets.new) to create a new Google Sheet.
   - Rename the spreadsheet to `AI Lunch-n-Learn Registrations`.
   - The sheet at the bottom should be named `AI Lunch-n-Learn Registrations`. If it's `Sheet1`, right-click and rename it.

**2. Set Up Sheet Headers:**
   - In the first row of the sheet, enter the following headers into cells A1 through E1:
     - `A1`: `Date`
     - `B1`: `Name`
     - `C1`: `Email`
     - `D1`: `Business`
     - `E1`: `Interests`

**3. Add and Configure the Apps Script:**
   - Open the script editor by clicking `Extensions` > `Apps Script`.
   - Delete any boilerplate code in the `Code.gs` file shown.
   - Copy the entire content of the `AI Lunch-n-Learn Code.js` file I provided and paste it into the script editor.
   - **Crucial:** Find your Spreadsheet ID by copying it from the URL of your sheet. The URL is structured like `.../spreadsheets/d/SPREADSHEET_ID/edit...`.
   - In the script editor, find the `initialSetup` function and paste your Spreadsheet ID into the `spreadsheetId` variable, replacing `YOUR_SPREADSHEET_ID`.

**4. Run the Initial Setup:**
   - In the Apps Script editor, ensure the `initialSetup` function is selected from the dropdown menu at the top.
   - Click the **Run** button. 
   - Google will ask for authorization. Grant the script the necessary permissions to access your spreadsheets and send emails on your behalf.

**5. Deploy the Script as a Web App:**
   - Click the **Deploy** button in the top-right, then select **New deployment**.
   - For "Select type," click the gear icon and choose **Web app**.
   - Configure the deployment:
     - **Description:** `AI Workshop Registration Form Handler`
     - **Execute as:** `Me`
     - **Who has access:** `Anyone` (This is required for the form on your public webpage to access the script).
   - Click **Deploy**.
   - **Important:** Copy the **Web app URL**. You will need it for your HTML file.

## Part 2: HTML Webpage and GitHub Pages Hosting

This part puts your registration form on the web.

**1. Update the HTML Form:**
   - Open the `index.html` file in a text editor.
   - Find the `<form>` tag. In the `action` attribute, paste the **Web app URL** you copied from the Google Apps Script deployment, replacing `YOUR_APPS_SCRIPT_URL`.
   - Save the file.

**2. Create a GitHub Repository:**
   - Go to your GitHub account.
   - Create a new **public** repository. Name it something like `ai-workshop-registration`.

**3. Upload Your HTML File:**
   - In your new repository, click the **Add file** button and select **Upload files**.
   - Drag and drop your updated `index.html` file into the repository.
   - Click **Commit changes**.

**4. Enable GitHub Pages:**
   - In your repository, go to the **Settings** tab.
   - In the left sidebar, click on **Pages**.
   - Under "Build and deployment," for the "Source," select **Deploy from a branch**.
   - For the "Branch," select `main` (or `master`) and `/ (root)` for the folder, then click **Save**.
     > **Note:** If the `Save` button is disabled, it means the settings are already correct and have been saved previously. The message "Your GitHub Pages site is currently being built from the main branch" confirms this.
   - GitHub will generate a URL for your live site at the top of the page (e.g., `https://your-username.github.io/ai-workshop-registration/`). It may take a few minutes for the site to become active after the initial setup.

## Part 3: Testing

**1. Open the Live Page:**
   - Navigate to the GitHub Pages URL for your repository.

**2. Submit a Test Registration:**
   - Fill out the form with test information and click **Register**.
   - You should see the success message on the webpage.

**3. Verify the Results:**
   - **Google Sheet:** Check your `AI Lunch-n-Learn Registrations` sheet. The test data should appear in a new row.
   - **Email:** Check the inbox for the email address you used. You should receive a confirmation email.
   - **Calendar Invite:** Open the email and ensure the `.ics` file is attached. Click on it to see if it correctly adds the event to your calendar (Google Calendar, Outlook, Apple Calendar).

Your registration system is now fully operational.