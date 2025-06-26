# Linux Bible

## JS and TS

### Closure

- `var` is function-scoped and can be redeclared.
- `let` is block-scoped and cannot be redeclared in the same scope.
- `const` is also block-scoped and must be initialized; its value cannot be reassigned.

```js
/* A closure is when a function "remembers" the variables from its outer scope,
even after that outer function has finished executing. */

function closure() {
  let a = 5; // outer scope variable
  return function () {
    // function that "remembers"
    a++;
    console.log(a);
  };
}

const fn = closure();
fn(); // 6
fn(); // 7
```

A `closure` is when a function "remembers" the variables from its outer scope,
even after that outer function has finished executing.

A `closure` is a function that retains access to its lexical scope even when
the function is executed outside that scope.

`Typescript` adds types, interfaces, and compile-time checks. It compiles to
javascript and helps catch errors early.

```ts
function count(s: string): Record<string, number> {
  const r: Record<string, number> = {};
  for (const c of s) {
    r[c] = (r[c] || 0) + 1;
  }
  return r;
}
console.log(count("hello")); // { "h": 1, "e": 1, "l": 2, "o": 1 }
```

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
  // reduce(function(acc, val){}, initial value)
}
console.log(1, 2, 3, 4); // 0 + 1 + 2 + 3 + 4 = 10

// Palindrome
function reverse(s: string): string {
  return s.split("").reverse().join("");
}
function isPali(s: string): boolean {
  return s == reverse(s);
}

// starts with a vowel and longer than three
function verify(s: string[]): string[] {
  return s.filter(
    (i) => i.length && ["a", "e", "i", "o", "u"].includes(i[0].toLowerCase()),
  );
}
```

```txt
== checks for value equality, allowing type coercion
=== checks for value and type equality
```

### interface vs type

Both define object shapes (blueprint)

- interface is best for object-oriented design and supports declaration merging
- type is more flexible and can define unions, tuples and primitives

```typescript
// EXTENDING TYPES
// Interface: via extends keyword
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
// Type: via intersection (&)
type Animal = {
  name: string;
};
type Dog = Animal & {
  breed: string;
};

// DECLARATION MERGING
// This only works with interfaces
interface Person {
  name: string;
}
interface Person {
  age: number;
}
const p: Person = { name: "Bob", age: 30 }; // This is valid !

// UNION TYPES (allow a variable to hold more than one type)
type Status = "success" | "error" | "loading" | boolean;

// TUPLES (for fixed-structure data)
type NameAndAge = [string, number];
type Coordinates = [x: number, y: number];

