export const calculateDays = (_endDate: Date | any) => {
    let start_date = new Date();
    let end_date = new Date(_endDate);


    // To calculate the time difference of two dates
    let Difference_In_Time = end_date.getTime() - start_date.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days =
        Math.round(Difference_In_Time / (1000 * 3600 * 24));
    console.log(">>>", Difference_In_Days);

    return Difference_In_Days;
}
