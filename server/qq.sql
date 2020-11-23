set names utf8;
drop database if exists qq;
create database qq charset=utf8;
use qq;
create table user(
    userid int  primary key AUTO_INCREMENT,
    username varchar(10) unique,
    userpwd  varchar(315),
    usernumber bigint(10),
    img int(3),
    usersex bool
);

