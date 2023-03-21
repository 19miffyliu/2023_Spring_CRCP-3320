# !/usr/bin/env/ python

# Python Code Snippet
# CRCP 3320
# Spring 2023
# Quiz 4: Git, GitHub, and GitHub Pages

import random

my_numbers = []

for i in range(0, 5):
  new_number = random.randint(0, 100)
  my_numbers.append(new_number)

for num in my_numbers:
  if num <= 50:
    print(num, 'is less than or equal to 50')
  else:
    print(num, 'is greater than 50')
