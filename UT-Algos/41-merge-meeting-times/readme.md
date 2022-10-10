# Merge Meeting Times

In this activity, you will create a function that takes in a 2D array of meeting times, with each sub-array containing two integers that represent a meeting's start and end times. Return a new 2D array of collapsed meeting times -- that is, combined sub-arrays where meeting blocks overlap to reflect the combined start and end time.

## Instructions

    * Return a new 2D array that contains combined meeting times.

    * See the following array for an example:

       ```js
       var arr = [[ 1, 3 ], [ 2, 4 ]];
       ```

    * The preceding array should return the following:

       ```js
       [[ 1, 4 ]];
       ```

    * Because the second meeting begins (`2`) while the first meeting is still in session (`1` to `3`), we can combine these meeting blocks into a `1` to `4` block. This gives us `[[ 1, 4 ]]` as the answer.

    * Meeting blocks won't necessarily be provided in sorted order.

    * For example, see the following array:

       ```js
       var arr = [ [ 5, 8 ], [ 1, 4 ], [ 6, 8 ] ];
       ```

    * The preceding array should return the following:

       ```js
       [[1, 4], [5, 8]];
       ```

    * Because the `[ 1, 4 ]` block comes before the `[ 5, 8 ]` and the `[ 6, 8 ]` and doesn't overlap with anything, it should be first sub-array in the result. Because `[ 5, 8 ]` and `[ 6, 8 ]` overlap, they can be merged into `[ 5, 8 ]` because both times fall into this combined range.

    * Assume the provided array will only contain two element sub-arrays that contain integers. Each sub-array in the provided array will be in sorted order; that is, the first element will always be a start time, and the second element will always be an end time that proceeds it.
