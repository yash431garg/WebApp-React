import java.util.*;

class Season{

  public int[] placement(int input1,int[] input2) {
    int a[]=new int[input1];
    a[0]=0;
    for(int i=1;i<input1;i++){
      a[i]=0;
      for(int j=i-1;j>=0;j--)
      if(input2[j]>=input2[i]){
        a[i]++;
      }
    }
    return a;
  }
}