# ッ Heddo - Frontend

Headless CMS solution with Drupal+Graphql as backend and Next.js for the frontend.

## Installation

Configure drupal domain and graphql endpoint in `.env` file

```
npm install
```

## Concept

The goal is to use the power and flexibility of Drupal for content management and the power of Next.js regarding static sites optimizations.

### Layout paragraphs

### CKEditor

### Image Styles (+ focal crop)

## Structure

All drupal pages are catched and sent to the `[[...slug]]` page.
Main page fields are passed to the page component as props, global components (settings retrieved from a Drupal config page and main menu) are passed to a React context in `_app` file to be easily retrieved from any component.

## TODO

### General

- Preview state / page with next.js preview API
- GraphQL basic auth option
- Cypress e2e tests
- Basic component testing (react testing library)
- Storybook integration (maybe ?)

### Components render

- Menu
- Paragraph Layouts
- Paragraph Content
- CKEditor fields (tailwind typography)
