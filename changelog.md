1. Add First Component
2. Add Product Component
3. Add ProductList component and ProductsService. Display Product List.
4. Add Cart component and Cart Service. Display list of purchased products.

5. Add products module, cart module, orders module and shared module 
6. Use product component to display products in product list conponent
7. Pass info about adding product to the basket from product compontn to product list via event emitter

8. Add cart-item component
9. Add cart-list component
10. Add cart item delete and quantaty change functionality
11. With help of communcator service, pass information about adding of product to the cart between product-list and cart-list components

12. Set #appTitle from the component class
13. Add highlightItem direactive and highlight cart items
14. According pullRequest advice, refactor cartService to keep cartItems inside itself

// Services and DI
15. Update cart service with new methods.
16. Add LocalStorage service
17. Add CofigOptions service
18. Add Constant service
19. Add generator service and generator factory function
20. Add About component and inject all required services into it
21. Add ClickItem directive to shared module, apply it to About component

// Pipes (Pipes for Date, Price and Name are added to cart-item component 
// OrderBy Pipe is in shared module and is used at cart-list component)
22. Add built-in Pipes for Date, Price and Name for cart-item
23. Change getProducts() in Product Service to return Observable,
add getProducts2 ro return Promise, use AsyncPipe to display result at product-list component
24. Add OrderBy Pipe in shared module, sort cart items by price
25. Add possibility to choose 'sorting by' property 
26. use SharedModule to import CommonModule and FormsModule 

// Routing
27. Add bootstrap, update layout
28. Add Products and Cart feature routing. Add product-form component.
29. Add admin and login page draft, add Auth, Deactivate guards
30. Add manage-products, manage-product and manage-product-form component.
Add Resolve and Deactivate guards on manage-product-form 


