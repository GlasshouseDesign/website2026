# Glasshouse Design static site

A fast, responsive static rebuild of [glasshouse.design](https://glasshouse.design/) - WordPress development, support, SEO and graphic design for small businesses in and around Chippenham, Wiltshire.

Built from the real brand: the sunset-orange logo mark, service copy and client work from the live site, with SEO essentials (meta tags, Open Graph, JSON-LD local business schema, sitemap, robots.txt) that the original WordPress/Elementor site didn't have.

## Files

- [index.html](index.html) - homepage
- [wordpress-development.html](wordpress-development.html)
- [wordpress-support.html](wordpress-support.html)
- [graphic-design.html](graphic-design.html)
- [seo.html](seo.html)
- [affordable-websites-from-49-per-month.html](affordable-websites-from-49-per-month.html) - Essentials/Growth/Custom pricing plans for the £49 offer
- [cheap-website-design.html](cheap-website-design.html), [website-design-for-startups.html](website-design-for-startups.html) - audience-angle landing pages pushing the £49/month offer; duplicate this pattern for further angles
- [web-design-melksham.html](web-design-melksham.html), [web-design-swindon.html](web-design-swindon.html), [web-design-bath.html](web-design-bath.html), [web-design-trowbridge.html](web-design-trowbridge.html), [web-design-corsham.html](web-design-corsham.html) - local landing pages, linked from the site footer; duplicate this pattern for any further towns
- [cheap-website-design-chippenham.html](cheap-website-design-chippenham.html), `-corsham`, `-swindon`, `-bath`, `-trowbridge`, `-melksham` - location + "cheap website" long-tail landing pages. Intentionally **not** linked from any nav/footer (kept out of the visible site to avoid diluting the main town pages), but indexable (`index, follow`) and listed in `sitemap.xml` so they can still rank in organic search for queries like "cheap website design in Corsham".
- [contact.html](contact.html)
- [terms-and-conditions.html](terms-and-conditions.html) - plain-English terms covering the monthly plans; have a solicitor review before treating as a binding agreement
- [styles.css](styles.css)
- [script.js](script.js)
- [assets/img/](assets/img/) - logo mark, favicons, client logos
- [robots.txt](robots.txt), [sitemap.xml](sitemap.xml)
- [.htaccess](.htaccess) - 301 redirects from the old WordPress URLs (`/contact/`, `/graphic-design/`, etc.) to the new `.html` pages. Requires Apache (works on Cloudways); add more `RewriteRule` lines here if further old URLs turn up.

## Run locally

Open [index.html](index.html) in a browser, or serve the folder with a simple local server such as:

```bash
python3 -m http.server 8000
```

## Deploying

This is a plain static site - upload the folder as-is to any static host (Netlify, Vercel, GitHub Pages, or the existing hosting account) with no build step required. Update the `og:image`/`canonical` URLs in each page's `<head>` if the site moves to a different domain.
