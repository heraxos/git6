document.getElementById('btn1').onclick = (event) => {
    event.preventDefault();
    let number = document.getElementById('num').value;
    let price = document.getElementById('price').value;
    if((/\D/.test(number)) || (/\D/.test(price))){
        console.log('complete');
        document.getElementById('itog').innerHTML = "Not valid value";  
      }
    else{
        console.log('not complete');
        document.getElementById('itog').innerHTML = number*price ;
    }
}

let sel_price = [100, 400, 700];
let rad_price = [50, 150, 350];
let che_pr = 1500;

function getRadPrice(cop_main){
    r = document.getElementsByName('try');
    for(let i of r){
        if(i.checked){
            return cop_main + rad_price[i.value-1];
        }
    }
}

function getPrice(){
    let secss = document.getElementById('secs');
    let chec = document.getElementById('che');

    let s = document.querySelector('.af');
        let uf = s.value;
        if(uf ==1){
            secss.style.display = "none";
            chec.style.display = "none";
            return sel_price[0];
        }
        else if(uf == 2){
            secss.style.display = "block";
            chec.style.display = "none";
            return sel_price[1] + rad_price[0];
        }
        else if(uf == 3){
            secss.style.display = "none";
            chec.style.display = "block";
            return sel_price[2];
        }
    return 0;
}

window.addEventListener('DOMContentLoaded', function(event){
    let secss = document.getElementById('secs');
    let chec = document.getElementById('che');
    secss.style.display = "none";
    chec.style.display = "none";

    let see_pr = document.getElementById('outcome');
    let main_price=0;

    let selector = document.querySelector('.af');
    let selec = selector[0];
    main_price = getPrice();
    see_pr.innerHTML = main_price;

    let que = document.getElementById('numm');

    que.addEventListener('change', function(event){
        see_pr.innerHTML = main_price*que.value;
    });

    document.querySelector('.af').addEventListener('change', function(event){
        main_price = getPrice();
        see_pr.innerHTML = main_price*que.value;
    });
    
    let r = document.getElementsByName('try');
    for (let i of r){
        i.addEventListener('change', function(event){
            main_price=getRadPrice(sel_price[1])*que.value;
            see_pr.innerHTML = main_price;
        });
    }

    let che = document.getElementById('check');
    che.addEventListener('change', function(event){
        if (che.checked){
            main_price+=che_pr;
            see_pr.innerHTML = main_price*que.value;
        }
        else{
            main_price = sel_price[2]*que.value;
            see_pr.innerHTML = main_price;
        }

    });
});
