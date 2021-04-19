// set = 不能重複的array,尋找跟新增/刪除元素平均效能比較好
// 但連續性的資料還是要用array

// 用object模擬set
class MySet{
    constructor(){
        this.items={}
    };
    add(value){
        if(!this.has(value)){
            this.items[value]=value
        }
    };
    delete(value){
        if(this.has(value)){
            delete this.items[value];
            return true;
        }
        return false;
    };
    has(value){
        return this.items.hasOwnProperty(value);
    };
    clear(){
        this.items={};
    };
    size(){
        return Object.keys(this.items).length
    };
    values(){
        return Object.values(this.items)
    }
}

let people=new MySet();

people.add("alice");
people.has("alice");
people.add("ben");
people.delete("alice");

people.size();
peoplr.values();

// es6原生set
let people=new Set();
people.add("a");
// or let people=nre Set(["a","b"])
 [...people] //set 轉陣列



 //==============================================
 let a = new Set([1, 2, 3]);
 let b = new Set([4, 3, 2]);
 
 // 并集  ab全進來
 let union = new Set([...a, ...b]);
 // Set {1, 2, 3, 4}
 
 // 交集  ab都有
 let intersect = new Set([...a].filter(x => b.has(x)));
 // set {2, 3}
 
 // 差集  a有b沒有
 let subtracting = new Set([...a].filter(x => !b.has(x)));
 // Set {1}


//  Symmetric Difference  a+b-ab都有的
let difference= new Set([...union].filter(x => !intersect.has(x)))
// Set{1,4}