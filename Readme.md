# 🔐 LoginTestCases – AI Assisted Test Case Design

## 📌 Төслийн зорилго

**LoginTestCases** нь login системийн функционал байдлыг шалгах **test case-үүдийг React (Vite) ашиглан визуал байдлаар харуулах** зорилготой төсөл юм. Энэхүү ажил нь Software Testing, QA, AI-assisted testing сэдвийн хүрээнд хийгдсэн.

Төсөл нь:

* Login процессын **positive / negative / edge case**-үүдийг
* Хэрэглэгчдэд ойлгомжтой UI дээр
* Сургалт, тайлан, хамгаалалтанд ашиглахад
  чиглэсэн.

---

## 🛠 Ашигласан технологи

| Технологи         | Тайлбар                   |
| ----------------- | ------------------------- |
| React             | UI хөгжүүлэлт             |
| Vite              | Хурдан build & dev сервер |
| JavaScript (ES6+) | Component логик           |
| Tailwind CSS      | UI загварчлал             |
| Node.js           | Runtime орчин             |

---

## 📂 Төслийн бүтэц

```
login-testcases/
├── src/
│   ├── LoginTestCases.js   # Login test case UI component
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ Төслийг ажиллуулах заавар

### 1️⃣ Node.js шалгах

```bash
node -v
npm -v
```

> Node.js 18+ байхыг зөвлөж байна

---

### 2️⃣ Dependency суулгах

```bash
npm install
```

---

### 3️⃣ Dev сервер асаах

```bash
npm run dev
```

Амжилттай асвал браузер дээр:

```
http://localhost:5173
```

---

## 🧪 Test Case-үүдийн төрөл

LoginTestCases компонент нь дараах тестүүдийг агуулна:

### ✅ Positive Test Cases

* Зөв username / password
* Амжилттай login

### ❌ Negative Test Cases

* Буруу нууц үг
* Хоосон талбар
* Буруу форматтай email

### ⚠️ Edge / Boundary Cases

* Маш урт password
* SQL injection оролдлого
* XSS оролдлого

---

## 🤖 AI ашигласан байдал

AI-г дараах зорилгоор ашигласан:

* Test case жагсаалт гаргах
* Edge case-үүд санал болгох
* Тестийн тайлбар, нэршлийг сайжруулах

Жишээ prompt:

> "Login system-д зориулсан positive, negative, edge test case-үүд үүсгэнэ үү"

---

## ⚠️ Анхаарах зүйлс

* Энэ төсөл нь **сургалт, тестийн зорилготой**
* Production системд шууд ашиглахгүй
* Backend authentication ороогүй (UI only)

---

## 📚 Ашиглах боломж

* Software Testing хичээл
* AI in QA demo
* Test Case design жишээ
* Тайлан, хамгаалалтын материал

---

## 👨‍🎓 Оюутанд зориулсан тэмдэглэл

Энэхүү ажил нь:

* Test Case ойлголтыг бодитоор харах
* AI-г QA-д хэрхэн ашиглаж болохыг ойлгох
* React + Testing сэдвийг хослуулах
  давуу талтай.

---

## 📌 Дүгнэлт

LoginTestCases төсөл нь login функционалын тестийг **орчин үеийн UI + AI санаа**-тай хослуулсан, сургалтын өндөр ач холбогдолтой demo төсөл юм.

---

✍️ *AI-assisted Software Testing coursework*
# AI Test & Synthetic Data Demo

Энэхүү репозитор нь **ПХ баталгаа ба туршилт** хичээлийн хүрээнд хийгдсэн AI-д суурилсан тестийн жишээ ажлуудыг агуулна. Үүнд unit test, synthetic test data үүсгэх, validation хийх, экспортлох зэрэг практик жишээнүүд багтсан.

---

## 📂 Төслийн бүтэц

```
unit-test-demo/
│
├─ test_email.py              # PyTest ашигласан unit test жишээ
├─ synthetic-data/
│   └─ SyntheticDataGenerator.jsx   # React synthetic data generator
├─ README.md                  # Энэхүү файл
└─ requirements.txt           # Python dependency (хэрэв ашигласан бол)
```

---

## 🧪 АЖИЛ 2: Unit Test Generator (PyTest)

### Тайлбар

* Python + **pytest** ашиглан функцийн unit test бичих
* Email шалгалт, edge case-үүдийг тестлэх
* Автомат тестийн гүйцэтгэлийг шалгах

### Ашигласан технологи

* Python 3.12+
* pytest

### Ажиллуулах заавар

```bash
cd unit-test-demo
pip install pytest
pytest
```

⚠️ **Анхаарах зүйл:**

* `test_*.py` файл дотор emoji (🧪 гэх мэт) шууд текст хэлбэрээр байвал `SyntaxError` гарч болзошгүй.
* Emoji-г comment (`#`) хэлбэрээр бичих эсвэл устгах шаардлагатай.

---

## 🎲 АЖИЛ 4: Synthetic Test Data Generator (React)

### Тайлбар

* AI prompt-д суурилсан **PII агуулаагүй synthetic өгөгдөл**
* User data (name, email, age, role, country) үүсгэнэ
* Validation (email давхардал, age range, хоосон утга)
* CSV / JSON экспорт

### Ашигласан технологи

* React (Vite эсвэл Create React App)
* JavaScript (ES6)

### Ажиллуулах заавар (Vite ашигласан жишээ)

```bash
npm create vite@latest synthetic-data -- --template react
cd synthetic-data
npm install
```

`src` хавтсанд:

```text
src/
 ├─ App.jsx
 └─ SyntheticDataGenerator.jsx
```

`App.jsx`:

```jsx
import SyntheticDataGenerator from './SyntheticDataGenerator';

function App() {
  return <SyntheticDataGenerator />;
}

export default App;
```

Ажиллуулах:

```bash
npm run dev
```

Browser дээр:

```
http://localhost:5173
```

---

## ✅ Validation Logic

* Email давхардал шалгана
* Age (18–70) range шалгана
* Хоосон field байгаа эсэх
* Email format (`@`, `.`) шалгана

---

## 📊 Export боломжууд

* **CSV** – Excel, Google Sheets-д ашиглах
* **JSON** – API тест, automation-д ашиглах

---

## 📚 Synthetic Data ашиглахын давуу тал

### Давуу тал

* Privacy хамгаалагдана
* Production өгөгдөл ашиглах шаардлагагүй
* Хязгааргүй тест өгөгдөл үүсгэнэ

### Сул тал

* Бодит өгөгдлийг 100% дуурайхгүй
* Зарим edge case дутуу байж болно

---

## ⚠️ Анхааруулга

* Энэхүү өгөгдөл нь **зохиомол**
* Бодит хүний мэдээлэл АГУУЛАХГҮЙ
* Зөвхөн **сургалт, тестийн зорилгоор** ашиглана

---

## 👨‍🎓 Зохиогч

* Оюутан: **Бадрах Ганбаатар**
* Хичээл: ПХ баталгаа ба туршилт
* Сэдэв: AI ашигласан тест ба synthetic data

---

✅ Хэрэв хүсвэл:

* README-г **англи хувилбар** болгох
* Screenshot оруулах
* GitHub-д таарах badge нэмэх
* Тайлангийн форматад хөрвүүлэх

гэж сайжруулж өгч чадна 🙂
#   L a b 1 5 _ A I  
 