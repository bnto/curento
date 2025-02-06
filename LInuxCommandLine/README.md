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
