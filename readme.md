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