// PRIMITIVES (can be used as an alias)
type Username = string; // type alias, a way to give a name to a type
let user: Username = "Alice";
```

> [!Note] Notice the difference: (inteface is always an object)
> `type Person = string` and `interface Person { name: string }`

`interface` defines the stucture of an object (blueprint)

`type` describes the kind of a data (this value should only hold values that
match this structure or rule)

`type alias` is a named type created using the type keyword, gives a name to
any kind of type (primitives, unions, tuples, objects, etc.)

`string` text
`boolean` true or false
`[string, number]` tuple
`{ name: string }` object with a property name

## Linux

### `chmod`

`r--` 4 `-w-` 2 `--x` 1
`rw-` 4 + 2 = 6

`chmod 755` Set specific permissions `rwxr-xr-x`
`chmod +x` Add execute permission for all (user, group, others)

#### umask

`umask` sets default permissions for new files and directories.

### Various

`basename /home/user/documents/report.txt` > `report.txt` Strips the path and
returns just the filename (or directory name)

`dirname /home/user/documents/report.txt` > `/home/user/documents` Strips the
filename and returns the directory path.

`curl ifconfig.me` get ip
`ip a` get all ips
`netstat -r` IP routing table

`grep -r "error" /var/log`: `-r` (recursive) works on directories, not file
globs like `*.log`

`for file in *.md; do echo "$file"; done`
`if grep -q "TODO" "$file"; then echo "$file"; else echo "no match"; fi`

`if [ -s filename ] ; then command; fi`: `-s` checks if file is `non-empty`

`command > file` overrides, `command >> file` appends

`echo $(seq 5 | paste -sd + -)` >> 1+2+3+4+5 (last - means read from stdin, this is more explicit and posix-compliant)
`seq` Output a sequence of numbers (with line breaks)
`paste` Merge lines

`dpkg -l` Debian package manager. `-l` list installed packages

`sudo apt-get`
`update` Refresh the list of available packages and versions
`upgrade` Installs the latest versions of installed packages (without removing
or installing new dependencies)

`cut -d{delimiter} -f{fields list or range} /etc/passwd` Cut out fields from file

`tar czf {archive} {files}` Create and zip an archive
`tar xf` Extract file

`df` Filesystem usage (total, used, available)
`du` Disk usage of directories and its contents

`find /var -type f -size +100M` All files over 100M in the /var folder

`id {name}` Display current user and group identity.

| Option        | Description                                                          | Example           |
| ------------- | -------------------------------------------------------------------- | ----------------- |
| `-e`          | Exit immediately if a command exits with a non-zero status           | `set -e`          |
| `-u`          | Treat unset variables as an error and exit immediately               | `set -u`          |
| `-x`          | Print each command before executing it (useful for debugging)        | `set -x`          |
| `-o pipefail` | Return the exit status of the last command in a pipeline that failed | `set -o pipefail` |
| `-n`          | Read commands but do not execute them (syntax check)                 | `set -n`          |
| `-v`          | Print shell input lines as they are read                             | `set -v`          |

`+{option}` to turn off

#### Common Exit Status Codes

| Code | Description                       |
| ---- | --------------------------------- |
| 0    | Success                           |
| 1    | General error                     |
| 2    | Misuse of shell builtins          |
| 126  | Command invoked cannot execute    |
| 127  | Command not found                 |
| 128  | Invalid argument to exit          |
| 130  | Script terminated by Ctrl+C       |
| 137  | Process killed (e.g., by kill -9) |

#### POSIX Compliant

`POSIX` Portable Operating System Interface.
Set of standards defined by the IEEE to ensure compatibility between different
UNIX-like OS (linux, macos, BSD)

`IEEE` Institute of Electrical and Electronics Engineers.
Global professional organization dedicated to advancing technology. Creates and
maintains technical standards to ensure devices and systems work together

#### Runlevel

`who -r`, `runlevel`, `systemctl get-default` Show the current runlevel

| Runlevel | Meaning             |
| -------- | ------------------- |
| 0        | Halt                |
| 1        | Single-user mode    |
| 3        | Multi-user, no GUI  |
| 5        | Multi-user with GUI |
| 6        | Reboot              |

A runlevel is a mode of operation in traditional SysVinit systems (older Linux
systems). Each runlevel represents a different system state. Most modern Linux
distros use systemd, which replaces runlevels with targets (e.g.,
graphical.target, multi-user.target).

### Bash

#### Common Bash `if` file test expressions

| **Expression**      | **Meaning**                       | **Example**                           |
| ------------------- | --------------------------------- | ------------------------------------- |
| `[ -e "$file" ]`    | File exists                       | `if [ -e myfile.txt ]; then ...`      |
| `[ -f "$file" ]`    | File exists and is a regular file | `if [ -f myfile.txt ]; then ...`      |
| `[ -d "$file" ]`    | File exists and is a directory    | `if [ -d myfolder ]; then ...`        |
| `[ -s "$file" ]`    | File exists and is **not empty**  | `if [ -s log.txt ]; then ...`         |
| `[ -r "$file" ]`    | File is readable                  | `if [ -r config.cfg ]; then ...`      |
| `[ -w "$file" ]`    | File is writable                  | `if [ -w output.txt ]; then ...`      |
| `[ -x "$file" ]`    | File is executable                | `if [ -x script.sh ]; then ...`       |
| `[ "$a" = "$b" ]`   | Strings are equal                 | `if [ "$user" = "admin" ]; then ...`  |
| `[ "$a" != "$b" ]`  | Strings are not equal             | `if [ "$mode" != "debug" ]; then ...` |
| `[ "$a" -eq "$b" ]` | Integers are equal                | `if [ "$count" -eq 5 ]; then ...`     |
| `[ "$a" -gt "$b" ]` | Integer a is greater than b       | `if [ "$score" -gt 10 ]; then ...`    |
| `[ "$a" -lt "$b" ]` | Integer a is less than b          | `if [ "$age" -lt 18 ]; then ...`      |
| `[ -z "$var" ]`     | String is empty                   | `if [ -z "$input" ]; then ...`        |
| `[ -n "$var" ]`     | String is not empty               | `if [ -n "$username" ]; then ...`     |

#### Parameter Expansion (manipulating variables)

| Syntax                 | Description                        | Example                          | Result        |
| ---------------------- | ---------------------------------- | -------------------------------- | ------------- |
| `${var}`               | Basic variable expansion           | `var=hello` → `${var}`           | `hello`       |
| `${var:-default}`      | Use default if unset or null       | `var=` → `${var:-world}`         | `world`       |
| `${var:=default}`      | Assign default if unset or null    | `var=` → `${var:=world}`         | `world`       |
| `${var:+alt}`          | Use alt if var is set and not null | `var=hi` → `${var:+yo}`          | `yo`          |
| `${var:?error}`        | Show error if unset or null        | `var=` → `${var:?Missing}`       | error message |
| `${#var}`              | Length of variable                 | `var=hello` → `${#var}`          | `5`           |
| `${var%pattern}`       | Remove shortest match from end     | `var=abc.def` → `${var%.*}`      | `abc`         |
| `${var%%pattern}`      | Remove longest match from end      | `var=abc.def.ghi` → `${var%%.*}` | `abc`         |
| `${var#pattern}`       | Remove shortest match from start   | `var=abc.def` → `${var#*.}`      | `def`         |
| `${var##pattern}`      | Remove longest match from start    | `var=abc.def.ghi` → `${var##*.}` | `ghi`         |
| `${var/pat/repl}`      | Replace first match                | `var=abcabc` → `${var/a/x}`      | `xbcabc`      |
| `${var//pat/repl}`     | Replace all matches                | `var=abcabc` → `${var//a/x}`     | `xbcxbc`      |
| `${var:offset}`        | Substring from offset              | `var=abcdef` → `${var:2}`        | `cdef`        |
| `${var:offset:length}` | Substring with length              | `var=abcdef` → `${var:2:3}`      | `cde`         |

#### Globbing (matching filenames or string, filename expansion)

| Pattern         | Description                                                    | Matches Example(s)                           |
| --------------- | -------------------------------------------------------------- | -------------------------------------------- |
| `*`             | Matches **zero or more** characters                            | `*.txt` → `file.txt`, `notes.txt`            |
| `?`             | Matches **exactly one** character                              | `file?.txt` → `file1.txt`, `fileA.txt`       |
| `[abc]`         | Matches **one character** in the set                           | `file[123].txt` → `file1.txt`, `file2.txt`   |
| `[a-z]`         | Matches **one character** in the range                         | `file[a-c].txt` → `filea.txt`, `fileb.txt`   |
| `[!abc]`        | Matches **one character not** in the set                       | `file[!0-9].txt` → `filea.txt`               |
| `**`            | Matches **directories recursively** (with `shopt -s globstar`) | `**/*.txt` → all `.txt` files in all subdirs |
| `file.{txt,md}` | Matches **either** `file.txt` or `file.md`                     | `file.txt`, `file.md`                        |
| `\*`            | Escapes the `*` to match a literal asterisk                    | `file\*.txt` → matches `file*.txt`           |

#### Special variables (maginc variable or special parameters)

| Variable     | Description                             | Example                               | Output                    |
| ------------ | --------------------------------------- | ------------------------------------- | ------------------------- |
| `$0`         | Name of the script or shell             | `echo $0`                             | `./myscript.sh`           |
| `$1` to `$9` | Positional parameters (arguments)       | `./myscript.sh foo bar` → `echo $1`   | `foo`                     |
| `$#`         | Number of positional parameters         | `./myscript.sh a b c` → `echo $#`     | `3`                       |
| `$@`         | All positional parameters (quoted)      | `for arg in "$@"; do echo $arg; done` | `a` `b` `c`               |
| `$*`         | All positional parameters (as one word) | `echo "$*"`                           | `a b c`                   |
| `$$`         | PID of the current shell                | `echo $$`                             | `12345`                   |
| `$!`         | PID of the last background command      | `sleep 10 & echo $!`                  | `67890`                   |
| `$?`         | Exit status of the last command         | `ls /notfound; echo $?`               | `2`                       |
| `$_`         | Last argument of the previous command   | `echo hello; echo $_`                 | `hello`                   |
| `$-`         | Current shell options                   | `echo $-`                             | `himBH`                   |
| `$IFS`       | Internal Field Separator                | `echo "$IFS" \| od -c`                | Shows space, tab, newline |
| `$RANDOM`    | Random number (0–32767)                 | `echo $RANDOM`                        | `18342`                   |
| `$LINENO`    | Current line number in script           | `echo $LINENO`                        | `42`                      |
| `$PWD`       | Current working directory               | `echo $PWD`                           | `/home/user`              |
| `$OLDPWD`    | Previous working directory              | `cd /tmp; cd -; echo $OLDPWD`         | `/tmp`                    |
| `$HOME`      | User's home directory                   | `echo $HOME`                          | `/home/user`              |
| `$USER`      | Current username                        | `echo $USER`                          | `johndoe`                 |

#### History Expansion

| Pattern     | Description                                          | Example                        | Result                                        |
| ----------- | ---------------------------------------------------- | ------------------------------ | --------------------------------------------- |
| `!!`        | Repeats the last command                             | `!!`                           | Re-executes previous command                  |
| `!n`        | Executes command number `n` from history             | `!42`                          | Runs the 42nd command in history              |
| `!-n`       | Runs the command `n` lines back                      | `!-2`                          | Runs the command before the last one          |
| `!string`   | Runs the most recent command starting with `string`  | `!ls`                          | Runs the last `ls` command                    |
| `!?string?` | Runs the most recent command containing `string`     | `!?grep?`                      | Runs the last command that had `grep` in it   |
| `^old^new`  | Repeats the last command, replacing `old` with `new` | `^foo^bar`                     | Replaces `foo` with `bar` in the last command |
| `!!:n`      | Expands to the `n`th word of the last command        | `!!:2`                         | Third word of the last command                |
| `!!:$`      | Expands to the last word of the last command         | `!!:$`                         | Often used with `sudo` like `sudo !!`         |
| `!$`        | Last word of the previous command                    | `echo file.txt; cat !$`        | `cat file.txt`                                |
| `!*`        | All arguments of the previous command                | `echo a b c; printf "%s\n" !*` | `printf "%s\n" a b c`                         |

> ⚠️ History expansion is often disabled in scripts and some shells for safety. It's mostly used in interactive shells.

#### Cron Jobs Table

```txt
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *  command to execute
```

| Minute | Hour | Day of Month | Month | Day of Week | Description                     |
| ------ | ---- | ------------ | ----- | ----------- | ------------------------------- |
| 30     | 2    | `*`          | `*`   | `*`         | Daily at 2:30 AM                |
| 0      | 3    | `*`          | `*`   | 0           | Every Sunday at 3:00 AM         |
| `*`/15 | `*`  | `*`          | `*`   | `*`         | Every 15 minutes                |
| 0      | 18   | `*`          | `*`   | 1-5         | At 6:00 PM on weekdays          |
| 0      | 0    | 1            | `*`   | `*`         | At midnight on the 1st of month |

| Special String          | Equivalent Cron Expression | Description                                   |
| ----------------------- | -------------------------- | --------------------------------------------- |
| `@reboot`               | —                          | Run once at system startup                    |
| `@yearly` / `@annually` | `0 0 1 1 *`                | Run once a year at midnight on January 1st    |
| `@monthly`              | `0 0 1 * *`                | Run once a month at midnight on the 1st       |
| `@weekly`               | `0 0 * * 0`                | Run once a week at midnight on Sunday         |
| `@daily` / `@midnight`  | `0 0 * * *`                | Run once a day at midnight                    |
| `@hourly`               | `0 * * * *`                | Run once an hour at the beginning of the hour |

`cron` System scheduler for running tasks/jobs, *recurring* tasks

`at` To execute command *once* at a later time

`/etc/fstab` defines how and where disk partitions, devices, or remote
filesystems should be mounted at boot time. It tells the system how to use
disks, etc.

## Part 1 - Getting Started

### Chapter 1 - Starting with Linux

Linux is an `Operating system` which consists of the software that manages your
computer and lets you run applications on it. This includes:

- Detecting and preparing hardware
- Managing processes
- Managing memory
- Providing user interfaces
- Controlling filesystems
- Providing user access and authentification
- Offering administrative utilities
- Starting up services
- Programming tools

Advanced features include:

- Clustering (multiple systems appear as on system)
- Virtualization
- Cloud computing
- Real-time computing
- Specialized storage

Foundation of UNIX with several key elements:

- The unix filesystem
- Input / Output redirection
- Portability

`GNU`: project intended to become a recoding of the unix os that could be freely
distributed as free software (term later replaced by the term open source
software, but both camps remain with FOSS, Free and Open Source Software).

To define clearly how open source software should be handled, was created the
GNU Public Licence, GPL, which includes the following basic features:

- Author Rights
- Free distribution
- Copyright maintained

Linux can today be described as an open source unix-like operating system that
reflects a combination of svid, posix and bsd compliance.

A linux distribution consists of the components needed to create a working
linux system. Linux is really just the kernel and, to be useful, must have:

- other software for basic commands (GNU utilities)
- services (remote login or web servers)
- and possibly a desktop interface and graphical appications

Ubuntu is a distribution based on stable Debian and adding features that debian
lacked in pursuit of bringing new users to Linux, like a simple graphical installer
and easy to use graphical tools. New ways to run linux using live CDs or live
USBs, and including open source applications of web browsers and word
processors, making the transition from window to linux easier.

Companies can make money with linux with:

- Software subscriptions (Offering the binary code, so no need to compile it) and support
- Training and certification
- Bounties
- Donations
- Merch

### Chapter 2 - Creating the Perfect Linux Desktop

The `X Window Server` is a thin client. The X server runs on the local system
and provides an interface to the screen, mouse and keyboard. X clients are
applications that request the server to draw windows and receive inputs.
(Client-server model)

Some Desktop Environments: `Gnome` `K Desktop` `Xfce` `LXDE`

## Part 2 - Becoming a Linux Power User

### Chapter 3 - Using the Shell

#### Who am i

Several ways to get the to a shell interface (like bash):

- shell prompt
- terminal window (terminal emulator)
- virtual console (switch with Ctrl+alt+F1-F6)

`who`, `who am i`, `cat /etc/passwd`

`id`

#### Locating commands

- aliases `alias=`
- shell reserved words `do`, `while`, `case`, `else`
- function `foo()`
- Built-in commands `echo`, `fg`, `exit`, `clear`, `pwd`, `history`
- Filesystem commands `$PATH`

```bash
type bash # bash is /usr/bin/bash
which bash # /usr/bin/bash
```

### Chapter 4 - Moving Around the Filesystem

### Chapter 5 - Working with Text Files

### Chapter 6 - Managing Running Processes

### Chapter 7 - Writing Simple Shell Scripts

## Part 3 - Becoming a Linux System Administrator

### Chapter 8 - Learning System Administration

### Chapter 9 - Installing Linux

### Chapter 10 - Getting and Managing Software

### Chapter 11 - Managing User Accounts

### Chapter 12 - Managing Disk and Filesystems

## Part 4 - Becoming a Linux System Administrator

### Chapter 13 - Understanding Sever Administration

### Chapter 14 - Administering Networking

### Chapter 15 - Starting and Stopping Services

### Chapter 16 - Configuring a Print Server

### Chapter 17 - Configuring a Web Server

### Chapter 18 - Configuring an FTP Server

### Chapter 19 - Configuring a Windows File Sharing (Samba) server

### Chapter 20 - Configuring an NFS File Server

### Chapter 21 - Troubleshooting Linux

## Part 5 - Learing Linux Security Techniques

### Chapter 22 - Understanding Basic Linux Security

### Chapter 23 - Understanding Advanced Linux Security

### Chapter 24 - Enhancing Linux Security with SELinux

### Chapter 25 - Securing Linux on a Network

## Part 6 - Learing Linux Security Techniques

### Chapter 26 - Shifting to Clouds and Containers

### Chapter 27 - Using Linux for Cloud Computing

### Chapter 28 - Deploying Linux to the Cloud

### Chapter 29 - Automating Apps and Infrastructure with Ansible

### Chapter 30 - Deploying Applications as Containers with Kubernetes

# Linux Command Line and Shell Scripting

## The 4 parts of the Linux system

### Kernel

The core of the linux system. Controls all the hardware and software, allocating
hardware ressources and executing software.

#### 4 main functions of the kernel

##### System memory management

The kernel manages physical and also virtual memory (`swap`)

Memory locations are grouped into blocks called `pages`, that the kernel keeps
track of and automatically copies un-accessed memory to the swap (`swapping out`)

##### Software program management

A running program is called a `process` and can run in the forground or in the background

The `init` process starts all the other processes on the system, it is loaded
by the kernel into the virtual memory when the kernel starts. Each additionnal
process is then started and given an unique area in the virtual memory

Two of the most popular init processes are `SysV` and `systemd`

systemd initialization method has the ability to start processes based on
different events:

- on system boot
- on hardware device connection
- on service start
- on network connection
- on timer expiration

Processes to run are determined by linking events to `unit files` that are
grouped together into `targets`, one example is the default.target unit

`systemctl` allows to start, stop and list the unit files currently running

##### Hardware management

Two methods are used for inserting device driver code in the linux kernel:

- compiled in the kernel
- modules added to the kernel

Driver code allow the kernel to pass data back and forth to the device, this
acts as an intermediary between applications and the hardware

##### Filesystem management

The kernel interfaces with each filesystem using the Virtual File System VFS

| Filesystem | Description                                             |
| ---------- | ------------------------------------------------------- |
| ext        | Linux extended filesystem                               |
| ext2       | Second extended filesystem                              |
| ext3       | Supports journaling                                     |
| ext4       | Supports advanced journaling                            |
| btfrs      | Newer high-performance filesystem                       |
| exfat      | Extendend Windows filesystem, used maily for SD and USB |
| ntfs       | Microsoft NT filesystem                                 |

### GNU utilities

The GNU (Gnu's Not Unix) utilities were developed under a software policy
called OSS (open source software), anyone can use, modify or incorporate
without paying a licence fee

#### GNU Core Utilities

The coreutils package consists of 3 parts of utilies:

- handling files
- manipulating text
- managing processes

##### the shell

Provides a way for users to start porgrams, manage files on the filesystem and
manage processes running on the linux system

The shell provides a set of internal commands to controls task such as moving,
copying or renaming files, and stopping running programs. It also allows to
enter the name of a program that is passed to the kernel to start it

Shell commands can also be grouped into shell scripts

Different shells are available, the default shell used is the Bash shell,
developed as a replacement for the standard Unix shell, called the Bourne
shell, after it's creator (Bourne Again SHell - bash)

### Graphical Desktop Environment

In Linux you can choose from a wide selection of graphical desktops

#### X Window software

The x window software is the core element in presenting graphics, it works
directly with the video card and monitor, and controls how linux applications
can present windows and graphics

The 2 most commonly used x window packages are `x.org`/`X11` and `wayland`

The core x window software produces a graphical display environment but nothing
else. To manipulate files or launch programs you need a desktop environment on
top of the x window system software

##### KDE (K Desktop Environment) Plasma desktop

##### GNOME (Gnu Network Object Model Environment) desktop

### Application software

## Command Line Interface

The command-line interface CLI was before the days of graphical desktops, the
only way to interact with a unix system. The CLI allowed text input only and
would display only text

One way to get to a cli, is to access the linux system via text mode. This mode
is called the linux console, which emulates the old days of a hard-wired
console terminal. When starting the linux system, it automatically creates
several virtual consoles, which is a terminal session that runs in the linux
system memory

### Virtual Console

An alternative to using a virtual console, is to use a terminal emulation
package. This simulates working on a console terminal but within a desktop
graphical window.

On most linux distribution, you can access the virtual console `tty`
(teletypewriter) using a combination of `Ctrl+Alt` and a function key (F1
through F7)

Virtual consoles use the whole screen and start with the text login screen.

Virtual consoles appearance can be changed with the `setterm` command

`setterm --inversescreen on` Invert background and foreground colors

`setterm --background <black, red, green, yellow, blue, magenta, cyan, white>`
`setterm --foreground <black, red, green, yellow, blue, magenta, cyan, white>`
`setterm --reset`

## Basic bash shell commands

The default shell used in many Linux distributions is the GNU Bash shell. It's
a program that provides interactive access to the Linux system

It is normally started whenever a user logs into a terminal, the `/etc/passwd`
file contains a list of all the system user accounts

`cb:x:1002:1002:,,,:/home/cb:/bin/bash`

The last field, which are seperated by colons, specifies the user's shell
program, which mean that when cb logs into the linux system, the gnu bash shell
program is automatically started

### Using the shell prompt

Once a terminal emulator is started or you log into a linux virtual console,
you get access to the shell CLI prompt. The default prompt symbol for the bash
shell is the dollar sign `$`

#### The bash manual `man`

Manual for looking up information on shell commands

`man <command>` Look up informations about `<command>`

`man -k <search>` Search for a command

## Filesystem

### Common linux directory names

| Directory | Usage                                                                   |
| --------- | ----------------------------------------------------------------------- |
| `/`       | Root of the virtual directory                                           |
| `/bin`    | Binary, where many GNU user-level utilities are stored                  |
| `/boot`   | Where the boot files are stored                                         |
| `/dev`    | Where linux creates device nodes                                        |
| `/etc`    | System configuration files directory                                    |
| `/home`   | Home directory, where linux creates user directory                      |
| `/lib`    | Library directory, where system and application library are stored      |
| `/media`  | A common place for mount points used for removable media                |
| `/mnt`    | A common place for temporarily mounting filesystems                     |
| `/opt`    | Optional, where third-party software packages are stored                |
| `/proc`   | Process, where current kernel, system and process information is stored |
| `/root`   | Root user's home directory, optional                                    |
| `/run`    | Where the runtime data is heald during system operation                 |
| `/sbin`   | System binary, where many GNU admin-level utilites are stored           |
| `/srv`    | Service, where local services store their files                         |
| `/sys`    | System, where devices, drives and some kernel feature info is stored    |
| `/tmp`    | Where temporary work files can be created and destroyed                 |
| `/usr`    | User, a second directory hierarchy                                      |
| `/var`    | Variable, for files that change frequently, such as log files           |

The `/usr` directory is a secondary directory grouping read-only files that are
sharable. I'll find user command, source code files, games and so on. Example
of my current `/usr` directory: `bin games include lib lib64 libexec local
sbin share src`

### Listing files and directories

`pwd` Displays the shell session's current directory, or present working directory

`ls -F` The `-F` parameter flags appends a forward slash to directories which
help to identify them if terminal is lacking colors, or if the `LS_COLORS`
environment variable isn't set

`ls -a` Display hidden files

`ls -R` Recursive parameter shows files contained within subdirectories

`ls -l` Long listing

`ls -dl` Display information about current directory

#### Filtering

File globbing, process of pattern matching using wildcards

`ls f?ll` Represent one character

`ls f*ll` Represent any number of characters

Other examples: `ls f[ae]ll` `ls f[!a]ll` `ls f[a-i]ll`

#### Moving, Copying and Deleting files

`mv -i` `cp -i` `rm -i` Force the shell to ask whether the file should be owerwritten

`rm -f` Force the removal without confirming

`ln -s {filename} {symlink_filename}` Symbolic link

`ln {filename} {hardlink_filename}` Hard link, same file linked together (same inode `ls -i`)

`mkdir -p` Creating directories and -p(arent) directories

`rmdir` Delete directory (when empty) or `rm -r` descend into the directory and remove files

#### Viewing file content

`file {file}` Command to determine type of file

`cat` Display the data inside a file

`cat -n` Show line numbers, or only the ones that have text `cat -b`

`more` or `less` Pager utility

`tail` and `head` to show the last and first 10 lines of a file

`tail -f` to f(ollow) changes on the file, watching/monitoring

## Monitoring

### Processes

`ps` Peeking at the processes

`-N` or `N` show the opposite of the specified parameters
`-a` or `a` show all processes except session headers and processes without terminal

`ps -ef` or `ps ef` Show everything

`ps --forest` Display processes in a hierarchical listing showing parent processes

`kill` and `pkill` to forcefully stop processes

### Disk space

`df` Show each mounted filesystem that contains data

`du -sch {directory}` Shows the disk usage of a specific directory
`-c` Show total of all the files listed `-h` Human readable `-s` Summarize all

### Sorting

`sort -n {file}` Numeric sort the content of a file

`sort -M` Month sort

`sort -k={position}` Sort based on position
`sort -t={seperator}` Specify which character distinguish key positions

### Searching

`grep {parameter} {pattern} {file}` Print lines that match patterns

### Compressing data

`bzip2` `compress` `gzip` `xz` `zip`

### Archiving data

`tar -cvf {archivename} {files}` Create an archive

`tar -xvf` Extract the content

`tar -tf` List content of a tar file

## Investigating shell types

`cat /etc/passwd` User ID configuration showing the users default interactive shell

The default interactive shell, also called login shell, starts whenever a user
logs into a virtual console terminal or terminal emulator in the GUI

`cat /etc/shells` List all installed shells

`echo $0` Display the name of the current shell

### Process List

Process list is a command, or series of commands executed within a subshell

`({command})` Process list

`{command}&` Run and send command in the background

`jobs -l` Display list of processes running in the background (with their PID `-l`)

When combining both process list and running in the background:

`({command} ; {command} ; {command})&` Send process list to the background

#### Co-processing

`coproc {name} { {command};}` Co-processing

Similar but spawns a subshell in the background

Example: `coproc ( sleep 10; sleep 2)`

## External and build-in commands

Some build-in commands `cd`, `exit`, `pwd`, `echo`,

`type cd` $ cd is a shell builtin
`type -a echo` `which -a echo` Show all flavours of the command

Note that `which` only show external commands

### the history command

`history -a` Update the `.bash_history`

`history -n` Read updated `.bash_history`

## Environment Variables

`printenv` Display global environment variables

`set` Display global and local environment variables

`export {var_name}` and `unset {var_name}` To create remove environment variables

### Shell Default Environment Variables

Some default bash bourne env variables:
`CDPATH` `HOME` `PS1` `MAIL` `MAILPATH` `MAILCHECK`

### The PATH Environment Variable

The `PATH` defines the directories the shell looks for commands and programs

### Variable arrays

```bash
array=(zero one two three)
echo ${array[2]} # two
echo ${array[*]} # zero one two three

array[2]=seven
echo ${array[2]} # seven

unset array[2]
echo ${array[*]} # zero one three
echo ${array[2]} # ' '
echo ${array[3]} # three

unset array
echo ${array[*]} # ' '
```

## File permissions

The file `/etc/passwd` matches the login name to a corresponding UID value

`mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/bash`

```txt
login username : password : UID : group ID : text description : location : default shell
```

The `/etc/shadow` only accessible by root contains user records

```txt
login : encrypted password : last password change : min days : days :
expiration : disabled : date : reserved
```

`useradd -D` display default values used to add a new user (stored in `/etc/default/useradd`)

| Parameter               | Description                                                                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-c comment `           | Add text to the new user's comment field.                                                                                                                                                      |
| `-d {home_dir} `        | Specify a different name for the home directory other than the login name.                                                                                                                     |
| `-e {expiry_date} `     | Specify a date, in YYYY-MM-DD format, when the account will expire.                                                                                                                            |
| `-f {inactive_days} `   | Specify the number of days after a password expires when the account will be disabled. A value of 0 disables the account as soon as the password expires; a value of -1 disables this feature. |
| `-g {initial_group}  `  | Specify the group name or GID of the user's login group.                                                                                                                                       |
| `-G group {groupname} ` | Specify one or more supplementary groups the user belongs to.                                                                                                                                  |
| `-k `                   | Copy the /etc/skel directory contents into the user's $HOME directory (must use -m as well).                                                                                                   |
| `-m `                   | Create the user's $HOME directory.                                                                                                                                                             |
| `-M `                   | Don't create a user's $HOME directory (used if the default setting is to create one).                                                                                                          |
| `-n `                   | Create a new group using the same name as the user's login name.                                                                                                                               |
| `-r `                   | Create a system account.                                                                                                                                                                       |
| `-p {password} `        | Specify a default password for the user account.                                                                                                                                               |
| `-s {shell} `           | Specify the default login shell.                                                                                                                                                               |
| `-u {uid} `             | Specify a unique UID for the account.                                                                                                                                                          |

---

# effective-shell.com

`sort` `sed` `tr` `wc` `tee` `grep`

## stdin, stdout, stderr

- `0` stdin
- `1` stdout
- `2` stderr

### Handling the stderr

- `2>&1` to stdout:

  - Take the file with descriptor 2, which is the standard error
  - Redirect it with the redirect symbol `>`
  - Redirect it into the file with descriptor `(&)` `1`, which is the standard output

basically, redirect the standard error to the standand output

- `2>./errors.txt` to a file
- `2>/dev/null` to /dev/null (a.k.a. the blackhole, to silence errors)
- `2>>./errors.txt` append to a file
- `> output.txt 2>&1` all to a file (! not `2>&1 > output.txt`)

### Pipe an error message

```bash
mkdir ~/effective-shell/new-folder 2>&1 | tr '[:lower:]' '[:upper:]'
```

### heredoc

`EOF` End Of File

```bash
python<<<EOF
import os
for r in range(3): print(os.open('/dev/random', os.O_RDONLY))
EOF
```

### The `tee` pipe

`cat unsorted.txt | sort | tee sorted.txt | uniq | grep '^A'`

The `tee` command lets the stream of data go in two directions

## Navigating the Command Line

`C-p` Previous command
<- move start `C-a` line `Alt-b` word - word `Alt-f` line `C-e` move end ->
<- delete start `C-u` line `C-w` word - word `Alt-d` line `C-k` delete end ->
`C-n` Next command

Search `C-r` backwards `C-s` forwards
Edit `C-x C-e` (`fc` command to edit last command in history)
Clear `C-l`

Transpose `Alt-t` last two words `C-t` last two letters

```bash
bindkey # list of all keyboard shortcuts (zsh)
bind -PS # list all bindings and sequences (bash)
```

## Job Control

`<cmd> &` Start a process in the background
`<C-z>` Suspend and send process into a background job
`bg` Continue the job in the background
`jobs` List all jobs
`fg %<identifier>` Bring back process `<indentifier>` to the foreground
`kill %<indentifier>` Kill a job
