//* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//=============solution=============================
let searchInsert = function (nums, target) {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > target) { end = mid; }
        else { start = mid + 1; }

    }
    if (start === end) {
        return target <= nums[start] ? start : start + 1;
    }
};
//========================
//!-1 searchInsert([1,3,5,6],5) ---->Output: 2
//!-2 searchInsert([1,3,5,6],2) ---->Output: 1
//!-3 searchInsert([1,3,5,6],7) ---->Output: 4
