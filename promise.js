const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (data) =>{
  return new Promise(
    (resolve) =>{
      let arrRespon = []
      if(data === "marah"){

        promiseTheaterIXX().then((dataIxx)=>{
          dataIxx.forEach(element => {
            if(element.hasil === data){
              arrRespon.push(element.hasil);
            }
          })
        })

        promiseTheaterVGC().then((dataVgc)=>{
          dataVgc.forEach(element =>{
            if(element.hasil === data){
              arrRespon.push(element.hasil);
            }
          })
          resolve(arrRespon.length) ;
        })

      }else{

        promiseTheaterIXX().then((dataIxx)=>{
          dataIxx.forEach(element => {
            if(element.hasil === data){
              arrRespon.push(element.hasil);
            }
          })
        })

        promiseTheaterVGC().then((dataVgc)=>{
          dataVgc.forEach(element =>{
            if(element.hasil === data){
              arrRespon.push(element.hasil);
            }
          })
          resolve(arrRespon.length) ;
        })

      }
    }
  )
}

module.exports = {
  promiseOutput,
};
