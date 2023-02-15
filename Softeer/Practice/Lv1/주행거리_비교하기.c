#include <stdio.h>


int main(void)
{
	int A, B = 0;
	scanf("%d %d",&A, &B);

	if(A > B){
		printf("A");
	}
	else if(A < B){
		printf("B");
	}
	else{
		printf("same");
	}

	return 0;
}
