-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database vanguard;
use vanguard;

create table usuario (
	idUsuario int primary key auto_increment,
    nomeUsuario varchar(45) not null,
    email varchar(256) not null,
    senha varchar(7) not null
);

create table pontuacao (
	idPontuacao int primary key auto_increment,
    pontuacao int not null,
    tempo time not null,
    acertos int not null,
    fkUsuario int,
    foreign key (fkUsuario) references usuario (idusuario)
);

create table pergunta (
	idPergunta int primary key auto_increment,
    pergunta varchar(45) not null,
    valor int not null,
    resposta varchar(45) not null
);

create table alternativa (
	idAlternativa int primary key auto_increment,
    alternativa varchar(45) not null,
    fkPergunta int,
    foreign key (fkPergunta) references pergunta (idPergunta)
);

insert into pergunta values
    (default, 'Quantos mapas o valorant possui?', 200, '10'),
    (default, 'Qual o nome da agente brasileira?', 300, 'Raze'),
    (default, 'Quando o jogo foi lançado?', 400, '2 de junho de 2020'),
    (default, 'Que time ganhou o Valorant Champions em 2021?', 500, 'Acend'),
    (default, 'Quantos agentes iniciadores existem no jogo?', 600, '6'),
    (default, 'Quantos agentes existiam durante o beta?', 750, '10');

    insert into alternativa values
    (default, '6', 1),
    (default, '8', 1),
    (default, '10', 1),
    (default, '9', 1),

    (default, 'Viper', 2),
    (default, 'Raze', 2),
    (default, 'Skye', 2),
    (default, 'Reyna', 2),

    (default, '12 de julho de 2020', 3),
    (default, '7 de junho de 2020', 3),
    (default, '5 de julho de 2020', 3),
    (default, '2 de junho de 2020', 3),

    (default, 'Sentinels', 4),
    (default, 'Acend', 4),
    (default, 'Evil Geniuses', 4),
    (default, 'loud', 4),

    (default, '5', 5),
    (default, '7', 5),
    (default, '6', 5),
    (default, '4', 5),

    (default, '7', 6),
    (default, '9', 6),
    (default, '8', 6),
    (default, '10', 6);

select * from pergunta;
select * from alternativa;