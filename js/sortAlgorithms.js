
function sorter(arr,len,sortAlgo){
    switch(sortAlgo) {
        case 0:
            quickSort(arr,0,len);
            break;
        case 1:
            mergeSort(arr,0,Math.floor(len));
            break;
        case 2:
            heapSort(arr,len);
            break;
        case 3:
            bubbleSort(arr,len);
            break;
        case 4:
            insertionSort(arr,len);
            break;
        case 5:
            selectionSort(arr,len);
            break;
        case 6:
            arr = radixSort(arr,len);
            break;
        default:
            console.log("No sorting algo");
    }
}
async function merge(arr,start,mid,end){
    var i=start, j=mid, k=0;
    var newarr = [];
    while(i<mid && j<end){
        var fbar = document.getElementById(i);
        var sbar = document.getElementById(j);
        sbar.style.backgroundColor = "yellow"
        fbar.style.backgroundColor = "yellow"
        await new Promise(r => setTimeout(r, speed));
        if(arr[i]<arr[j]){
            newarr[k]=arr[i];
            fbar.style.backgroundColor = "red"
            i++;
            k++;
        }
        else{
            newarr[k] = arr[j];
            sbar.style.backgroundColor = "red"
            j++;
            k++;
        }
    }
    while(i<mid){
        var fbar = document.getElementById(i);
        newarr[k]=arr[i];
        fbar.style.backgroundColor = "red"
        i++;
        k++;
    }
    while(j<end){
        var sbar = document.getElementById(j);
        newarr[k] = arr[j];
        sbar.style.backgroundColor = "red"
        j++;
        k++;
    }
    for(var i=0;i<k;i++){
        var done = document.getElementById(i+start);
        arr[i+start] = newarr[i];
        await new Promise(r => setTimeout(r, speed));
        done.style.height = arr[i+start] + "px";
        done.style.backgroundColor = "green";
    }
}


async function mergeSort(arr,start,end){
    if(end<=start+1){
        return;
    }
    console.log(start,end);
    var mid = Math.floor((start+end)/2);
    await mergeSort(arr,start,mid);
    await mergeSort(arr,mid,end);
    await merge(arr,start,mid,end);
}


async function quickSort(arr,start,end){
    if(end<=start){
        document.getElementById(start).style.backgroundColor = "green";
        return;
    }
    var pivot=arr[start];
    var fbar = document.getElementById(start);
    fbar.style.backgroundColor = "red";
    await new Promise(r => setTimeout(r, speed));
    var i = start+1, j = start+1;
    //5 3 2 1 8 7
    while(j<end){
        var swap = document.getElementById(i);
        var swap2 = document.getElementById(j);
        swap.style.backgroundColor = "yellow";
        swap2.style.backgroundColor = "yellow";
        if(pivot>=arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            swap.style.height = arr[i] + "px";
            swap2.style.height = arr[j] + "px";
            i++;
            j++;
        }
        else{
            j++;
        }
        await new Promise(r => setTimeout(r, speed));
        swap.style.backgroundColor = "blue";
        swap2.style.backgroundColor = "blue";
    }
    var temp = arr[i-1];
    arr[i-1] = arr[start];
    arr[start] = temp;
    document.getElementById(i-1).style.height = arr[i-1] + "px";
    document.getElementById(i-1).style.backgroundColor = "green";
    fbar.style.height = arr[start] + "px";
    fbar.style.backgroundColor = "blue"
    await quickSort(arr,start,i-1);
    await quickSort(arr,i,end);
}

