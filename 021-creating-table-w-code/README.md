# Week 10 Creating Table with Code

# First Assignment

# Thoughts on arrow function vs traditional syntax?

In my previous JavaScript class, the professor used traditional syntax to write functions. Being introduced to arrow functions was new and different but I can sort of understand the idea behind it. I don't know that the difference between the two is great enough that it would make me want to use one over the other.

# Where in code do we start to render the table?

My guess is starting in the updateDOM function because that's where new elements are created and displayed on the DOM. That or creating a function that pulls the data and directs in back to updateDOM.

# How do we create the tr?

I think to create the tr, we would probably start by creating another function that takes user input (miles, gallons, and price) and use the createElement method generate a row. Also you would probably need to reference the headings array in order to place the data accordingly. Afterwards, use appendChild and textContent to update the DOM.

# How would you fix misaligned headings to data columns?

Probably specify which position in the array should be lined up with a certain data column?

# How to fix rendering table issue at the end of first assignment in week 10? 

I think the rendering issue has something to do with the forEach loops? and possibly not specifying to not reiterate the previous data set once more. 