// map vs object(key:any type vs string)
// object's key must be string ,map's key can be any type
// object裡的東西沒有順序性，map的順序就是加入的順序


// 適合用 Object 時機
// 只需要儲存一些簡單資料，並確定 Key 值是 simple type (String、Number、Symbol...)。
// 那用 Object 會快很多 
// (你用 Map 還是要 new Map() 出來沒別的方法。而 literal 建立比 constructor 快多了)



// 適合用 Map 時機
// key 或 value 需要順序時候 (像 LeetCode # 1122 Relative Sort Array 就有善用到 Map 順序性)
// key 需要不同型別時
// 找東西時，Map 比 Object 還快