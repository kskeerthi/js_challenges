int Solution::colorful(int A) {
    
    vector<int> store;
    int product = 1;
    int val = 1;
    while(A){
        product *= (A%10);
        store.insert(store.begin(),A%10);
        A /= 10;
    }
    unordered_map<int,int> hashMap;
    for(int i=0;i<store.size();i++){
        val = 1;
        for(int j=i;j<store.size();j++){
            val *= store[j];
            if(hashMap.find(val) != hashMap.end()){
                return 0;
            }
            hashMap.insert({val,val});
        }
    }
    return 1;
}
