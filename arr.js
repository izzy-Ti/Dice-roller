butt.onclick=function(){
    let num=document.getElementById(`inp`).value;
    let butt=document.getElementById(`butt`);
    let gus=document.getElementById(`numb`);
    let img=document.getElementById(`imgg`);
    let val;
    let ght=[];
    let ing=[];
    for(let i=0 ; i< num ; i++){
        val=Math.floor(Math.random()*6)+1;
        ght.push(val);
        ing.push(`<img src="img/${val}.jpg">`);
        gus.textContent=ght.join(`  &   `);
        img.innerHTML=ing.join(`  `);
    }
}