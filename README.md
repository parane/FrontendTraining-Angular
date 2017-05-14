# Angular Concept 3 - Custom Directive
## prerequisite
>Intial setup in master branch

## Intro To Directive
Directives allow you to attach behavior to elements in the DOM.

A directive must belong to an NgModule in order for it to be usable by another directive, component, or application. To specify that a directive is a member of an NgModule, you should list it in the declarations field of that NgModule.

There are three kinds of directives in Angular:
1. Components—directives with a template (no html).
2. Structural directives—change the DOM layout by adding and removing DOM elements. Those were looking into priviously. (eg *ng-if, *ng-for)
3. Attribute directives—change the appearance or behavior of an element, component, or another directive. (eg [ngClass])
   3.1 Custom Attribute directives --- Lets create own custom directive


## creating  Custom Attribute directives 

1. you can create directive by angular cli. 
```
ng g directive sample
```

2. create HighlightDirective in directive folder by manually
```
@Directive({
     selector: '[myHighlight]' 
    })

export class HighlightDirective  {
   
}

```

2.1 Exporting HighlightDirective makes it accessible to other components in app.module.ts

```
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
    SampleDirective,
    HighlightDirective
  ],
```

## highlight element by custom directive.

we ll access dom element and change background color. 

```
constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
```
injects into the directive's constructor so the code can access the DOM element.ElementRef is a service that grants direct access to the DOM element through its nativeElement property.

>note : Permitting direct access to the DOM can make your application more vulnerable to XSS attacks. Carefully review any use of ElementRef in your code. 

so, Alternatively you take a look at Renderer which provides API that can safely be used even when direct access to native elements is not supported.

```
   constructor(el: ElementRef,renderer: Renderer) {
      // el.nativeElement.style.backgroundColor = 'yellow';
      renderer.setElementStyle(el.nativeElement, 'background-color', 'yellow');
    }
```

## Respond to user-initiated events.

lets change the color when mouse over.
```
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
  }

```