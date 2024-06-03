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
`f` : goes to first f{character}, repeat with `;` and go back with `,`
`t` : goes in front of the first t{character}
`F` & `T` : same but in reverse

NOTE: can be combined with d/c/y
example with dt) : function test(word) -> function test()
example with df<space> : test(word, word2, word3) -> test(word, word3)

## Vertical Movement

### Core movements

Rely on jumps:
`10k` Go 10 up
`10G` Go to line 10

`Ctrl+d` `Ctrl+u` move up/down one page jump

`[m` `]m` and `[M` `]M` Move to the next `]m` or previous `[m` open bracket, or closed bracket `]M` / `[M`

`C-a` increments & `C-x` decrements digit, can also be combined with `{number}C-a`

`gU{motion}` change to uppercase, ex. `gUi{`: uppercase text inside the {}- block
`~` Toggle uppercase

## Summary

`c` Change
`d` Delete
`y` Yank (copy)
`gu` & `gU` Make lowercase & uppercas
`>` & `<` Shift right & left
`!` Filter through an external program
`*` Jump to next match of the word under the cursor

`gg` & `G` Top & bottom of the document
`f{character}` Jump to next {character}
`t{character}` Jump if front of next {character}

`gc{motion}` Comment out

### Some motions

`aw` around word
`iw` inner word
`i{` inside {}-block
`it` inside tag, see `:h tag-blocks`
`J` Move up the line below

## Repeat command

<!-- TODO: -->

`.` Repeat previous serie of keystrokes
`,`
`;` Repeat last `f{character}` chord

## Insert mode chords

`C-h` Backspace
`C-w` Delete back one word
`C-u` Delete back line

`Esc` Switch to normal mode
`C-o` Switch to insert normal mode (allows to execute a normal mode motion before going back to insert mode again)

`C-r=` Paste result of a prompt while in insert mode
`C-r{register}` Paste (`:di` or `:reg` to display registers)

`C-v{u-hexa}{code}` Insert character (Find numeric code with `ga`)
`C-k{char}{char}` Insert character by digraph

## Replace mode

`R` Start replacing text
`r{character}` Replace character under cursor

## Visual mode

`v` Enter visual mode
`V` Enter visual line mode
`C-v` Enter visual block mode
`C-g` Toggle between Visual & Select mode
`gv` Reselect last visual
`o` Go the the other end of the highlighted text
`VG` Visually select until end of the document

## Command line mode

`:` Enter command line mode
`/` Search prompt
`@:` Repeat last command

`q:` Open the command line window with history of commands, see `cmdwin`
`q/` Open the command line window with history searches
`!{motion}` Enter command line mode using a motion

`C-h` Backspace
`C-w` Delete back one word
`C-u` Delete back line

`C-r C-w` Get the word under the cursor to insert in the command line
`C-r C-a` Get the WORD under the cursor to insert in the command line

`:p[rint]` Print command, echoes line
`:d[elete]` Delete command
`:co[py]` or `:t` Copy command
`:s[ubstitute]` Substitute command
`:m[ove]` Move command
`:[norm]al` Normal mode
`:r[ead] !{cmd}` Insert cmd output into the file
`:w[rite] !{cmd}` Pipes the content into the cmd

`:!{cmd}%` Execute command to the current file

Using ranges:
`:{start},{end}p` Echoes range of lines
`:/{start}/{offset},/{end}/{offset}p` Echoes range of lines using patterns
`:{range}t[copy]{address}` Copy line at {range} and put it at {address}
`:{range}m[ove]{address}` Move live at {range} and put it at {address}

examples:
`:2,5d` Deletes from line 2 to 5
`:.,5p` Prints from current line to line 5
`:%p` / `:1,$p` Echo all the lines in the file

`:/<html>/,/<\/html>/d` Delete the `<html></html>` block
`:/<html>/+1,/<\/html>/-1d` Delete inside the`<html></html>` block

`:%s/foo/bar` Substitute all first foo with bar

`:6t.` Copy line 6 and put it below current line

`:%norm A;` Add a `;` at the end of every line
`:+1,$norm i// ` Add `// ` to the beginning of the next line until the last

`:%s//<C-r><C-w>/g` Substitute all matching search occurence (using `*`) with current word under the cursor (using `<C-r><C-w>`)
`:h <C-r><C-w>` Look up current word in help

`:!node %` Run node on the current file
`:!ls` List content of current directory
`:ls` List content of the buffer list

