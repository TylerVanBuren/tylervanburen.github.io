# YourCore Jekyll version

This version keeps the site static, uses Jekyll only to remove duplicated page shell HTML, and uses one tiny shared JavaScript file to keep the background slideshow in phase across page loads.

## Structure

- `_layouts/default.html` — shared HTML shell
- `_includes/slideshow.html` — six background image layers
- `_data/navigation.yml` — nav links
- `assets/css/s.css` — site styles and slideshow animation
- `assets/js/slideshow-sync.js` — stores the slideshow start time in `sessionStorage`
- `index.html`, `about.html`, `contact.html` — page content only

## GitHub Pages

If your repository already publishes from the `docs/` folder, put these files inside `docs/` and keep the Pages source set to that folder.

## Local preview

Install Ruby/Jekyll, then run:

```sh
bundle exec jekyll serve
```

or, if you are not using Bundler:

```sh
jekyll serve
```
