export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
    console.log(res);
  }