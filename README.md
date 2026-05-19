1. getElementById, getElementsByClassName, and querySelector / querySelectorAll:

i) getElementById-> Used to select a single element By unique ID. It returns the matching element or null if no match is found.
ii) getElementsByClassName-> Used to select multiple elements by class name. It returns an HTML Collection of all matching elements.
iii) querySelector-> Returns the first matching element.
iv) querySelectorAll-> Returns a static NodeList of all matching elements.

2. Create and insert a new element into the DOM:
const newElement = document.createElement("div");
newElement.innerText = "New Element/Content";
document.body.appendChild(newElement);

3. Event Bubbling:
Event bubbling is a type of event propagation where an event starts from the deepest target element and then bubbles up to its ancestors in the DOM tree.

How its works:
- When an event occurs on an element, it first triggers the event handlers on that element.
- After that, the event bubbles up to its parent element, triggering any event handlers on the parent.
- This process continues until the event reaches the root of the DOM tree (document).

4. Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique in JavaScript where you attach a single event listener to a parent element. 

Benefits of Event Delegation:
- It reduces the number of event listeners.

5. Difference between preventDefault() and stopPropagation() methods:
- preventDefault(): This method prevents the default action of an event from occurring. For example, if you have a link and you call preventDefault() on its click event, it will prevent the browser from navigating to the link's href.
- stopPropagation(): This method stops the event from bubbling up to parent elements. It prevents the event from propagating further up the DOM tree, meaning that any event handlers on parent elements will not be triggered.


Technology Stack:

HTML
CSS (Vanilla/Tailwind/DaisyUI)
JavaScript (Vanilla)