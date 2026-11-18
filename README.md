# LMAC Customs Website

\<p align="center">
&#x20; \<img src="logo.svg" alt="LMAC Customs Logo" width="220">
\</p>

\<p align="center">
&#x20; \<strong>Residential Construction & Custom Building\</strong>\<br>
&#x20; Serving Lovell, Naples, Sebago, Sweden, Denmark, Bridgton, Brownfield & Fryeburg, Maine.
\</p>

\<p align="center">
&#x20; \<a href="[https://lmaccustoms.com](https://lmaccustoms.com)">
&#x20;   \<img src="[https://img.shields.io/badge/WEBSITE-Live-2E7D5B?style=for-the-badge&logo=googlechrome&logoColor=white](https://img.shields.io/badge/WEBSITE-Live-2E7D5B?style=for-the-badge\&logo=googlechrome\&logoColor=white)" alt="Live Website">
&#x20; \</a>
&#x20; \<img src="[https://img.shields.io/badge/HOSTING-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white](https://img.shields.io/badge/HOSTING-GitHub%20Pages-181717?style=for-the-badge\&logo=github\&logoColor=white)" alt="GitHub Pages">
&#x20; \<img src="[https://img.shields.io/badge/BUILT%20WITH-HTML%20%7C%20CSS%20%7C%20JS-EF9B36?style=for-the-badge](https://img.shields.io/badge/BUILT%20WITH-HTML%20%7C%20CSS%20%7C%20JS-EF9B36?style=for-the-badge)" alt="HTML CSS JavaScript">
&#x20; \<img src="[https://img.shields.io/badge/DESIGN-Mobile%20Responsive-3976C5?style=for-the-badge](https://img.shields.io/badge/DESIGN-Mobile%20Responsive-3976C5?style=for-the-badge)" alt="Mobile Responsive">
\</p>

---

## 📖 About the Project

The official website for **LMAC Customs**, a residential construction company serving communities throughout the Lakes Region and surrounding areas of Maine.

The website showcases completed projects, highlights construction services, introduces the company, and provides a direct way for prospective clients to submit inquiries.

Designed by Alex, built using with lightweight, modern web technologies, the site prioritizes performance, accessibility, mobile responsiveness, and straightforward maintenance.

### ✨ Key Features

- Responsive design optimized for desktop, tablet, and mobile.
- Custom branding, typography, and visual styling.
- Dedicated project galleries for interiors, exteriors, kitchens, bathrooms, and framing.
- Interactive photo viewer with captions.
- Mobile-friendly navigation.
- Contact form connected to Google Apps Script.
- Automated inquiry notifications and Google Sheets storage.
- Search engine optimization (SEO) and structured data.
- Custom domain with HTTPS.
- Custom 404 error page.
- Social media sharing previews and favicon support.

## 🌐 Live Website

