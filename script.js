// // constructor function

// function User(name, surname, age){
//     this.ad = name,
//     this.soyad = surname,
//     this.yas = age
// };


// User.prototype.fullName = function(){
//     console.log(name + " " + surname);
// };

// User.prototype.friends = ['YeniDost1', 'YeniDost2'];


// const arif = new User('Arif' , 'Qulu', 45);
// const akif = new User('Akif', 'Qulu', 34);


// arif.friends.push('YeniDost3')

// console.log(arif.friends);
// console.log(akif.friends);



// class User {

//     constructor(name, surname, age) {
//             this.ad = name,
//             this.soyad = surname,
//             this.yas = age
//             // this.friends = ['YeniDost', 'yenisDost2']
//     }


// }



// const arif = new User('Arif' , 'Qulu', 45);
// const akif = new User('Akif', 'Qulu', 34);


// // arif.friends.push('YeniDost3');

// console.log(arif);
// console.log(akif);



// User super class
// Person sub class

// class Person extends User{
//     constructor(name, surname, age, job){
//         super(name,surname,age),
//         this.job = job
//     }
// }

// const orxan = new Person('Orxan', "Zeynalli", 34, 'reper');


// console.log(orxan instanceof Person);
// console.log(arif instanceof User);
// console.log(akif instanceof User);
// console.log(orxan instanceof User);
// console.log(arif instanceof Person);


// class
class Sirket{
    constructor(sirketAdi, filialAdi){
        this.sirket = sirketAdi,
        this.filial = filialAdi
    };


    Isciler = [
        [],
        [],
        []
    ];

    gonder(){

        let data = this.Isciler;

        let ad = document.querySelector('#ad');
        let vezife = document.querySelector('#vezife');
        let maas = document.querySelector('#maas');

        data[0].push(ad.value);
        data[1].push(vezife.value);
        data[2].push(maas.value);
    }

    tableQur(){
        let data = this.Isciler;
        let tbl = ` <tr>
        <th scope="col">#</th>
        <th scope="col">Ad</th>
        <th scope="col">Vezife</th>
        <th scope="col">Maas</th>
      </tr>`;

      for(let i = 0; i<data[0].length; i++){
          tbl+= `
          <tr>
          <th scope="row"> ${i+1} </th>
          <td> ${data[0][i]} </td>
          <td>${data[1][i]}</td>
          <td>${data[2][i]}</td>
        </tr>`
      }

      return tbl;

    }


}


// sirketler
const a = new Sirket('Yup Technology', 'Elmler');
const b = new Sirket('Yup Technology', 'Nizami');
const c = new Sirket('Yup Technology', 'Yasamal');


// ekran
document.querySelector('#h1').innerHTML = a.sirket;
let filialP =  document.querySelector('#p');
let arrSelect = document.querySelector('select');
let btnModal = document.querySelector('#btn');

let table = document.querySelector('table');


// filial array
let arr= [];

arr.push(a.filial,b.filial, c.filial);
let arrFilial = "<option selected disabled > Filial Secin </option>";

for(let i = 0; i<arr.length; i++){
arrFilial += `  <option value="${i}"  > ${arr[i]} </option>`
};
arrSelect.innerHTML = arrFilial;


arrSelect.addEventListener('change', ()=>{

    btnModal.classList.remove('disabled');

    if(arrSelect.value == 0){
        filialP.innerHTML = a.filial;
    }else if(arrSelect.value == 1){
        filialP.innerHTML = b.filial;
    }else if(arrSelect.value == 2){
        filialP.innerHTML = c.filial;
    }

})


// let btn2=document.querySelector('btn2')
function send(){
 
    if(ad.value=='' ){
// btn2.classList.add('disabled');
  alert('Melumat qeyd edin')
  ad.value=''
    maas.value=''
    vezife.value=''
    }
    else if(maas.value==''){
        alert('Melumat qeyd edin')
        ad.value=''
    maas.value=''
    vezife.value=''
    }
    else if(vezife.value==''){
        alert('Melumat qeyd edin')
        ad.value=''
    maas.value=''
    vezife.value=''
    }

    else {
         a.gonder();
    table.innerHTML = a.tableQur();
    ad.value=''
    maas.value=''
    vezife.value=''

    }
}



