
   
    let Schar = `abcdefghijklmnopqrstuvwxyz`
    let Bchar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let nums = `1234567890`
    let spec = `!@#$%^&*()_+?></:;{}|`

let passGen=(pass)=>{
    let arr = [Schar,Bchar,nums,spec]
    let password=``
    if(pass==`easy`){
        let len = 4
        for(let i=0;i<len;i++){
            let given = Math.floor(Math.random()*Schar.length)
           password=password+Schar[given]
        }
        // return password
    }
    else if(pass == `strong`){
        for(let i=0;i<6;i++){
        let type = Math.floor(Math.random()*4)
        // console.log(arr[type])
        let given = Math.floor(Math.random()*arr[type].length)
        // console.log(given)
        password = password+arr[type][given]
        }
        // return password
    }
    else if(`super strong`){
        for(let i=0;i<8;i++){
            if(i==0){
                let given = Math.floor(Math.random()*Bchar.length)
                password = password+Bchar[given]
            }
            else if(i>=1&&i<=3){
                let given = Math.floor(Math.random()*Schar.length) 
                password = password + Schar[given]
            }
            else if(i==4){
                let given = Math.floor(Math.random()*spec.length)
                password = password + spec[given]
            }
            else{
                let given = Math.floor(Math.random()*nums.length)
                password = password + nums[given]
            }
        }
    }
    return password

}
const output = document.getElementsByClassName(`form-control`)[0]
const btn = document.getElementsByClassName(`btn`)[0]
const select = document.getElementsByClassName(`form-select`)[0]
console.log(select)

// btn.addEventListener(`click`, passGen())

// output.value = password
// console.log(output.value)
// console.log(passGen(`easy`))