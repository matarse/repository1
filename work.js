const sleep = msec => {
    const end = new Date().getTime() + msec;
    while (new Date().getTime() < end); // пока идет цикл while ничего не может случаться
};

console.log('Start sleep: ' + new Date().toISOString());
console.log('Sleep about 3 sec');
sleep(3000);
console.log('After sleep: ' + new Date().toISOString());

//Promise

const sleep1 = msec => new Promise(resolve=> { //создает новый экземпляр промиса
    setTimeout(resolve, msec); // сеттаймаут подождет сколько нужно и вызовет свой колбек, мы отдаем resolve
});

    (async ()=>{
        console.log('Start sleep: ' + new Date().toISOString());
        console.log('Sleep about 3 sec');
        await sleep1(3000); //ожидание когда sleep1 вернет свой resolve без блокирования 
        console.log('After sleep: ' + new Date().toISOString());
    
})();

const sleep3 = msec => new Promise(resolve=> {
    setTimeout(resolve, msec);
});

console.log('Start sleep: ' + new Date().toISOString());
console.log('Sleep about 5 sec');
sleep3(5000).then(()=>{ // из sleep возвращется промис
    console.log ('After sleep: ' + new Date().toISOString());
});
