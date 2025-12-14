# LoginTestCases – AI тусламжтай Test Case дизайн

## 📌 Төслийн танилцуулга

**LoginTestCases** нь login системийн тест кейсүүдийг **React (Vite)** ашиглан визуал байдлаар харуулсан сургалтын зориулалттай demo төсөл юм. Энэхүү төсөл нь **Програм хангамжийн баталгаа, тестлэлт (Software Testing, QA)** болон **AI-assisted testing** сэдвийн хүрээнд хийгдсэн.

Төсөл нь дараах зорилготой:

* Login функционалын **positive, negative, edge** test case-үүдийг харуулах
* Хэрэглэгчдэд ойлгомжтой, энгийн UI ашиглах
* Хичээл, тайлан, хамгаалалтад ашиглах боломжтой байх

---

## 🛠 Ашигласан технологи

| Технологи         | Тайлбар                       |
| ----------------- | ----------------------------- |
| React             | UI хөгжүүлэлт                 |
| Vite              | Хурдан build болон dev сервер |
| JavaScript (ES6+) | Component логик               |
| Tailwind CSS      | Загварчлал                    |
| Node.js           | Runtime орчин                 |

---

## 📂 Төслийн бүтэц

```
login-testcases/
├── src/
│   ├── LoginTestCases.js   # Login test case UI компонент
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

```
node -v
npm -v
```

Node.js 18+ байхыг зөвлөж байна.

---

### 2️⃣ Dependency суулгах

```
npm install
```

---

### 3️⃣ Dev сервер асаах

```
npm run dev
```

Browser дээр нээх:

```
http://localhost:5173
```

---

## 🧪 Test Case-үүдийн төрөл

### ✅ Positive Test Cases

* Зөв username болон password
* Амжилттай login

### ❌ Negative Test Cases

* Буруу нууц үг
* Хоосон талбар
* Буруу форматтай email

### ⚠️ Edge / Boundary Test Cases

* Маш урт password
* SQL injection оролдлого
* XSS халдлагын оролдлого

---

## 🤖 AI ашигласан байдал

AI-г дараах зорилгоор ашигласан:

* Test case жагсаалт үүсгэх
* Edge case-үүд санал болгох
* Test case-ийн нэршил, тайлбарыг сайжруулах

Жишээ prompt:

```
Login системд зориулсан positive, negative, edge test case-үүд гаргаж өгнө үү
```

---

## ⚠️ Анхаарах зүйлс

* Энэхүү төсөл нь **сургалт, тестийн зорилготой**
* Production системд шууд ашиглахгүй
* Backend authentication ороогүй (UI only)

---

## 📚 Ашиглах боломжууд

* Software Testing хичээл
* AI in QA demo
* Test case design жишээ
* Тайлан, хамгаалалтын материал

---

## 👨‍🎓 Оюутанд зориулсан тэмдэглэл

Энэхүү төсөл нь:

* Test case ойлголтыг бодитоор харах
* AI-г QA-д хэрхэн ашиглаж болохыг ойлгох
* React болон тестлэлт хослуулан суралцах

давуу талтай.

---

## 📌 Дүгнэлт

LoginTestCases төсөл нь login функционалын тестийг **орчин үеийн UI + AI санаа**-тай хослуулсан, сургалтын өндөр ач холбогдолтой demo төсөл юм.

---

# AI Test ба Synthetic Data Demo

Энэхүү репозитор нь **Програм хангамжийн баталгаа ба туршилт** хичээлийн хүрээнд хийгдсэн AI-д суурилсан тестийн жишээ ажлуудыг агуулна.

---

## 📂 Репозиторын бүтэц

```
unit-test-demo/
├── test_email.py              # PyTest unit test жишээ
├── synthetic-data/
│   └── SyntheticDataGenerator.jsx
├── README.md
└── requirements.txt
```

---

## 🧪 Ажил 2: Unit Test Generator (PyTest)

### Тайлбар

* Python болон pytest ашиглан unit test бичих
* Email шалгалт, edge case-үүдийг тестлэх
* Автомат тестийн гүйцэтгэлийг шалгах

### Ашигласан технологи

* Python 3.12+
* pytest

### Ажиллуулах заавар

```
cd unit-test-demo
pip install pytest
pytest
```

⚠️ Python файл дотор emoji-г comment хэлбэрээр ашиглах шаардлагатай.

---

## 🎲 Ажил 4: Synthetic Test Data Generator (React)

### Тайлбар

* AI prompt-д суурилсан, PII агуулаагүй synthetic өгөгдөл
* Name, email, age, role, country зэрэг өгөгдөл үүсгэнэ
* Validation болон экспортын боломжтой

### Ашигласан технологи

* React
* JavaScript (ES6)

### Ажиллуулах заавар (Vite)

```
npm create vite@latest synthetic-data -- --template react
cd synthetic-data
npm install
npm run dev
```

Browser дээр:

```
http://localhost:5173
```

---

## ✅ Validation логик

* Email давхардал шалгана
* Насны хязгаар (18–70)
* Хоосон утга шалгана
* Email формат шалгана

---

## 📊 Export боломжууд

* CSV – Excel, Google Sheets-д ашиглах
* JSON – API болон automation тестэд ашиглах

---

## ⚠️ Анхааруулга

* Бүх өгөгдөл нь **зохиомол**
* Бодит хүний мэдээлэл агуулахгүй
* Зөвхөн **сургалт, тестийн зорилгоор** ашиглана

---

## 👨‍🎓 Зохиогч

* Оюутан: Бадрах Ганбаатар
* Хичээл: Програм хангамжийн баталгаа ба туршилт
* Сэдэв: AI ашигласан тест ба synthetic data
