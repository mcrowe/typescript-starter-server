DROP TABLE IF EXISTS things;

CREATE TABLE things (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name character varying NOT NULL,
    body text NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);