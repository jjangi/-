#include <stdio.h>
int main(void){
    // N은 0보다 크거나 같고, 99보다 작거나 같은 정수이므로 -1을 대입해서 반복문이 실행되도록 함.
    int a,b,c,d=-1,result,input,count=0;
    
    scanf("%d", &input);
    result = input;
    
    while(d!=result) {
        a = input / 10;
        b = input % 10; //input의 일 자릿수
        c = (a+b) % 10; //input 각 자릿수 합의 1 자릿수
        d = (b*10) + c;
        input = d;
        count++;
    }
    printf("%d", count);
    return 0;
}