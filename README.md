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
Average case of an algorithm represents how much time an algorithm taken to sort n objects given in random order. It is most widely used for deciding the efficiency of an algorithm. In words these complexity also termed as logarithmic (`O(logn)`), linear (`O(n`)), quadratic (`O(n`<sup>`2`</sup>`)`), etc.
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
Bubble Sort is the most basic sorting algorithm. Here the main concept is to compare between pair of objects and place them in their right place. The idea is to perform the task for `n-1` time to achieve sorted list.  <br><br>
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
Since we are traversing the array `n` times so complexity is `O(n`<sup>`2`</sup>`)`. But consider the case when array is sorted then it is sure that no swap will be performed. `Flag` variable used to consider swap flow. If array is sorted then no comparison will happen so It will end up with having complexity `O(n)`. It is best case complexity of the algorithm. No extra space is needed for the algorithm.

[Visualization](https://biplab-roy.github.io/Easy-Sorting/)


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
Since we are traversing the array `n` times so complexity is `O(n`<sup>`2`</sup>`)`. But consider the case when array is sorted then in the inner `for` loop the condition `arr[j-1]>arr[j]` will always fail. So the algorithm will end up with complexity `O(n)` as Best case.

[Visualization](https://biplab-roy.github.io/Easy-Sorting/)
***
## **3. Selection Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selection sort algorithm base on a very basic concept that every time smallest number will be picked up from unsorted array and it will be placed to it's right position in sorted array. The best part about the algorithm is it makes `O(n)` swaps while insertion and bubble sort makes `O(n`<sup>`2`</sup>`)` swaps. This algorithm can work better where memory writing is a costly operation. <br><br>
Algorithm :

```javascript
function selectionSort(arr,len){
    for(var i=0;i<len-1;i++){
        var min=i;
        var prev=-1;
        for(var j=i;j<len;j++){
            if(arr[j]<arr[min]){
                min=j;
                prev = min;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}
```
Since we are traversing the array `n` times so complexity is `O(n`<sup>`2`</sup>`)`. It don't have any best cases even if array is already sorted it will take same time. 

[Visualization](https://biplab-roy.github.io/Easy-Sorting/)
***
## **4. Merge Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Merge Sort is a Divide and Conquer algorithm. The main concept behind merge sort is it keeps dividing the array in to subpart until size become `1`. Then considering each sub array as sorted [`Merge two sorted array`](https://www.geeksforgeeks.org/merge-two-sorted-arrays/) algorithm is used to merge. Merge sort also works good with linked list. Merging two sorted array takes `O(n)` time. Since the array divided into two equal halves so, recusive call made `O(logn)` times. That's how complexity of merge sort becomes `O(nlogn)`. Best case and Worst case is same for merge sort. The only disadvantage of merge sort is it requires extra space for merging two array. So, space complexity of merge sort becomes `O(n)`.
<br><br>
Algorithm :

```javascript
function merge(arr,start,mid,end){
    var i=start, j=mid, k=0;
    var newarr = [];
    while(i<mid && j<end){
        if(arr[i]<arr[j]){
            newarr[k]=arr[i];
            i++;
            k++;
        }
        else{
            newarr[k] = arr[j];
            j++;
            k++;
        }
    }
    while(i<mid){
        newarr[k]=arr[i];
        i++;
        k++;
    }
        newarr[k] = arr[j];
        j++;
        k++;
    }
    for(var i=0;i<k;i++){
        arr[i+start] = newarr[i];
    }
}

function divide(arr,start,end){
    if(end<=start+1){
        return;
    }
    var mid = Math.floor((start+end)/2);
    divide(arr,start,mid);
    divide(arr,mid,end);
    merge(arr,start,mid,end);
    return arr;
}

function mergeSort(arr,len){
    divide(arr,0,len)
}

```

[Visualization](https://biplab-roy.github.io/Easy-Sorting/)

***
## **5. Quick Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 
1. Always pick first element as pivot.
2. Always pick last element as pivot (implemented below)
3. Pick a random element as pivot.
4. Pick median as pivot.
   
The key process in quickSort is `partition()`. Target of partitions is, given an array and an element `x` of array as pivot, put `x` at its correct position in sorted array and put all smaller elements (smaller than `x`) before `x`, and put all greater elements (greater than `x`) after `x`. All this should be done in linear time. Now we can divide the array into two subarray (left side of `x` and right side of `x`) then we can perform the same process again. Assuming `x` divides the array into two equal halves recursion depth of parition will be `logn`. So complexity of the algorithm becomes `O(nlogn)`. There is a loophole what if the pivot don't divide the array into two equal halves then as a result recursion depth increases. That's how complexity of the algorithm can be increased to highest `O(n`<sup>`2`</sup>`)`. It happens when out choosen pivot is the smallest or largest of the subarray. Now let's look at the algorithm.
<br><br>
Algorithm :

```javascript
function quickSort(arr,start,end){
    if(end<=start){
        return;
    }
    var pivot=arr[start];
    var i = start+1, j = start+1;
    while(j<end){
        if(pivot>=arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        j++;
    }
    var temp = arr[i-1];
    arr[i-1] = arr[start];
    arr[start] = temp;
    quickSort(arr,start,i-1);
    quickSort(arr,i,end);
}
call quickSort(arr,0,arr.length)
```

[Visualization](https://biplab-roy.github.io/Easy-Sorting/)

***
## **6. Heap Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Heap sort is a comparison based sorting technique based on Binary Heap data structure. Binary Heap a well known data structure also used as priority queue. We can get largest/smallest element from a heap in `O(1)` time. Now we can remove the element then a heapify process happens to build the heap. This heapify process takes `O(logn)` times. for n elements to get smallest/largest element every time we will have total complexity as `O(nlogn)`. Building initial Binary heap also takes `O(n)`. To know more about Binary Heap [refer here](https://en.wikipedia.org/wiki/Binary_heap).
<br><br>
Algorithm :

```javascript
function heapify(arr,n,i){
    var l = 2*i + 1;
    var r = 2*i + 2;
    var largest = i;
    if (l<n && arr[l]>arr[largest]){
        largest = l;
    }
    if (r<n && arr[r]>arr[largest]){
        largest = r;
    }
    if(largest!=i){
        var temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        heapify(arr,n,largest);
    }
    return;
}

function heapSort(arr,len){
    for(var i = Math.floor(len/2); i>=0; i--){
        heapify(arr,len,i);
    }
    for(var i=len-1;i>=0;i--){
        var temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        heapify(arr,i, 0);
    }
    return arr;
}
```

[Visualization](https://biplab-roy.github.io/Easy-Sorting/)


***
## **7. Radix Sort**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
In computer science, radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. For elements with more than one significant digit, this bucketing process is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered. So, if there are `d` digits of the largest number then the process will repeat d times and every time it will take `n` time to put all element into right bucket. So complexity of the algorithm becomes `O(nd)`. It also requires extra space of `O(n)`. Radix sort works better for wide range of inputs.
<br><br>
Algorithm :
```javascript
function radixSort(arr,len) {
    const maxNum = Math.max(...arr.slice(0,len)) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       let buckets = [...Array(10)].map(() => []);
       for (var j=0;j<len;j++) {
            buckets[Math.floor((arr[j] % divisor) / (divisor / 10))].push(arr[j]);
       }
       new_arr = [].concat.apply([], buckets);
       for(var i=0; i<len; i++){
            arr[i]=new_arr[i]
       }
       divisor *= 10;
    }
 }

```
[Visualization](https://biplab-roy.github.io/Easy-Sorting/)
***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Here is the short description of some sorting algorithms. There are also many more sorting algorithm available.

## Connect me
---
[LinkedIn](https://www.linkedin.com/in/biplab-roy-4b63b316a/) <br>
[Facebook](https://www.facebook.com/profile.php?id=100008888882996)