[**https://lmaccustoms.com**](https://lmaccustoms.com)

---

## 🛠️ Technologies

| Technology         | Purpose                                             |
| :----------------- | :-------------------------------------------------- |
| HTML5              | Website structure and content                       |
| CSS3               | Styling, layouts, animations, and responsive design |
| Vanilla JavaScript | Navigation, interactions, and form functionality    |
| SVG                | Scalable company branding                           |
| WebP               | Optimized website photography                       |
| Google Apps Script | Contact form processing                             |
| Google Sheets      | Inquiry storage                                     |
| GitHub Pages       | Website hosting                                     |

**No frameworks, package installations, or build tools required.**

---

## 📁 Project Structure

| File                      | Description                                                                 |
| :------------------------ | :-------------------------------------------------------------------------- |
| `index.html`              | Main homepage, services, about section, portfolio, contact form, and footer |
| `interior.html`           | Inviting Interiors project gallery                                          |
| `exterior.html`           | Durable Exteriors project gallery                                           |
| `kitchens-baths.html`     | Noteworthy Kitchen and Bath gallery                                         |
| `framing.html`            | Frame to Finish project gallery                                             |
| `404.html`                | Custom page-not-found screen                                                |
| `styles.css`              | Global website styling and responsive layouts                               |
| `script.js`               | Navigation, scroll effects, footer year, and contact form                   |
| `gallery.js`              | Interactive photo viewer and captions                                       |
| `sitemap.xml`             | Search engine sitemap                                                       |
| `robots.txt`              | Search engine crawling instructions                                         |
| `CNAME`                   | Custom domain configuration                                                 |
| `logo.svg`                | Primary company logo                                                        |
| `logo-light.svg`          | Light logo variation                                                        |
| `favicon.ico`             | Browser favicon                                                             |
| `favicon-32x32.png`       | Standard browser icon                                                       |
| `favicon-48x48.png`       | Larger browser icon                                                         |
| `apple-touch-icon.png`    | Apple device home screen icon                                               |
| `social-preview-dark.jpg` | Social sharing preview image                                                |
| `google-review.webp`      | Google review badge                                                         |
| `*.webp`                  | Optimized website and gallery photography                                   |

---

## 🚀 Hosting & Deployment

The website is hosted using **GitHub Pages** and connected to the custom domain `lmaccustoms.com`.

### Hosting Configuration

| Setting              | Configuration        |
| :------------------- | :------------------- |
| Hosting provider     | GitHub Pages         |
| Publishing branch    | `Final`              |
| Publishing directory | `/` (root)           |
| Custom domain        | `lmaccustoms.com`    |
| DNS provider         | Squarespace Domains  |
| HTTPS                | Enabled and enforced |

### DNS Configuration

The domain uses the following GitHub Pages DNS records:

**A Records (`@`)**

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (`www`)**

```text
moonlitnghts.github.io
```

### Publishing Updates

1. Make your changes locally or directly in GitHub.
2. Commit and push changes to the `Final` branch.
3. GitHub Pages automatically publishes the updated website.
4. Check the repository's **Actions** tab for publishing status.
5. Once deployment succeeds, refresh the website.

**Tip:** Use `Ctrl + Shift + R` to perform a hard refresh and bypass your browser cache.

---

## ✏️ Editing & Maintenance

### Adding Photos to a Gallery

1. Convert the photo to WebP format.
2. Resize it to approximately 1800 pixels on its longest side.
3. Upload the image to the repository's root directory.
4. Open the appropriate gallery HTML file.
5. Find the `<div class="gallery">` section.
6. Copy an existing photo entry and update its filename, caption, and alt text.

**Example:**

```html
<a href="your-photo.webp"
   data-caption="Short description shown when opened.">
  <img
    loading="lazy"
    width="1200"
    height="800"
    src="your-photo.webp"
    alt="Description of the completed project">
</a>
```

Photos appear in the order they are listed in the HTML file.

### Changing Gallery Categories

Each gallery page contains:

- An `<h2>` heading for the category name.
- A `<p class="gallery-intro">` element for its description.
- A collection of project photographs.

The corresponding homepage category tiles are located in the `portfolio-grid four` section of `index.html`.

### Creating a New Gallery

1. Copy an existing gallery HTML file.
2. Rename the new file.
3. Update the page title, heading, description, and photographs.
4. Add a corresponding tile to the homepage.
5. Add the new page URL to `sitemap.xml`.

### Updating Service Area Towns

The service area appears in:

- The footer of all five website pages.
- The `areaServed` structured data in `index.html`.

Keep these locations consistent whenever the service area changes.

### Updating the Google Review Link

The Google review badge is located in the footer of all five HTML pages.

If the review URL changes, update the link in:

- `index.html`
- `interior.html`
- `exterior.html`
- `kitchens-baths.html`
- `framing.html`

---

## 📬 Contact Form

The homepage inquiry form uses a **Google Apps Script web application** to process customer submissions.

### Form Functionality

When a visitor submits an inquiry:

1. The form sends the submission to Google Apps Script.
2. An email notification is sent to `brandon@lmaccustoms.com`.
3. Replies go directly to the visitor.
4. The inquiry is saved as a new row in the attached Google Sheet's `Inquiries` tab.

### Configuration

- The form's Apps Script endpoint is stored in the `action` attribute in `index.html`.
- The Apps Script source code is stored in the Google Sheet under **Extensions → Apps Script**.
- A hidden `_gotcha` field acts as a spam trap.

### Updating the Apps Script

If the Apps Script code is modified, the live website will only use the updated version after redeployment.

1. Open the associated Google Sheet.
2. Navigate to **Extensions → Apps Script**.
3. Make the necessary code changes.
4. Select **Deploy → Manage deployments**.
5. Edit the existing deployment.
6. Select **New version**.
7. Click **Deploy**.

The existing web app URL should remain unchanged.

**Important deployment settings:**

| Setting        | Required Value |
| :------------- | :------------- |
| Execute as     | Me             |
| Who has access | Anyone         |

Google Apps Script has daily email quotas, so monitor usage if inquiry volume increases.

---

## 🔍 SEO & Social Sharing

The website includes several features designed to improve search visibility and link sharing.

### Search Engine Optimization

- `sitemap.xml` lists the homepage and all four gallery pages.
- `robots.txt` provides search engine crawling instructions.
- Structured data describes the business and its service area.
- Page titles and descriptions help search engines understand the content.

Whenever a new page is added, remember to update the sitemap.

### Social Sharing Previews

The website uses Open Graph and Twitter/X metadata to control how links appear when shared.

The following metadata is configured in the `<head>` of `index.html`:

- `og:image`
- `twitter:image`

The current sharing image is `social-preview-dark.jpg` (1200 × 630 pixels).

**Tip:** Messaging apps sometimes cache link previews. If the sharing image changes, use a new filename and update the metadata references. You can also test a preview using a URL with a query parameter, such as `?v=2`.

### Browser Icons

Browser icons are configured in the `<head>` section of each HTML page.

Browser caching can delay updates, so changes may take some time to appear.

### Google Business Profile

Keep the service area listed on the Google Business Profile consistent with the towns listed on the website.

---

## 📱 Responsive Design

The website is designed to work across modern desktop, tablet, and mobile browsers.

When making design changes, check:

- Navigation and mobile menu functionality.
- Image sizing and gallery layouts.
- Text readability and spacing.
- Button sizes and touch targets.
- Contact form usability.
- Horizontal scrolling and overflow.

Always test major changes on both desktop and mobile screen sizes.

---

## 🧪 Running Locally

Because this is a static website, no installation or build process is necessary.

### Option 1: Open Directly

Open `index.html` in your browser.

### Option 2: Run a Local Server

If Python is installed, open a terminal in the project directory and run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

Press `Ctrl + C` in the terminal to stop the local server.

---

## 🛠️ Troubleshooting

| Problem                          | Possible Solution                                                 |
| :------------------------------- | :---------------------------------------------------------------- |
| Website changes aren't appearing | Check the `Final` branch, GitHub Actions, and browser cache       |
| Images aren't loading            | Verify filenames, extensions, capitalization, and file locations  |
| Contact form isn't working       | Check the Apps Script deployment, permissions, and execution logs |
| Custom domain isn't working      | Verify DNS records and the repository's `CNAME` file              |
| Unexpected 404 page              | Confirm the requested HTML file exists in the repository root     |
| Social preview hasn't updated    | Check metadata and image caching                                  |
| Browser icon hasn't changed      | Clear browser cache and verify favicon references                 |

---

## 🔒 Maintenance Guidelines

To keep the website fast, reliable, and easy to maintain:

- Keep images optimized using WebP wherever possible.
- Preserve mobile responsiveness when changing layouts.
- Use descriptive alt text for photographs.
- Keep filenames lowercase and use hyphens instead of spaces.
- Update `sitemap.xml` whenever pages are added or removed.
- Keep the service area consistent across all pages.
- Test contact form submissions after making changes.
- Avoid unnecessary frameworks and dependencies.
- Maintain consistent branding throughout the website.

---

## 📄 License & Ownership

This website is developed for **LMAC Customs** and serves as its official online presence.

The branding, website content, photography, and custom design elements are intended for LMAC Customs' business use. Reuse or redistribution should be authorized by the appropriate owner.

---

\<p align="center">   \<strong>LMAC CUSTOMS\</strong>\<br>   Residential Construction & Custom Building\<br>   \<a href="[https://lmaccustoms.com](https://lmaccustoms.com)">lmaccustoms.com\</a> \</p>

\<p align="center">   \<sub>Built with care. Designed to last.\</sub> \</p>
