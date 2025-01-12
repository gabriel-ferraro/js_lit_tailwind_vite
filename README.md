## JS-Lit-Tailwind CSS-Vite - Template

## Template unfinished

### What's this?
A template for utilizing the previously mentioned technologies in a simple manner, presenting short examples on:

- Making a multi-page Vite build.
- Integrating a Lit generated web-component in HTML.
- Tailwind CSS available outside and inside Lit web-components.
- A production and development build with the mentioned features working together.

### How to make a multi-page project that is correctly bundled by Vite?

### How to add a Lit component in a HTML page?

### How to make so Tailwind css can be used inside a Lit component?

You should probably avoid this since a web compoente is meant to be isolated from the rest of DOM inside its shadow-DOM, if you don't mind having external CSS inside the component, then:

- Option 1:



```sh

```

- Option 2:


### Running template

```sh
npm i
npm run dev
```

# License
[to do](LICENSE)