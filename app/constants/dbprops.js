
module.exports = {
    CONNECTION_URL: 'postgres://postgres:root123@localhost:5432/netvp',
    PROD_CONNECTION_URL :'postgres://qsnnofvuvdebpx:5a2c2adc2b1d6efa7f22c8231177cf9b1c077930223e2774a42f14045b010eab@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d72hc1e4kt53o2',
    NODE_TLS_REJECT_UNAUTHORIZED : process.env.NODE_TLS_REJECT_UNAUTHORIZED='0',
    DB_NAME: process.env.DB_NAME='d72hc1e4kt53o2',
    DB_USER: process.env.DB_USER='qsnnofvuvdebpx',
    DB_PASSWORD: process.env.DB_PASSWORD='5a2c2adc2b1d6efa7f22c8231177cf9b1c077930223e2774a42f14045b010eab',
    DB_HOST: process.env.DB_HOST='ec2-52-70-15-120.compute-1.amazonaws.com'
}