# OR

Database 11g

Common adage in the database industry is to write once, read many

quad_id, manufacturer_id, part_id

locations, manufacturers, parts

one-to-many relationship: location and manufacturers, more than one m can reside in a specific l
many-to-many relationship: manufacturers and parts, many different p from each m

### some jargon

startup, shutdown, instance, background process

control files: binary files containing info about the assortment of files, contain info
that describes the names, locations, and sizes of the database files. on startup, the control files
are read and the files described are opened to support the running database

online redo logs: logs that collects a transaction (list of activities), which is a unit
of work, passed to the database for processing

oracle insists that there are at least 2 online redo logs

### the system tablespace

tablespace: fancy oracle name for a database file
datatypes: numeric, alphanumeric, binary (video/ audio format)
field size: max allowable size for fields
ownership: who owns the database data files
view and manipulation rights: who is allowed to look at the data

the sysaux tablespace
temporary
undo

the server parameter file `spfile`
where the startup parameters are defined and the values in the file determine the environment

### background processes

`dbw0` database writer, writes buffers to disk
`lgw0` log writer, writes info into the online redo logs
`ckpt` checkpoint, checkpoint is the activity of writing from memory to the appropriate location
`smon` system monitor, gatekeeper of consistency
`pmon` process monitor, clean up any ressources
`cjq0` job queue coordination, spawns job processes
`arc0` archiver, copies online redo logs before they are used by the next set of transactions

### the database administrator

installation & configuration
create datafiles and tablespaces
create and manage accounts
tuning (adjusting initialization parameters using the system parameter file)
configure backups
work with developers
stay current
work with oracle support service
maximize ressource efficiency
liaise with the sysadmin (disk space and processor power)

## the oracle data types

### varchar2

most common data type, allows storage of any character that can be entered from a keyboard
commonly referred as _alphanumeric_ data
maximum lenght is 4000 bytes

```sql
create table(
    name varchar2(30),
    city varchar2(30),
    state varchar2(2)
);
```

### number

allows storing of integer and decimal digits

for non-integer:
ex. 29.1963 : precision of 6 (max 38) and a scale of 4 (max 127)
specification (3,2) : precision 3, scale 2

### date

default display for a date is DD-MON-YY

### timestamp

stores information about the second to a much higher accuracy

