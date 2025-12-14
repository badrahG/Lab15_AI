# LoginTestCases – AI Assisted Test Case Design

## Project Overview

**LoginTestCases** is a demo project that visually presents login system test cases using **React (Vite)**. The project is designed for **Software Testing, QA, and AI-assisted testing** demonstrations and coursework.

The project focuses on:

* Positive, negative, and edge test cases for login functionality
* Clear and simple UI representation
* Use in lectures, reports, and project defenses

---

## Technologies Used

| Technology        | Description               |
| ----------------- | ------------------------- |
| React             | UI development            |
| Vite              | Fast build and dev server |
| JavaScript (ES6+) | Component logic           |
| Tailwind CSS      | Styling                   |
| Node.js           | Runtime environment       |

---

## Project Structure

```
login-testcases/
├── src/
│   ├── LoginTestCases.js
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## How to Run the Project

### 1. Check Node.js

```
node -v
npm -v
```

Recommended version: Node.js 18+

---

### 2. Install Dependencies

```
npm install
```

---

### 3. Start Development Server

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Test Case Categories

### Positive Test Cases

* Valid username and password
* Successful login

### Negative Test Cases

* Incorrect password
* Empty input fields
* Invalid email format

### Edge and Boundary Cases

* Very long password
* SQL injection attempt
* XSS attempt

---

## AI Usage

AI was used for:

* Generating test case lists
* Suggesting edge cases
* Improving test case naming and descriptions

Example prompt:

```
Generate positive, negative, and edge test cases for a login system
```

---

## Notes

* This project is for educational and testing purposes only
* Not intended for production use
* Backend authentication is not included (UI only)

---

## Usage Scenarios

* Software Testing courses
* AI in QA demonstrations
* Test case design examples
* Academic reports and presentations

---

## Student Notes

This project helps students:

* Understand test case concepts visually
* Learn how AI can support QA activities
* Combine React with software testing topics

---

## Conclusion

LoginTestCases demonstrates how modern UI and AI-assisted ideas can be combined to create effective and educational test case demonstrations.

---

# AI Test and Synthetic Data Demo

This repository contains AI-based testing examples developed for a Software Quality Assurance and Testing course. The project includes unit testing, synthetic test data generation, validation, and export examples.

---

## Repository Structure

```
unit-test-demo/
├── test_email.py
├── synthetic-data/
│   └── SyntheticDataGenerator.jsx
├── README.md
└── requirements.txt
```

---

## Task 2: Unit Test Generator (PyTest)

### Description

* Writing unit tests using Python and pytest
* Testing email validation and edge cases
* Verifying automated test execution

### Technologies

* Python 3.12+
* pytest

### How to Run

```
cd unit-test-demo
pip install pytest
pytest
```

Note: Avoid placing emojis directly inside Python source files to prevent syntax errors.

---

## Task 4: Synthetic Test Data Generator (React)

### Description

* AI prompt-based synthetic data without PII
* Generates user data such as name, email, age, role, and country
* Validation logic and export functionality

### Technologies

* React
* JavaScript (ES6)

### Run Instructions (Vite Example)

```
npm create vite@latest synthetic-data -- --template react
cd synthetic-data
npm install
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Validation Logic

* Email duplication check
* Age range validation (18–70)
* Empty field validation
* Basic email format validation

---

## Export Options

* CSV format for spreadsheets
* JSON format for API and automation testing

---

## Synthetic Data Benefits

Advantages:

* Protects privacy
* No production data required
* Unlimited test data generation

Limitations:

* May not fully represent real-world data
* Some edge cases may be missing

---

## Disclaimer

* All data is synthetic
* No real personal information is included
* For educational and testing purposes only

---

## Author

* Student: Badrakh Ganbaatar
* Course: Software Quality Assurance and Testing
* Topic: AI-assisted testing and synthetic data
