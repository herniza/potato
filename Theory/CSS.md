# CSS
1. Internal
2. External
3. Inline

## Convention
1. naming: no camel case
2. avoid id, use class

## Attribute Selectors
a[title]            => a punya atribut title
a[href*="example"]  => a punya atribut href dan berisi (* = contain) example

## Pseudo-Classes & Pseudo-Elements
Pseudo-Classes  : button:hover (action of user (ex: hover))
Pseudo-Elements : p::first-line (first line of every p element)

## Combinators
1. Descendant selectors : ```.box p```
2. Child selectors : direct child. ``` box > p ```
3. Adjacent sibling selector : one indentation. ``` h1 + p ```
4. General sibling selector : 
5. tilde :  ``` .box - p ```

## Values & Units
1. Absolute units: px, cm, mm
2. Relative units: em, ex, rem
3. Unitless values: z-index, font-weight, line-height

## Percentages
1. Liquid layout
2. Fixed width layout

## Colors
1. Color keyword    : red, black
2. Hex values       : #FF0000
3. rgb()            : rgb(255,0,0)
4. opacity          : rgba(255,0,0,0.2);
5. Functions        : linear-gradient(to right, white, blue, black)

## CSS Specificity
Inline  >   ID Selectors    >   Class Selectors     >   Element selectors

1000    >   100             >   10                  >   1

## Source Order
If specificity value is same, then order does matter. the last style will be used.

## Inheritance
1. Inherit from parents (.bottom h2)
2. Initial: Reset to default value (color: initial)
3. Unset: Reset to natural value (inherit/initial)
4. RevertL resets to user-agent css (```<style="all:revert">```)

## Box Model
padding, margin

## Overflow
1. Auto
2. hidden
3. Scroll
4. Visible

## CSS Floats
right left none

## Flexbox layout
1. flex-direction
2. flex-wrap
3. flex-flow
4. justify-content
5. align-items
6. align-content

flexboxfroggy.com
