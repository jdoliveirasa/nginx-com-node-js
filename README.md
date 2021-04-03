# nginx-com-node-js

cd /home/jonathan/nginx-com-node-js

docker-compose up -d --build

docker exec -it app bash
npm init
npm install express --save
npm install mysql --save
node index.js

docker exec -it db bash
mysql -uroot -proot
USE nodedb;
CREATE TABLE people (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NULL
);

docker exec -it web bash
service nginx restart