async function bubbleSort(arr,len){
    for(var i=0;i<len;i++){
        var fbar;
        var sbar;
        for(var j=0;j<len-i-1;j++){
            fbar = document.getElementById(j);
            sbar = document.getElementById(j+1);
            fbar.style.backgroundColor = "red";
            sbar.style.backgroundColor = "yellow";
            if(arr[j+1]<arr[j]){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
            console.log(speed)
            await new Promise(r => setTimeout(r, speed));
            fbar.style.height = arr[j] + "px";
            sbar.style.height = arr[j+1] + "px";
            fbar.style.backgroundColor = "blue";
            fbar.style.backgroundColor = "blue";
        }
        sbar.style.backgroundColor = "green";
    }
    document.getElementById(j).style.backgroundColor="green"

}

async function heapify(arr,n,i){
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
        var fbar = document.getElementById(i);
        var sbar = document.getElementById(largest);
        fbar.style.backgroundColor = "red";
        sbar.style.backgroundColor = "yellow";
        var temp = arr[largest];
        arr[largest] = arr[i];
        arr[i] = temp;
        fbar.style.height = arr[i] + "px";
        sbar.style.height = arr[largest] + "px";
        await new Promise(r => setTimeout(r, speed));
        fbar.style.backgroundColor = "blue";
        sbar.style.backgroundColor = "blue";
        await heapify(arr,n,largest);
    }
    return;
}

async function heapSort(arr,len){
    for(var i = Math.floor(len/2); i>=0; i--){
        await heapify(arr,len,i);
    }
    for(var i=len-1;i>=0;i--){
        var temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        document.getElementById(0).style.height = arr[0] + "px";
        document.getElementById(i).style.height = arr[i] + "px";
        await new Promise(r => setTimeout(r, speed));
        document.getElementById(i).style.backgroundColor = "green";
        await heapify(arr,i, 0);
    }
    console.log("In funciton" + arr);
    
}

async function insertionSort(arr,len){
    for(var i=0;i<len-1;i++){
        var fbar;
        for(var j=i+1;j>0 && arr[j-1]>arr[j];j--){
            fbar = document.getElementById(j);
            var sbar = document.getElementById(j-1);
            fbar.style.backgroundColor = "yellow";
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            await new Promise(r => setTimeout(r, speed));
            fbar.style.height = arr[j] + "px";
            sbar.style.height = arr[j-1] + "px";
            fbar.style.backgroundColor = "blue";
        }
    }
    for(var i=0;i<len;i++){
        document.getElementById(i).style.backgroundColor = "green"
        await new Promise(r => setTimeout(r, speed));
    }
    console.log(arr);
}

async function selectionSort(arr,len){
    for(var i=0;i<len-1;i++){
        var fbar;
        var min=i;
        var prev=-1;
        var ind = document.getElementById(i);
        ind.style.backgroundColor = "red"
        for(var j=i;j<len;j++){
            fbar = document.getElementById(j);
            fbar.style.backgroundColor = "yellow";
            if(arr[j]<arr[min]){
                if(prev!=-1){
                    var prev_bar = document.getElementById(prev);
                    prev_bar.style.backgroundColor = "blue";
                }
                min=j;
                prev = min;
                document.getElementById(min).style.backgroundColor = "red";
            }
            await new Promise(r => setTimeout(r, speed));
            if(j!=min){
                fbar.style.backgroundColor = "blue";
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        ind.style.height = arr[i] + "px";
        document.getElementById(min).style.height = arr[min] + "px";
        await new Promise(r => setTimeout(r, speed));
        document.getElementById(i).style.backgroundColor = "green";
        if(i!=min){
            document.getElementById(min).style.backgroundColor = "blue";
        }
    }
    document.getElementById(i).style.backgroundColor = "green";
    console.log(arr);
}

async function radixSort(arr,len) {
    const maxNum = Math.max(...arr.slice(0,len)) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       let buckets = [...Array(10)].map(() => []);
       for (var j=0;j<len;j++) {
           console.log(j);
            document.getElementById(j).style.backgroundColor = "yellow";
            buckets[Math.floor((arr[j] % divisor) / (divisor / 10))].push(arr[j]);
            await new Promise(r => setTimeout(r, speed));
            document.getElementById(j).style.backgroundColor = "blue";
       }
       new_arr = [].concat.apply([], buckets);

       for(var i=0; i<len; i++){
            arr[i]=new_arr[i]
            document.getElementById(i).style.backgroundColor = "red"
            document.getElementById(i).style.height = arr[i]+"px";
            if(divisor<maxNum/10){
                await new Promise(r => setTimeout(r, speed));
                document.getElementById(i).style.backgroundColor = "blue";
            }
            else{
                await new Promise(r => setTimeout(r, speed));
                document.getElementById(i).style.backgroundColor = "green";
            }
       }
       divisor *= 10;
    }
    
 }