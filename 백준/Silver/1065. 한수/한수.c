#include <stdio.h>
void hansoo(int N){
    if(N<100){
        printf("%d", N);
    }
    else {
        int cnt = 99;
        int A, B, C;
        for (int i = 100; i<=N; i++){
            A = i / 100;
            B = i / 10 % 10;
            C = i % 10;
            
            if ((C-B)==(B-A)){
            cnt++;
        }}
            printf("%d", cnt);
    }
}
int main(){
    int N;
    scanf("%d", &N);
    hansoo(N);
}