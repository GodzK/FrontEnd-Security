//การเก็บ Token อย่างปลอดภัย
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cookieParser());
//ผลลัพธ์: document.cookie จะไม่แสดง token เพราะตั้งค่า HttpOnly
// คำอธิบาย: HttpOnly ป้องกันการเข้าถึง cookie ผ่าน JavaScript ทำให้ปลอดภัยจาก XSS
app.get('/login', (req, res) => {
  res.cookie('token', 'abc123', { httpOnly: true, secure: true, sameSite: 'strict' });
  res.send(`
    <button onclick="checkToken()">ตรวจสอบ Token</button>
    <script>
      function checkToken() {
        alert('ไม่สามารถเข้าถึง token ผ่าน JS ได้');
      }
    </script>
  `);
});

app.listen(3000, () => console.log('Server running on port 3000'));