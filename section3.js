// 🔒 Clickjacking คืออะไร?
// Clickjacking = การหลอกให้ผู้ใช้กดปุ่มโดยไม่รู้ตัว
// ตัวอย่างง่ายๆ:
// มีเว็บอันตรายที่ซ่อนเว็บของเราผ่าน <iframe> แล้วแอบวางปุ่มเว็บเราไว้ใต้ปุ่มปลอมของเว็บมัน 
// พอผู้ใช้กดปุ่ม มันคือการกดปุ่มในเว็บของเรา (เช่น “โอนเงิน” หรือ “ลบบัญชี”) โดยไม่รู้ตัว
import express from "express"
const app = express();

//ใช้ HTTP Header: X-Frame-Options
// บอก browser ว่า ห้ามฝังเว็บเราใน iframe ของเว็บอื่น

app.use((req, res, next) => {
// DENY = ห้ามฝัง iframe ทุกกรณี
// SAMEORIGIN = ฝัง iframe ได้ถ้าอยู่โดเมนเดียวกันเท่านั้น
  res.setHeader('X-Frame-Options', 'DENY'); // ป้องกัน iframe
  next();
});

app.get('/', (req, res) => {
//ใช้ Frame-Busting Script
// เพิ่ม JavaScript ตรวจว่าเว็บถูกโหลดใน iframe รึเปล่า — ถ้าใช่ ให้ redirect ออก
// window.top = หน้าเว็บบนสุด
// window.self = หน้าเว็บปัจจุบัน
// ถ้าไม่เท่ากัน = เราโดน iframe ฝังไว้ ➜ บังคับ redirect ออก
  res.send(`
    <h1>หน้าเว็บที่ปลอดภัยจาก Clickjacking</h1>
    <button onclick="alert('คลิกแล้ว!')">คลิกฉัน</button>
    <script>
      if (window.top !== window.self) {
        window.top.location = window.location; // Frame-busting
      }
    </script>
  `);
});

app.listen(3001, () => console.log('Server running on port 3001'));