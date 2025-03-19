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

## stdin, stdout, stderr

- `0` stdin
- `1` stdout
- `2` stderr

### Handling the stderr

- `2>&1` to stdout:

  - Take the file with descriptor 2, which is the standard error
  - Redirect it with the redirect symbol `>`
  - Redirect it into the file with descriptor `(&)` `1`, which is the standard output

- `2>./errors.txt` to a file
- `2>/dev/null` to /dev/null blackhole
- `2>>./errors.txt` append to a file
- `> output.txt 2>&1` all to a file

### Pipe an error message

```bash
mkdir ~/effective-shell/new-folder 2>&1 | tr '[:lower:]' '[:upper:]'
```

## heredoc

`EOF` End Of File

```bash
python<<<EOF
import os
for r in range(3): print(os.open('/dev/random', os.O_RDONLY))
EOF
```
