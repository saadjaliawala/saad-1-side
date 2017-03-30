

/*C - Calculate Employee and Employer
Provident Fund using C Program.*/

#include <stdio.h>

#define EMPLOYEE_PERCENTAGE 12.5f
#define EMPLOYER_PERCENTAGE 12.0f

int main(){
	float basicPay;
	float employeeFund,employerFund;

	printf("Enter basic pay: ");
	scanf("%f",&basicPay);

	employeeFund=(basicPay/100)*EMPLOYEE_PERCENTAGE;
	employerFund=(basicPay/100)*EMPLOYER_PERCENTAGE;

	printf("Basic Pay: %f\n",basicPay);
	printf("Employee contribution: %f\n",employeeFund);
	printf("Employer Contribution: %f\n",employerFund);

	return 0;
}
