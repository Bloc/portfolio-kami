---
layout: post
title: Address Bloc
thumbnail-path: "img/addressbloc.png"
short-description: The goal of the project was to build a command-line Ruby program for address collection and changes.

---

{:.center}
![]({{ site.baseurl }}/img/addressbloc.png)

## Explanation

Using Ruby and TDD (utilizing Rspec) I was asked to create a menu that could be used in the command line to add, update and delete Address Bloc Users.

## Problem

In addition to the creation of the program, the following were required pieces of functionality. The ability for a user to…
* See the current number of total entries
* Add individual entries and import multiple from a CSV file
* View all entries (one by one)
* Search for an entry by name or entry number
* Update existing entries
* Delete individual or all entries
* Exit the program

## Solution

I created a Ruby program to handle the address book. I choose to...
* Keep the view basic utilizing the command line and submenus as needed for intuitive navigation.
* Create two models one for individual entries and one to store the entries in an array providing an easy way to add, remove, and count entries.
* Create a controller to display the appropriate menu and process user input that utilizes gets and puts, case statements and multiple custom methods for each action.
* Create methods to import from a CSV file, utilizing the CSV class methods.
* Implement binary search for entries to speed the search

## Results

All user requirements were met. I tested it using test cases I created as well as manually testing it.


## Conclusion

* This is a good starter project utilizing Ruby to understand some of the MVC structure.
* There are improvements I would make from a UX perspective.
  * When you choose view all you still only see individual entries (per the requested spec) but I would have it display all or rename the selection to set expectations.
  * For the edit method, I would build it so that it populates the current info for each instead of blank being considered “no change”.
  * The entry number doesn’t start with one since it is an array. I would either indicate that or alter it in the backend to make it more intuitive.
