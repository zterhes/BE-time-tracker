const fs = require('fs');
import data from '../../constants/data.json';
import { UserData } from '../interface/UserInterface';

export const getUserData = (id: string): UserData => {
  const output: UserData = {
    name: data.userdata.name,
    img: data.userdata.img,
  };

  return output;

  //   fs.readFile('./constans/data.json', (err, data) => {
  //     if (err) throw err;
  //     let student = JSON.parse(data);
  //     console.log(student);
  //   });
};
