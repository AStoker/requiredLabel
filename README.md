# requiredLabel
A knockout binding to use on labels to indicate whether they are required, and whether the input they are for has been filled out.  
_All options can optionally be knockout observables_  

## Options:
* `completed`: boolean _(optional)_  
  * The state in which the the required field is in. If `completed` evaluates to false, then the default asterisk (*) will be displayed. If `completed` evaluates to true, the asterisk will be replaced with the completed icon. 
  * _If not provided, then there will be no completed state, and the asterisk will always be visible._ 
* `color`: string _(optional)_  
  * The string value of the color the asterisk. `color` will take any value that evaluates to a color recognized by CSS.  
  * _If not provided, the default color of red will be used._
* `completedColor`: string _(optional)_  
  * The string value of the color of the completed state icon. `completedColor` will take any value that evaluates to a color recognized by CSS. 
  * _If not provided, the default color of green will be used._
  
## Example:
###### Javascript
```javascript
var options = {
  completed: false,
  color: 'red',
  completedColor: 'green'
}
```
###### HTML
```html
<label data-bind="requiredLabel: options">Required Field</label>
```
