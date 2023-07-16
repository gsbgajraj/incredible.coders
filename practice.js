  var n=17, i, m=0, flag=0;  
  console.log("Enter the Number to check Prime: ");  
  m=n/2;  
  for(i = 2; i <= m; i++)  
  {  
      if(n % i == 0)  
      {  
          console.log("Number is not Prime.");  
          flag=1;  
          break;  
        }  
    }  
    if (flag==0)  
    console.log("Number is Prime.");   
    return 0;  