/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades: number[]): number[] {
    // Write your code here
    const result: number[] = [];
    grades.forEach(currentGrade => {
        const roundTo = Math.ceil(currentGrade / 5) * 5;

        if (currentGrade < 38) result.push(currentGrade);
        else {
            const sum = roundTo - currentGrade;
            console.log(sum);

            if (sum < 3) result.push(roundTo);
            else if (sum >= 3) result.push(currentGrade);
        }
    });

    return result;
}
