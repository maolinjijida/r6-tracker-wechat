//这是测试能不能得到erdt的玩家数据，会返回403 
//原因是apikey未开通权限 不知道tracker审核到什么时候
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const {getProfile} = require('./src/sdk/endpoints/profile');
console.log('API_KEY:', process.env.API_KEY);//for test


async function saveProfileTofile(){
    try{
        const platform = 'uplay';
        const username = 'Emmm0991';

        const data = await getProfile(process.env.API_KEY, platform, username);

        const filePath = path.join(__dirname,`${username}_profile.txt`);
        fs.writeFileSync(filePath,JSON.stringify(data,null,2));

        console.log('successfully save on txt');
    }catch(err){
        console.error("Error",err.message);
    }
}

saveProfileTofile();