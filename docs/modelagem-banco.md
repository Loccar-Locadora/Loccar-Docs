# Modelagem do Banco de Dados

O sistema utiliza um banco relacional PostgreSQL, modelado para garantir integridade, flexibilidade e escalabilidade. Abaixo está o diagrama das principais tabelas e relacionamentos:

![Diagrama ER](assets/images/diagram-er.png)

## Script de Criação das Tabelas

```sql

-- public.roles
CREATE TABLE public.roles (
	id serial4 NOT NULL,
	"name" varchar(50) NOT NULL,
	description text NULL,
	CONSTRAINT roles_name_key UNIQUE (name),
	CONSTRAINT roles_pkey PRIMARY KEY (id)
);

-- public.users
CREATE TABLE public.users (
	id serial4 NOT NULL,
	username varchar(100) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash text NOT NULL,
	is_active bool DEFAULT true NULL,
	created_at timestamp DEFAULT now() NULL,
	updated_at timestamp DEFAULT now() NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_pkey PRIMARY KEY (id)
);

-- public.customer
CREATE TABLE public.customer (
	id_customer serial4 NOT NULL,
	"name" varchar(100) NOT NULL,
	email varchar(255) NULL,
	phone varchar(50) NULL,
	driver_license varchar(11) NULL,
	created timestamp NULL,
	CONSTRAINT customer_pkey PRIMARY KEY (id_customer)
);

-- public.vehicle
CREATE TABLE public.vehicle (
	id_vehicle serial4 NOT NULL,
	brand varchar(50) NULL,
	model varchar(50) NULL,
	manufacturing_year int4 NULL,
	model_year int4 NULL,
	vin varchar(11) NULL,
	fuel_tank_capacity int4 NULL,
	daily_rate numeric(10, 2) NULL,
	reduced_daily_rate numeric(10, 2) NULL,
	monthly_rate numeric(10, 2) NULL,
	company_daily_rate numeric(10, 2) NULL,
	reserved bool NULL,
	img_url varchar NULL,
	CONSTRAINT vehicle_pkey PRIMARY KEY (id_vehicle),
	CONSTRAINT vehicle_vin_key UNIQUE (vin)
);

-- public.user_roles (depende de users + roles)
CREATE TABLE public.user_roles (
	user_id int4 NOT NULL,
	role_id int4 NOT NULL,
	CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id)
);

ALTER TABLE public.user_roles 
	ADD CONSTRAINT user_roles_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;

ALTER TABLE public.user_roles 
	ADD CONSTRAINT user_roles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


-- cargo_vehicle
CREATE TABLE public.cargo_vehicle (
	id_vehicle int4 NOT NULL,
	cargo_capacity numeric(10, 2) NULL,
	cargo_type varchar(50) NULL,
	tare_weight numeric(10, 2) NULL,
	cargo_compartment_size varchar(100) NULL,
	CONSTRAINT cargo_vehicle_pkey PRIMARY KEY (id_vehicle)
);

ALTER TABLE public.cargo_vehicle 
	ADD CONSTRAINT cargo_vehicle_id_vehicle_fkey FOREIGN KEY (id_vehicle) REFERENCES public.vehicle(id_vehicle);

-- leisure_vehicle
CREATE TABLE public.leisure_vehicle (
	id_vehicle int4 NOT NULL,
	automatic bool NULL,
	power_steering bool NULL,
	air_conditioning bool NULL,
	category varchar(50) NULL,
	CONSTRAINT leisure_vehicle_pkey PRIMARY KEY (id_vehicle)
);

ALTER TABLE public.leisure_vehicle 
	ADD CONSTRAINT leisure_vehicle_id_vehicle_fkey FOREIGN KEY (id_vehicle) REFERENCES public.vehicle(id_vehicle);

-- motorcycle
CREATE TABLE public.motorcycle (
	id_vehicle int4 NOT NULL,
	traction_control bool NULL,
	abs_brakes bool NULL,
	cruise_control bool NULL,
	CONSTRAINT motorcycle_pkey PRIMARY KEY (id_vehicle)
);

ALTER TABLE public.motorcycle 
	ADD CONSTRAINT motorcycle_id_vehicle_fkey FOREIGN KEY (id_vehicle) REFERENCES public.vehicle(id_vehicle);

-- passenger_vehicle
CREATE TABLE public.passenger_vehicle (
	id_vehicle int4 NOT NULL,
	passenger_capacity int4 NULL,
	tv bool NULL,
	air_conditioning bool NULL,
	power_steering bool NULL,
	CONSTRAINT passenger_vehicle_pkey PRIMARY KEY (id_vehicle)
);

ALTER TABLE public.passenger_vehicle 
	ADD CONSTRAINT passenger_vehicle_id_vehicle_fkey FOREIGN KEY (id_vehicle) REFERENCES public.vehicle(id_vehicle);

-- public.reservation
CREATE TABLE public.reservation (
	reservationnumber serial4 NOT NULL,
	id_customer int4 NOT NULL,
	id_vehicle int4 NOT NULL,
	rental_date timestamp NOT NULL,
	return_date timestamp NOT NULL,
	rental_days int4 NULL,
	daily_rate numeric(10, 2) NULL,
	rate_type varchar(20) NULL,
	insurance_vehicle numeric(10, 2) NULL,
	insurance_third_party numeric(10, 2) NULL,
	tax_amount numeric(10, 2) NULL,
	damage_description varchar NULL,
	status varchar NULL,
	CONSTRAINT reservation_pkey PRIMARY KEY (reservationnumber)
);

CREATE INDEX ix_reservation_id_customer ON public.reservation USING btree (id_customer);
CREATE INDEX ix_reservation_id_vehicle ON public.reservation USING btree (id_vehicle);

ALTER TABLE public.reservation 
	ADD CONSTRAINT reservation_id_customer_fkey FOREIGN KEY (id_customer) REFERENCES public.customer(id_customer);

ALTER TABLE public.reservation 
	ADD CONSTRAINT reservation_id_vehicle_fkey FOREIGN KEY (id_vehicle) REFERENCES public.vehicle(id_vehicle);
```
