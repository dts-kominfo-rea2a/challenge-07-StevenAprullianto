const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(data) =>{
    try{
        let marah = [];
        let tidakMarah = [];
        if(data === "marah"){
          promiseTheaterIXX().then((dataIxx)=>{
            dataIxx.forEach(element => {
              if(element.hasil === data){
                marah.push(element.hasil);
              }
            })
          });

          promiseTheaterVGC().then((dataVgc)=>{
            dataVgc.forEach(element =>{
              if(element.hasil === data){
                marah.push(element.hasil);
              }
            })
            console.log(marah.length);
          });
        }else{
          promiseTheaterIXX().then((dataIxx)=>{
            dataIxx.forEach(element => {
              if(element.hasil === data){
                tidakMarah.push(element.hasil);
              }
            })
          });

          promiseTheaterVGC().then((dataVgc)=>{
            dataVgc.forEach(element =>{
              if(element.hasil === data){
                tidakMarah.push(element.hasil);
              }
            })
            console.log(tidakMarah.length);
          });
        }
    }catch(error){
      console.log(error);
    }
};

module.exports = {
  promiseOutput,
};
