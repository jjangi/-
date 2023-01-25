#include <stdio.h>

int main(void){
    int n;
    scanf("%d", &n);
    for (int i = 1; i < n+1; i++){
        int a, b;
        scanf("%d %d", &a, &b);
        printf("%d\n", a+b);
    }
    return 0;
}