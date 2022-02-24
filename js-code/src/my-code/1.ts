/*
 * @Author: baipeiyun
 * @Date: 2022-02-22 20:15:05
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-02-22 20:43:31
 * @FilePath: /临时用/fe-interview-100/js-code/src/my-code/1.ts
 * @Description:
 */

// 旋转数组k步

function retate(arr:number[],k:number):number[]{
    if(!arr.length|| k===0) return arr;
    const step = Math.abs(k % arr.length);

    // for(let i=1; i<=step;i++){
    //     const a = arr.pop();
    //     if(a!=null){
    //         arr.unshift(a)
    //     }
    // }

    const part1 = arr.splice(-step);
    // const

    return arr;
}

