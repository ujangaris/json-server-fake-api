# Json Server & Fake API

## Setup JSON server

    - npm install -g json-server
    - npm init -y (ini init project baru)
    - pada file package.json
        pastekan/tambahkan baris code berikut :
         "scripts": {
            "start": "json-server --watch db.json"
        },
    - buat file db.json
    - jalankan server:  npm start
    - pada browser: http://localhost:3000/

## Setup FakerJs

    - install faker
        npm install @faker-js/faker --save-dev
    - package.json
        tambahkan code untuk dapat mengimport fakernya
        "type": "module",
    - generate.js
        import dan panggil faker
    - generat 1-2 data
    - generate banyak data dengan perulangan for
    - cara menjalankan fakernya: node.generate.js
