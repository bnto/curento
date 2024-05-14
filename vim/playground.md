# VIM Commands

gg - go all the way up the document
G - go all the way down the document
gU - uppercase
gu - lowercase
gU$ - uppercase until end of line ($)

$ - end of the line
0 - beginning of the line
\_ - goes to the first non white space character of the line

o - open new line below
O - open new line above

> - add identation
>   < - remove identation

y - yank (copy) -> {count}{motion}
c - change -> {count}{motion}
d - delete (cut) -> {count}{motion}

repeat the operator will target the whole line:
dd - delete line
cc - change line (deletes and enters insert mode)
p - paste

yyp - yank line and paste below
yyP - yank line and paste above

## some shortcuts

x -> dl similar to del (delete character under the cursor)
X -> dh similar to backspace (delete character before the cursor)
s -> dl + insert mode

capitalize will perform stronger or alternate behaviour
Y - similar to yy (copy line)
P - paste before the cursor
D - deletes the line
7dd - deletes 7 lines relative to current location
d6j - deletes 6 lines down

## Other motions:

dG - delete until the end of the document
i - insert before the cursor
I - insert before line
a - append after cursor
A - append after line
o - insert new line
gi - inserts at the last activated insert
dw - delete word (word) word2 -> word) word2
dW - delete word (word) -> word2

## Text objects

i - inner
a - around
w - word - s - sentence - p - paragraph
b or ( - block ()
B or { - block {}
' - quoted text
< - block <>
[ - block []
t - tag

{operator}{a|i}{text-object}
examples:

diB - delete everything inside the {} block
dap - delete a paragraph

> ib - add identation inside the () block

ci' - change text inside quote ''
. - repeat last action (example: ci' or /cucumber + daw, then n + .)

= - format code
u - undo
c-r - redo

## Search

/{character} - search word starting with {character} -> enter, then n to alternate/repeat
:nohls - toggle off highlight search

Learn vim inside vim:

- vimtutor
- vim-adventures
- :h usr<tab>

# Vim Fundamentals

- <esc> or <C-c> to exit insert mode
- x to delete next character
- zz to center screen

## Visual Command

v : enter visual mode
V : enter visual line mode
viB : select inside the {} block in visual mode
vib : select inside the () block in visual mode

## Commands

<ctrl>-s : save document
<ctrl>-r : redo
<shift>-$ : search current selected word
<ctlr>-n & <ctrl>-p : tab selection

<ctrl>-w s : split screen horizontally
<ctrl>-w v : split screen horizontally
<ctrl>-w q : quit open screen
<ctrl>-w o : quit others

## config commands:

:set scrolloff=8
:set number
:set relativenumber

# set macro-like commands in .vimrc :

let mapleader = " "
nnoremap : in n(ormal) mode, nore (non recursion execution) map

## set marks

m<character> : set marker (global with capital letter)
'<character> : go to the set marker

## navigation

<ctrl>+6 : toggle between current file and previous file
<ctrl>-o : history (jump) back to files
<ctrl>-i : history (jump) forward to files
:jumps - see list

## Quickfix

:gr <SEARCH> `**/*.js` -> search for Quickfix
:cnext & :cprev - navigate the quickfix results
:copen - open the quickfix result list

## Comment code

`gcc` - comment line
`gc<character>`
`9gc<direction>` - comment next 9 lines

## Horizontal Movement

`_`, `0`, `$`, `D`, `C`, `S`, `f`, `,`, `;`, `t`, `F`, and `T`

`\_` : goes to the first non blank of the line
`0` : goes to the beginning of the line
`$` : goes to the end of the line
`D` : delete line until cursor position, eq. to d$
`C` : changes everything in front of the cursor position, eq. to c$
`S` : deletes whole line, respects indenting and goes into insert mode

<!-- TODO: check the substitute.lua plugin for conflicts with s-movement -->

`s` : xi, deletes and goes into insert mode
`f` : goes to first f{character}, repeat with ; and go back with ,
`t` : goes in front of the first t{character}
`F` & `T` : same but in reverse

NOTE: can be combined with d/c/y
example with dt) : function test(word) -> function test()
example with df<space> : test(word, word2, word3) -> test(word, word3)

## Vertical Movement

### Core movements

Rely on jumps:
10k : go 10 up

### Ctrl+d / Ctrl+u

move up/down one page jump

### [m / ]m and [M / ]M

Move to the next `]m` or previous `[m` open bracket, or closed bracket `]M / [M`

`C-a` increments & `C-x` decrements digit, can also be combined with `{number}C-a`

`gU{motion}` change to uppercase, ex. `gUi{`: uppercase text inside the {}- block

## Summary

`c` Change
`d` Delete
`y` Yank (copy)
`gu` & `gU` Make lowercase & uppercas
`>` & `<` Shift right & left
`!` Filter through an external program

`gg` & `G` Top & bottom of the document
`f{character}` Jump to next {character}
`t{character}` Jump if front of next {character}

`gc{motion}` Comment out

### Some motions

`aw` around word
`iw` inner word
`i{` inner {}-block

## Repeat command

<!-- TODO: -->

`.`
`,`
`;`

## Insert mode chords

`C-h` Backspace
`C-w` Delete back one word
`C-u` Delete back line
`Esc` Switch to normal mode
`C-o` Switch to insert normal mode
`C-r{register}` Paste (`:di` or `:reg` to display registers)
`C-v{u-hexa}{code}` Insert character (Find numeric code with `ga`)
`C-k{char}{char}` Insert character by digraph

## Replace mode

`R` Start replacing text
`r{character}` / `gr{character}` Replace character under cursor

## Visual mode

`v` Enter visual mode
`V` Enter visual line mode
`C-v` Enter visual block mode
`C-g` Toggle between Visual & Select mode
`gv` Reselect last visual
`o` Go the the other end of the highlighted text

## Power features

`C-r=` Paste result of a prompt while in insert mode
