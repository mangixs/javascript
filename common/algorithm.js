// 冒泡排序
// 冒泡排序的基本思想是从头遍历要排序的数组，比较相邻两个数，如果前面位置的数大于后面位置的数，那么就将两者进行交换，否则不做任何操作。遍历完一次之后，最大的数就放到了数组最后的位置。然后再从头遍历数组，进行同样的操作，就可以将第二大的数放到倒数第二个位置，依此进行下去，直到所有数都排好位置为止。冒泡排序的代码实现如下：
functon bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换位置
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        return arr;
    }
}
// 冒泡排序平均时间复杂度为O(n^2),而且是一种稳定的排序算法。
// 选择排序
// 选择排序的基本思想是先找到数组中最小的元素，将它和数组的第一个元素交换位置，再找到数组中第二小的元素，将它和数组的第二个元素交换位置，依次进行下去，直到整个数组排好序为止。选择排序代码实现如下：
functon selectSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = arr[i];
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                var temp = min;
                min = arr[j];
                arr[j] = temp;
            }
            arr[i] = min;
        }
    }
    return arr;
}
// 选择排序的时间复杂度为O(n^2),而且是一个不稳定的排序算法。
// 插入排序
// 插入排序的基本思想是将一个记录（数）插入到已排好序的有序数列中的适当位置。插入排序的代码实现如下：
function insertSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = key;
            }
        }
    }
    return arr;
}
// 插入排序的时间复杂度为O(n^2),而且是一个稳定的排序算法。
// 希尔排序
// 希尔排序又称“缩小增量排序”，是在直接插入排序算法上进行改进的，它的基本思想是先将整个待排序序列分割成若干子序列，分别进行直接插入排序，待整个序列中的记录基本有序时，再对全体记录进行一次直接插入排序。因为插入排序在对几乎已经排好序的数据操作时，效率高。
// 希尔排序的步骤是：首先取一个小于序列长度的整数d1作为增量，对序列从头开始把所有距离为d的元素放在同一个分组中，现在各组内进行直接插入排序；然后去第二个增量d2（小于d1），进行同样的操作，直到增量为1，即对已经基本有序的序列进行插入排序。希尔排序代码实现如下：
function shellSort(arr, dk) {
    for (var d = dk / 2; d > 0; d /= 2) {
        for (var j = d; j < n; j++) {
            if (arr[j] < arr[j - d]) {
                var temp = arr[j];
                var k = j - d;
                while (k >= 0 && arr[k] > temp) {
                    arr[k + d] = arr[k];
                    k -= d;
                }
                arr[k + d] = temp;
            }
        }
    }
}
// 希尔排序的时间复杂度为O(n^3/2),而且是一个不稳定的排序算法。
// 快速排序
// 快速排序是一种分而治之的算法，它是冒泡排序的改进，基本思想是通过一趟排序将待排序列分割成独立的两部分，其中一部分的值都要比另一部分的值小，再分别对这两部分继续进行排序，直到整个序列有序。
// 快速排序的步骤是：首先从序列中选择一个基准元素，假设为第一个元素，将列表分成两部分，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值后面，再分别对这两部分重复上面的步骤即可。代码首先如下：
// key为基准值序号
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        var low = [];
        var high = [];
        var pivotkey = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] <= pivotkey) {
                low.push(arr[i]);
            } else {
                high.push(arr[i]);
            }
        }
    }
    return quickSort(low).concat(pivotkey, quickSort(high));
}
// 快速排序的时间复杂度为O(nlogn),而且是一个不稳定的排序算法。