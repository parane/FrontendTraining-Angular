# Angular Concept
## prerequisite
>Intial setup in master branch

## Working with arrays and ngfor

Adding collection of object. using ngFor, loop through and display it. 

define Any Object array in app.component.ts.
```
cricketers:  Array<any> = [{},{}]
```
loop through in html using *ngFor
```
<li *ngFor="let cricketer of cricketers"> {{cricketer.name}}</li>
```

*ngFor syntax says we want to use the NgFor directive on this attribute. it marks that <li> element (and its children) as the "repeater template".

```
<li *ngFor="let cricketer of cricketers; let i = index"> {{i}}{{cricketer.name}}</li>
```

trackBy feature from Angular 1.x that allows performance improvements when populating list of object.Angular has no information about the cricketer object. if we create new object with exactly same name and type object, angular treat that new object. so avoid that situation. you can use trackBy.


```
<li *ngFor="let cricketer of cricketers; let i = index;  trackBy: trackByFn"> {{i}}{{cricketer.name}}</li>

//component
 trackByFn(index, cricketer) {
  console.log(cricketer);
  return cricketer.name;
}
```