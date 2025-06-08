import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieParser());
// CSRF token ตรวจสอบว่า request มาจากผู้ใช้ที่ถูกต้อง SameSite cookies ป้องกันการส่ง cookie ข้าม domain
app.get('/', (req, res) => {
  const csrfToken = Math.random().toString(36).substring(2);
  res.cookie('session', 'abc123', { httpOnly: true, secure: true, sameSite: 'strict' });
  res.send(`
    <form action="/transfer" method="POST">
      <input type="hidden" name="csrf_token" value="${csrfToken}">
      <input type="text" name="amount" placeholder="จำนวนเงิน">
      <button type="submit">โอนเงิน</button>
    </form>
  `);
});

app.post('/transfer', (req, res) => {
  // จำลองการตรวจสอบ CSRF token
  if (req.body.csrf_token) {
    res.send('โอนเงินสำเร็จ');
  } else {
    res.status(403).send('CSRF token ไม่ถูกต้อง');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));