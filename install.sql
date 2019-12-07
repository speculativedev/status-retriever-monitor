CREATE DATABASE status_retriever;

CREATE TABLE status_items(
    hash char(32),
    name text,    
    link text,
    posted_at datetime,
    PRIMARY KEY(hash)
);
