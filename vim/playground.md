# VIM Commands

gg - go all the way up the document
G - go all the way down the document
gU - uppercase
gu - lowercase
gU$ - uppercase until end of line ($)

$ - end of the line
0 - beginning of the line

o - open new line below
O - open new line above

> - add identation
< - remove identation

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
>ib - add identation inside the () block

ci' - change text inside quote ''
. - repeat last action (example: ci' or /cucumber + daw, then n + .)


= - format code
u - undo
c-r - redo

/{character} - search word starting with {character} -> enter, then n to alternate/repeat

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
