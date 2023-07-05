drop table recipes.stock;
drop table recipes.recipe_ingredient;
drop table recipes.ingredient;
drop table recipes.recipe;
drop schema recipes;

create schema recipes;

create table recipes.recipe (
    id_recipe text,
    description text
);

create table recipes.ingredient (
    id_ingredient integer,
    description text
);

create table recipes.recipe_ingredient (
    id_recipe text,
    id_ingredient integer,
    quantity text
);

create table recipes.stock (
    id_ingredient integer,
    type integer,
    quantity integer
);

insert into recipes.recipe (id_recipe, description) values 
('8a0ba637-792a-44ca-8957-63845d260524', 'omelete');

insert into recipes.ingredient (id_ingredient, description) values 
(1, 'ovo'),
(2, 'pimentão verde'),
(3, 'cebola'),
(4, 'sal');

insert into recipes.recipe_ingredient (id_recipe, id_ingredient, quantity) values 
('8a0ba637-792a-44ca-8957-63845d260524', 1, '2'),
('8a0ba637-792a-44ca-8957-63845d260524', 2, '1/2'),
('8a0ba637-792a-44ca-8957-63845d260524', 3, '1/4'),
('8a0ba637-792a-44ca-8957-63845d260524', 4, '1/2 colher de sopa');

insert into recipes.stock (id_stock, id_ingredient, type, quantity) values 
(1, 1, 1, 12),
(2, 2, 1, 2),
(3, 3, 1, 4),
(4, 4, 2, 2),