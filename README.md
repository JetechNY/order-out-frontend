Trypto Fan
A simple Restaurant Ordering App

This React.Js based front end backed by Rails to deliver a friendly and reactive website to help you order all your fast food from one easy spot!

Custom CSS
Redux/Thunk

Domain model with attributes:

User -< Cart -<CartItems >- MenuItems>- Restaurant
               user-< favorite >-restaurant

User: name(str), username (str), password(str), phone(int), email(str), address(str), userid(int),

Cart: CartId(int), note(str), userid(foreignkey), totalcost(float), checkout(bool)

CartItems: CartId(foreignKey) menuItemsId(foreignKey)

MenuItems: description(str), name(str), price(float), image(str), restaurantid(foreignkey)

Restaurant: name(str), address(str), hours(str), image(url), description(str), pricerange(int), favorite(bool), phone(int), cuisines(str),  restaurantid(int), menuitemsId(foreignkey), zipcode(int),neighborhood(str)

Favorite: user_id(foreignkey), restaurant_id(foreignkey)

User Stories:

User will be able to:
Full CRUD on cart,
See all available restaurants,
See menu items for each restaurant,
Checkout a cart


Stretch
Full user Auth
Fake Checkout with Stripe API
Google Maps API for restaurant locations, find near me, etc
Order History
Restaurant Filter
Favorite a restaurant
Search restaurants





