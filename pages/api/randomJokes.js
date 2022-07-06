import * as fs from 'fs';
export default async function  handler(req, res) {
    if (req.method === 'GET') {
      let data = await fs.promises.readdir('data/contactData');
      console.log(data.join('\n'));
      fs.promises.writeFile(`data/contactData/${data.length+1}.json`, JSON.stringify(req.body))
      res.status(200).json(req)
    } else { 
      res.status(200).json(["allBlogs"]) 

    }
  }