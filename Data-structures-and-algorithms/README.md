# Project 1

[22,27,16,2,18,6] -> Insertion Sort

1) Write down the stages of the sequence given above according to the sort type.

2) Write the Big-O notation.

3) Time Complexity: Average case: The number we are looking for is in the middle, Worst case: The number we are looking for is at the end, Best case: The number we are looking for is at the top of the series.

4) hat case does the number 18 fall under after the array is sorted? Write.

5) Write down the first 4 steps of the [7,3,5,8,2,9,4,15,6] sequence according to the Insertion Sort.

## Solutions

1. [22,27,16,2,18,6] -> Insertion Sort

     a. [22, 27, 16, 2, 18, 6]
 
     b. [16, 22, 27, 2, 18, 6]
 
     c. [2, 16, 22, 27, 18, 6]
 
     d. [2, 16, 18, 22, 27, 6]
 
     e. [2, 6, 16, 18, 22, 27]

2. Big O Notation- worst case
   n!= n\*(n+1)/2= (n^2+n)/2 => O(n^2)

3. Time complexity.

   best case: O(n)
   
   average case: O(n^2)
   
   worst case: O(n^2)

4. Which case for 18?
   avarage case

5. First 4 Insertion Sort steps [7,3,5,8,2,9,4,15,6]

     [3,7,5,8,2,9,4,15,6]
 
     [3,5,7,8,2,9,4,15,6]
 
     [3,5,7,8,2,9,4,15,6]
 
     [3,5,7,2,8,9,4,15,6]



---

---


# Project 2

[16,21,11,8,12,22] - > Merge Sort

1) Write the stages of the above sequence according to the sort type.
2) Write the Big-O notation.


## Solutions

1)                               [16,21,11,8,12,22]
               
                        [16,21,11]                [8,12,22]

                    [16,21]        [11]        [8,12]        [22]

                [16]    [21]    [11]       [8]    [12]    [22]

                    [16,21]   [11]             [8,12]   [22]

                        [11,16,21]                [8,12,22] 

                                [8,11,12,16,21,22]


2) Big o notation is O(nlogn)

---

---



# Project 3

Write down the Binary-Search-Tree stages of the sequence [7, 5, 1, 8, 3, 6, 0, 9, 4, 2].

Example: root x. To the right of root is y. To the left is a z, and so on.

## Solutions

Let the root element of the sequence [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] be the number 5.


                                    5
                                /        \
                            1                7
                        /       \         /    \
                    0             3      6       8
                                /   \             \
                              2       4             9
        


