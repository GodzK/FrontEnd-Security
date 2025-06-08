// Content Security Policy (CSP)
//  CSP default-src 'self' อนุญาตเฉพาะ content จาก domain เดียวกัน
import express from "express"
const app = express();

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self'");
  next();
});

app.get('/', (req, res) => {
  res.send(`
    <h1>ทดสอบ CSP</h1>
    <script>alert('สคริปต์นี้จะรัน')</script>
    <script src=""https://untrusted.com/script.js""></script>
  `);
});

app.listen(3000, () => console.log('Server running on port 3000'));