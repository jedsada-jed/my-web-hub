# My Web Hub

A personal bookmark hub that renders a card grid from a YAML file.

**Live:** https://jedsada-jed.github.io/my-web-hub/

---

## Result

Each card shows an icon (emoji or image) and a site title that opens in a new tab.

The card data is driven entirely by a `.yaml` file — no code changes needed to add, remove, or reorder links.

---

## How to use

### 1. Edit the default links

Open `public/sites.yaml` and add your sites:

```yaml
title: My Hub          # page heading (optional)

cards:
  - title: GitHub
    url: https://github.com
    emoji: 🐙

  - title: MDN
    url: https://developer.mozilla.org
    emoji: 📖

  - title: My Blog
    url: https://example.com
    image: https://example.com/logo.png   # image takes priority over emoji
```

Commit and push — GitHub Actions rebuilds and deploys automatically.

---

### 2. Load a different YAML via `?source`

Pass any public YAML URL as a query parameter to render it without changing the repo:

```
https://jedsada-jed.github.io/my-web-hub/?source=<yaml-url>
```

**Example** — point to a raw GitHub file:

```
https://jedsada-jed.github.io/my-web-hub/?source=https://raw.githubusercontent.com/jedsada-jed/my-web-hub/refs/heads/main/public/food-sites.yaml
```

The YAML must follow the same schema (`title` + `cards[]`) and the host must allow CORS requests. `raw.githubusercontent.com` works out of the box.

---

## YAML card fields

| Field | Required | Description |
|---|---|---|
| `title` | yes | Display name on the card |
| `url` | yes | Link destination |
| `emoji` | no | Icon character (default: `🔗`) |
| `image` | no | Image URL — replaces emoji when set |
