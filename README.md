# Oracle

A game engine for AI Dungeon.

[Download](https://raw.githubusercontent.com/SlumberingMage/AID-Oracle/main/distribution/output.js) Output Fix.
[Download](https://raw.githubusercontent.com/SlumberingMage/AID-Oracle/main/distribution/oracle-lite-1.1-input.js) Light.
[Download](https://raw.githubusercontent.com/SlumberingMage/AID-Oracle/main/distribution/oracle-3.2-input.js) Full.

Quick fix for website scripting page.
```js
(e=>e[e.length-1])(document.querySelectorAll('[role=alertdialog]')).lastChild.style.flexGrow = 1
```

```js
javascript:(function((e=>e[e.length-1])(document.querySelectorAll('[role=alertdialog]')).lastChild.style.flexGrow = 1){})();
```

Command Structure:
`> {Name} while, trying to be {nice|mean|ect.} attempts to use {skill} for {outcome}`

```css
/* Fix for script window.*/
[role="alertdialog"]:last-of-type > :last-child {
  flex-grow: 1;
}

[role="alertdialog"] {
  overflow: hidden;
}
/* Change Modal size */
[aria-describedby|="description"] {
  height: 100vh !important;
  width: 80vw !important;
}
[aria-describedby|="description"]:last-of-type > :last-child > * {
  max-height: calc(100vh - 121px) !important;
  height: calc(100vh - 121px) !important;
}
[aria-describedby|="description"] > div:last-child > div > div > div > div > div > div:last-child {
  padding-bottom: 0px !important;
  padding-right: 0px !important:
}
```
