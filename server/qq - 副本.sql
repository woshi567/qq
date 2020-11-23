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
create table user_0_frend(
    frendid int  primary key AUTO_INCREMENT,
    frendname varchar(10) unique,
    frendname1 varchar(10),
    frendcrop varchar(10)
);
insert into user values('',"王小明",'1310019',2487383879,2,1);
