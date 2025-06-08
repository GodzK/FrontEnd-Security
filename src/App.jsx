import { useState } from 'react';
import DOMPurify from 'dompurify';

function App() {
  const [comment, setComment] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () => {
    console.log("domเริ่ม");
    const sanitized = DOMPurify.sanitize(comment);
    setOutput(sanitized);
    //logดูจะรู้ว่า dompurifyมัันลบค่าให้
    console.log(sanitized);
  };

  return (
    //สคริปต์จะไม่รัน เพราะ DOMPurify ลบโค้ดอันตรายออก
    <div>
      <h1>ป้องกัน XSS ด้วย DOMPurify</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="ใส่คอมเมนต์"
      />
      <button onClick={handleSubmit}>ส่ง</button>
      <div dangerouslySetInnerHTML={{ __html: output }} />
    </div>
  );
}

export default App;