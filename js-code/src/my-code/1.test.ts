/*
 * @Author: baipeiyun
 * @Date: 2022-02-25 20:23:34
 * @LastEditors: baipeiyun
 * @LastEditTime: 2022-02-25 20:26:02
 * @FilePath: /临时用/fe-interview-100/js-code/src/my-code/1.test.ts
 * @Description: 
 */
import retate from './1';

describe('测试数组旋转',()=>{
    it('正常情况',()=>{
        const arr = [1,2,3,4,5,6];
        const k = 2;
        const res = retate(arr,k);

        expect(res).toEqual([5,6,1,2,3,4]);
    })
})