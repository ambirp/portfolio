---
title: What is self and __init__ in Python
date: '2021-07-19'
tags: ['python', 'datastructures']
draft: false
summary: Why we use self and __init__ in python, also what is exact meaning of these.
---

Whenever we see any code in python which is written according to OOPs(Object-oriented programming) concept then you must have seen these words like self and `__init__`.
Most of the times we all use these but we might not know why we use them so let's talk about that in details.

## `self`:

It is reference to the current instance of the class and also it is used to access variables initialised which are generated when class instance is created.
There are some languages which have `@` syntax for using attributes but python has `self`.
The below example shows that `self` and test is referring to same object,

```python
class same:
    def __init__(self):
        print("Address of self = ",id(self))
test = same()
print("Address of class object = ",id(test))
#Output
#Address of self =  40124194801
#Address of class object =  40124194801
```

It is not mandatory to call it as `self` as it is not a keyword. The first argument while initialising class will be considered as a `self`. See example below,

```python
class Person:
  def __init__(anything, name, age):
    anything.name = name
    anything.age = age
  def func(qwerty):
    print("Hello my name is " + qwerty.name)
p = Person("Jack", 26)
p.func()
#Output
#Hello my name is Jack
```

Like most object oriented language python does not pass this as hidden parameter that is why we have to declare it explicitly.
To reduce complexity and improve readability of code it is highly suggested to use this, also it is good practice followed by programmers.
A sample post with markdown.

## `__init__`:

All classes have a function called `__init__`, which is always executed when the class is being initiated.
`__init__` function is used to assign values to object properties, or initialising important operations/variables which are necessary for objects.

```python
class addition:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def add(self):
        return (self.x+self.y)
class subtraction:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def subtract(self):
        return (self.x-self.y)
class math:
    def __init__(self, x, y):
        self.add_op = addition(x, y)
        self.sub_op = subtraction(x, y)
    def operations(self):
        print(self.add_op.add())
        print(self.sub_op.subtract())
a = math(10, 5)
a.operations()
#Output
15
5
```

As you can see the variables initialised in the `__init__` functions can be used inside all the methods defined in the class.

Also you can initialise a functions inside the `__init__` function.
