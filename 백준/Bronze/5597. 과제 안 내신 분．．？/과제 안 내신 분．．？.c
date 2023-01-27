#include <stdio.h>
int main(void){
    int arr[30] = {0};
    for(int i = 0;i < 28;i++){
        int a;
        scanf("%d", &a);
        arr[a-1]++;
    }
    for(int j=0;j<30;j++){
        if(arr[j]==0){
            printf("%d\n", j+1);
        }
    }
    return 0;
}