`:r !ls` Output list content into the file
`:w !say` Pipe content to the 'say' command

Using external sort command
`:{start},{end}!sort -t'{field seperator}' -k{key}`
`!sort -t',' -k2` Sort by the second field using `,` as a field seperator

## Managing files in vim

`:ls` List loaded buffers
`:bnext` & `:bprev` or `<C-6>` to alternate between buffers
`:bd` Close current buffer

### Window and tabs

`<C-w>s` `:sp[lit] {file}` Split window horizontally
`<C-w>v` `:vsp[lit] {file}` Split window vertically
`<C-w>T` Move current window to a tab

`{#}gt` Switch to tab #
`gt` Switch to next tab
`gT` Switch to previous tab

`<C-g>` Echoes the name & status of the current file

### Using netrw

`:E[xplore]` Open netrw
`:Sex[plore]` Open netrw horizontally
`:Vex[plore]` Open netrw vertically

`<CR>` Open file or expand directory
`-` Open parent directory

## Navigate with More motions

The home row: `a` `s` `d` `f` and `j` `k` `l` `;`

horizontal movement with:
`w` Forward start of word
`e` Forward end of word
`b` Backward start of word
`ge` Backward end of word (better to use `be` instead)

When a line has wrapped, use `gj` or `gk` to move to the display line

Use `ea` to append at the end of the word
`gea` Append at the end of previous word

#### Misc.

`ya{` Yank around `{`
`viw` Select word

`F)` Jump back to the closing `)`
`t)` Jump forward before (`un[t]ill`) the closing `)`
Use `;` and `,` to jump again

`yiW` Yank complete Word
`=ap` Format whole paragraph (continious text)
`g C-a` Increment selection serially (0,1,2,3,4,etc.)

`d/{char}<CR>` Delete until next {char}

`{d/c/y/v}it` Command (delete, change, yank, etc.) inside the tag
`{d/c/y/v}at` Command (delete, change, yank, etc.) the tag

`dis` Delete a sentence, like `dd`
`dap` Delete a paragraph and blank line

`d{motion}` works well with `aw` `as` `ap`
`c{motion}` works well with `iw` `is` `ip`

##### Marks

`m{letter}` Set mark {letter}, globally with uppercase {letter}
`'{letter}` Jump to mark {letter}, beginning of line
`` `{letter}`` Jump to mark {letter}
`:delm[arks] {letter}` Delete mark {letter}

`%` Jump between opening and closing `()` `{}` `[]`
`%` Creates a mark, use `2 x backtick` to jump back to mark

##### Surround

`ys{motion}{pair}` Add surrounding
`S{pair}` Surround selection
`ds{pair}` Delete surrounding
`cs{pair}` Change surrounding
`ys{motion}t` Add surrounding tag
`cst` Change surrounding tag

### File navigation (Jump List)

`C-O` Jump back
`C-i` Jump forward, also works as `<tab>` in insert mode
`:ju[mps]` List all jumps
`:cle[arjumps]` Clear the jump list

## Registers

`xp` Transpose/Invert the next two characters
`ddp` Transpose/Invert the next two lines (cut & paste)
`yyp` Duplicate line (copy & paster)
`P` Paste before the cursor

`"{register}y{motion}` Delete into a `{register}`
`:delete {register}`

`"{register}p` Paste from a `{register}`
`:put {register}`
`c-r {register}` Paste `{register}` from visual mode

`ciw<c-r>0` Replace and paste from yank register

`"_d{motion}` Delete without copying (black hole)

`"{register}` (lowercase) Overwrites `{register}`
`"{REGISTER}` (uppercase) Appends to `{register}`

`""p` or `p` Default register, aka The unnamed register

`"0` Yank register, only set when yanking
`"+` System clipboard
`"*` Primary clipboard (middle mouse click)
`"=` Expression register

`"%` Current filename
`"#` Alternate filename
`".` Last inserted text
`":` Last Ex command
`"/` Last search pattern

## Macros

`q{register}` Start recording macro in `{register}`
`q{REGISTER}` Append recording in `{register}`
`@{register}` Repeat the last macro in `{register}`
`@@` Replay most recent macro
`:normal @a` Repeat the last macro in visual mode


`:edit!` Revert all the changes
`:argdo normal @{register}` Apply macro to all open buffers

`:cd {path}` Change directory
`:args *.rb` Open all the `.rb` files in current directory

