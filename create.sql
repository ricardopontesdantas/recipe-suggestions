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
    quantity integer
);

create table recipes.stock (
    id_ingredient integer
    type integer
    quantity integer
);

insert into recipes.recipe () values ();

insert into recipes.ingredient () values ();

insert into recipes.stock () values ();