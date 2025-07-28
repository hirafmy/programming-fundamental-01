// came case ( huruf kecil semua, tanpa spasi, dan setiap kata baru dimulai dengan huruf besar  )

// Mengecek cuaca apakah hujan atau tidak

let isRainy: boolean = false;

console.log('Pergi keluar rumah');
console.log('pas sampai depan rumah');

isRainy = true 

if (isRainy) {
  console.log('Bawa payung');
} else {
    console.log('Tidak perlu bawa payung');
    }

    console.log('Berangkat ');
    console.log('..............................................');  


    // case 2 : mengecek apakah saldo atm cukup atau tidak membeli barang


    let balance: number = 100
    let itemPrice: number = 150

    // 100 >= 150 = false   
    if (balance >= itemPrice) {
        console.log('Saldo cukup, silakan beli barang');
    } else {
        console.log('Saldo tidak cukup, silakan isi ulang saldo');
    }


    // logical operator

    // console.log('..............................................');
  
    // AND (&&)
    // False&&False = False
    // False&&True = False
    // True&&False = False
    // True&&True = True
   
    // OR (||)
    // False||False = False
    // False||True = True
    // True||False = True
    // True||True = True
   
    // NOT (!)
    // !False = True
    // !True = False 
    
    //Case 3 : logical statment 
    console.log('..............................................');
    let statement1: boolean = false;
    let statement2: boolean = true;

    // false || false  
    if (statement1 || statement2) {
        console.log('hello');
    } else {
        console.log('world');
    }

    let statement3: boolean = false
    if (statement3 && (statement2 ||!statement1)) {
        console.log('hello world');
    } else {
        console.log('goodbye world');
    }

    statement2 = false;
    if (statement2 || (!statement3 && !statement1)) {
        console.log('hello world');
    } else {
        console.log('goodbye world');
    }