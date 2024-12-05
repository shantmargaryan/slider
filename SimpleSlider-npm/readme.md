# SimpleSlider

[example SimpleSlider](https://shantmargaryan.github.io/slider/).

A simple and lightweight JavaScript library for slider

## Peculiarities

+ __No dependencies__.  The library is written in pure JavaScript and does not require any other libraries to work.
+ __Simplicity and functionality__. You can easily and quickly connect and use a library that implements important functionality for the slider.
+ __Availability__. The slider meets all accessibility rules.
+ __Customization with CSS__. You can easily change the appearance, layout using CSS.

## How to work with the library

1. Download the latest version of the library
the page
```javascript
npm i simple-sliders
```

2. ways to connect the library
```javascript
import SimpleSlider from 'simpleslider';
import 'simpleslider/style';
```
or

```javascript
const SimpleSlider = require('simpleslider');
```

3. Place the following markup in your HTML document:

```html
    <div class="slider" data-slider="slider">
        <ul class="slider__list">
            <li class="slider__slide" style="background-color: red">slide1</li>
            <li class="slider__slide" style="background-color: blue">slide2</li>
            <li class="slider__slide" style="background-color: gray">slide3</li>
            <li class="slider__slide" style="background-color: purple">slide4</li>
            <li class="slider__slide" style="background-color: pink">slide5</li>
            <li class="slider__slide" style="background-color: #00c8ff">slide6</li>
            <li class="slider__slide" style="background-color: #00ff0d">slide7</li>
            <li class="slider__slide" style="background-color: #808080">slide8</li>
            <li class="slider__slide" style="background-color: #804f00">slide9</li>
            <li class="slider__slide" style="background-color: #c0ffe6">slide10</li>
            <li class="slider__slide" style="background-color: #c0ffe6">slide11</li>
        </ul>
        <button class="slider__button-prev">prev</button>
        <button class="slider__button-next">next</button>
        <div class="slider__pagination"></div>
    </div>
```
```css

.slider {
    position: relative;
}

.slider__list {
    display: flex;
    align-items: center;
    overflow: auto;
    scroll-snap-type: x mandatory;
    padding: 0;
    margin: 0;
    list-style: none;
}

.slider__list::-webkit-scrollbar {
    display: none;
}

.slider__slide {
    scroll-snap-align: start;
    min-width: calc(100% / var(--per-view, 1));
    transition: background-color 0.3s;
}

.slider__slide_active {
    background-color: red;
}

.slider__button {
    position: absolute;
    top: 50%;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    transform: translateY(-50%);
}

.slider__prev {
    left: 0;
}

.slider__next {
    right: 0;
}

.slider__pagination-button--active {
    background-color: red;
}

```

`data-slider` - an important data attribute through which all interaction with the plugin works. The value of this attribute must be unique to the page.

## Place the following JS code to connect the slider:

```javascript
const SimpleSlider = new SimpleSlider('slider');
```

## The library supports seven parameters:

1. params `gap: number` - The gap parameter affects the distance between the slides.

```javascript
Default

gap: 0,
```

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  gap: 20
  ...
});
```


2. params `pagination: true or false` - The pagination parameter affects whether a pagination will be present.

```javascript
Default

pagination: false,
```

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  ...
  pagination: true
  ...
});
```


3. params `perView: number` - The perView parameter affects the number of slides per view.

```javascript
Default

perView: 1
```

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  ...
  perView: 3
  ...
});
```


4. params `loop: true or false` - The loop parameter affects the operation of the slider.

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  ...
  loop: true
  ...
});
```


5. params `autoPlay: true or false` - The autoPlay parameter affects the operation of the slider.

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  ...
  autoPlay: true
  ...
});
```


6. params `autoPlayInterval: number` - The autoPlayInterval parameter affects the speed of the autoPlay slider.

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  ...
  autoPlayInterval: 3000
  ...
});
```


7. params `breakpoints: {}` - The breakpoints parameter affects the operation of the slider.

```javascript
const SimpleSlider = new SimpleSlider('slider', {
  ...
  breakpoints: {
    1024: {
      perView: 3,
      gap: 20,
    },
    768: {
      perView: 2,
      gap: 10,
    },
  },
  ...
});
```