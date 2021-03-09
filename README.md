# Sorting Visualizer 
### [Go to visualization](https://biplab-roy.github.io/Easy-Sorting/)

# **What is Sorting**

&emsp;&emsp;&emsp;Sorting is a procedure of arranging objects systematically. Here objects can be integer, float and string also. Sorting string is nothing just keeping them in lexigraphic order. Now integer can be sorted in <br>
- Ascending Order (smaller to bigger)
- Descending Order (bigger to smaller)

Depending upon the type of objects there are various sorting algorithm available. 
<br><br>

# **Sorting Algorithms**

&emsp;&emsp;There are many sorting algorithm available out of them some popular algorithms are listed below

| Algorithm Name | Best Case | Average Case | Worst Case | Space Complexity | Inplace | Stable |
|---|---|---|---|---|---|---|
| Bubble Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | YES | YES |
| Insertion Sort | O(n) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | YES | YES |
| Selection Sort | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | YES | NO |
| Merge Sort | O(n logn) | O(n logn) | O(n logn) | O(n) | NO | YES
| Quick Sort | O(n logn) | O(n logn) | O(n<sup>2</sup>) | O(1) | YES | NO |
| Heap Sort | O(n logn) | O(n logn) | O(n logn) | O(1) | YES | NO |
| Radix Sort | O(nd) | O(nd) | O(nd) | O(n) | NO | YES |
***
<br>

&emsp;&emsp;&emsp;In above list columns represent some attributes of the sorting algorithm. Let's first do a small discussion about the Attributes. 

- ## &nbsp;&nbsp;&nbsp;&nbsp;  Best Case
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Best case of an algorithm represents what is the minimum time the algorithm require to sort n objects. This depends on the input. There are specific input for some specific algorithms for which they work best. Since it is only for some spacial cases so, it is less widely used. 
<br>

- ## &nbsp;&nbsp;&nbsp;&nbsp;  Average Case
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Average case of an algorithm represents how much time an algorithm taken to sort n objects given in random order. It is most widely used for deciding the efficiency of an algorithm. In words these complexity also termed as logarithmic (O(logn)), linear (O(n)), quadratic (O(n<sup>2</sup>)), etc.
<br>

- ## &nbsp;&nbsp;&nbsp;&nbsp;  Worst Case
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Worst case of an algorithm represents what is the maximum time the algorithm require to sort n objects. Same as Best case, There are some specific input for some specific algorithms for which they work worst.  
<br>

- ## &nbsp;&nbsp;&nbsp;&nbsp;  Space Complexity
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Space complexity also a important factor for a sorting algorithm. It represents how much extra space a sorting algorithm required to sort n objects. 

- ## &nbsp;&nbsp;&nbsp;&nbsp;  Inplace
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
An in-place algorithm is an algorithm which transforms input using no auxiliary data structure. However, a small amount of extra storage space is allowed for auxiliary variables until it does not depends on.


- ## &nbsp;&nbsp;&nbsp;&nbsp;  Stable
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
A sorting algorithm is said to be stable if two equal objects  appear in the same order in sorted output as they appear in the input array. Popular algorithms like Quick sort, Heap sort are not stable. 
&nbsp;&nbsp;&nbsp;&nbsp;
Now let discuss about sorting algorithms one by one. 
***
## **1. Bubble Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Bubble Sort is the most basic sorting algorithm. Here the main concept is to compare between pair of objects and place them in their right place. The idea is to perform the task for n-1 time to achieve sorted list.  <br><br>
Algorithm :
```javascript
function BubbleSort(list, n){
    var flag=1;
    for(var i=0;i<n;i++){
        flag=1;
        for(var j=0;j<n-i-1;j++){
            if(arr[j+1]<arr[j]){
                flag=0;
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        if(flag==1) break;
    }
    print arr;
} 
```
Since we are traversing the array `n` times so complexity is O(n<sup>2</sup>). But consider the case when array is sorted then it is sure that no swap will be performed. `Flag` variable used to consider swap flow. If array is sorted then no comparison will happen so It will end up with having complexity O(n). It is best case complexity of the algorithm. No extra space is needed for the algorithm.

Visualization:

<iframe width="360" height="179" style="position:absolute;top:0;left:0;" frameBorder="0" src="https://imgflip.com/embed/50z92o"></iframe>

***
## **2. Insertion Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array always consist of two parts, one is sorted and another is unsorted. We take a specific element from unsorted array and place it at the proper position in sorted array. This algorithm can work better where given list is semi-sorted. <br><br>
Algorithm :

```javascript
function InsertionSort(arr,len){
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j>0 && arr[j-1]>arr[j];j--){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
    print arr;
}
```
Since we are traversing the array `n` times so complexity is O(n<sup>2</sup>). But consider the case when array is sorted then in the inner `for` loop the condition `arr[j-1]>arr[j]` will always fail. So the algorithm will end up with complexity O(n) as Best case.

Visualization:
***
## **2. Selection Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selection sort algorithm base on a very basic concept that every time smallest number will be picked up from unsorted array and it will be placed to it's right position in sorted array. The best part about the algorithm is it makes O(n) swaps while insertion and bubble sort makes O(n<sup>2</sup>) swaps. This algorithm can work better where memory writing is a costly operation. <br><br>
Algorithm :

```javascript
function insertionSort(arr,len){
    for(var i=0;i<len-1;i++){
        for(var j=i+1;j>0 && arr[j-1]>arr[j];j--){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
    print arr;
}
```
Since we are traversing the array `n` times so complexity is O(n<sup>2</sup>). It don't have any best cases even if array is already sorted it will take same time. 

Visualization:







