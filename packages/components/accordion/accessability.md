# Accordion Accessability

- Keyboard event support for `Space`, `Enter`, `Arrow Up`, `Arrow Down` and `Home` / `End` keys.
- Keyboard focus management and cross browser normalization.
- `aria-expanded` attribute for the accordion item.
- `aria-disabled` attribute for the accordion item.
- `aria-controls` attribute for the accordion item.

## Anatomy

``` html
<div class="accordion">
  <!-- Accordion Item 1 -->
  <h3>
    <button
      type="button"
      aria-expanded="false"
      aria-controls="panel-1"
      id="accordion-header-1"
    >
      Section 1
    </button>
  </h3>
  <div
    id="panel-1"
    role="region"
    aria-labelledby="accordion-header-1"
    hidden
  >
    <p>Content for section 1</p>
  </div>

  <!-- Accordion Item 2 -->
  <h3>
    <button
      type="button"
      aria-expanded="false"
      aria-controls="panel-2"
      id="accordion-header-2"
    >
      Section 2
    </button>
  </h3>
  <div
    id="panel-2"
    role="region"
    aria-labelledby="accordion-header-2"
    hidden
  >
    <p>Content for section 2</p>
  </div>

  <!-- Accordion Item 3 -->
  <h3>
    <button
      type="button"
      aria-expanded="false"
      aria-controls="panel-3"
      id="accordion-header-3"
    >
      Section 3
    </button>
  </h3>
  <div
    id="panel-3"
    role="region"
    aria-labelledby="accordion-header-3"
    hidden
  >
    <p>Content for section 3</p>
  </div>
</div>

```
