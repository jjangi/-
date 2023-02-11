#include <stdio.h>

int main()
{
int a,b,c,i,j,max=-999;
for(i=1;i<=9;i++)
{
for(j=1;j<=9;j++)
{
scanf("%d",&a);
if(a>max)
{
max=a;
b=i,c=j;
}
}
}
printf("%d\n%d %d",max,b,c);

return 0;
}