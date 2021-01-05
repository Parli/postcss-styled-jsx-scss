A PostCSS syntax for [SCSS][] in [styled-jsx][] (for example, with [styled-jsx-plugin-sass][]).

Currently supports only template tags in this form:

```js
css`
  …
`
```


## Install

```sh
npm install --save-dev @lustre/postcss-styled-jsx-scss
```


## Use with [stylelint][]

```sh
stylelint '**/*.tsx' --custom-syntax @lustre/postcss-styled-jsx-scss
```


[SCSS]: https://sass-lang.com/
[styled-jsx]: https://github.com/vercel/styled-jsx
[styled-jsx-plugin-sass]: https://github.com/giuseppeg/styled-jsx-plugin-sass
[stylelint]: https://stylelint.io/
