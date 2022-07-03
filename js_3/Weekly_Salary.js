function weeklySalary(arr) {
    let sal = 0;
    let i = 0;
    while (i < arr.length) {
        if (i < 5 && arr[i] <= 8)
        sal += arr[i] * 10

        if (i < 5 && arr[i] > 8)
        sal += (arr[i] - 8) * 15 + 8 * 10

        if (i >= 5 && arr[i] <= 8)
        sal += (arr[i] * 10) * 2

        if (i >= 5 && arr[i] > 8)
        sal += ((arr[i] - 8) * 15) * 2 + 8 * 10 * 2

        i++
    }
    console.log(sal)
}


weeklySalary([8, 8, 8, 8, 8, 0, 0])
weeklySalary([10, 10, 10, 0, 8, 0, 0])
weeklySalary([0, 0, 0, 0, 0, 12, 0])
