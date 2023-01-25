#include <stdio.h>

int main(void){
    int total, n, sum = 0;
    scanf("%d", &total);
    scanf("%d", &n);
    
    for (int i = 0; i < n; i++){
        int a, b;
        scanf("%d %d", &a, &b);
        sum += a * b;
    }
    
    if(total == sum){
        printf("Yes");
    }
    else {
        printf("No");
    }
}