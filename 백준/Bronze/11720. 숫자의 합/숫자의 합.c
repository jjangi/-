#include <stdio.h>
int main(){
    int n, sum = 0;
    scanf("%d", &n);
    char str[n];
    scanf("%s", str);
    for (int i =0;i<n;i++){
        sum += str[i] - '0';
    }
    printf("%d", sum);
}