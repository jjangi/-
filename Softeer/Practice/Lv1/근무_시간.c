#include <stdio.h>

int main(void)
{
	int time = 0, go_h, go_m, leave_h, leave_m;
	for(int i = 0; i < 5; i++){
		scanf("%d:%d %d:%d", &go_h, &go_m, &leave_h, &leave_m);
		time += (leave_h - go_h) * 60 + (leave_m - go_m);
	}
	printf("%d", time);

	return 0;
}
