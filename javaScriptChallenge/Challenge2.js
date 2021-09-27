function factorial(n){
    var ans = 1;
    if (n == 0 || n == 1){
        return ans;

    }else{
        for(var i = n; i >= 1; i--){
            ans = ans * i;
        }
      return ans;
    }
}
