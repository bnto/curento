# VIM Commands

gg - go all the way up the document
G - go all the way down the document
gU - uppercase
gu - lowercase
gU$ - uppercase until end of line ($)

$ - end of the line
0 - beginning of the line

o - add and start at new line
> - add identation
< - remove identation

y - yank (copy) -> {count}{motion}
c - change -> {count}{motion}
d - delete -> {count}{motion}

repeat the operator will target the whole line:
dd - delete line
cc - change line (deletes and enters insert mode)
p - paste

capitalize will perform stronger or alternate behaviour
Y - similar to yy (copy line)
P - paste before the cursor
D - deletes the line

Other motions:
dG - delete until the end of the document
i - insert before the cursor
I - insert before line
a - insert after cursor
A - insert after line
o - insert new line

dw - delete word (word) word2 -> word) word2
dW - delete word (word) -> word2

Text objects
i - inner
a - around
w - word - s - sentence - p - paragraph
b or ( - block ()
B or { - block {}
' - quoted text
< - block <>
[ - block []
t - tag

diB - delete everything inside the {} block
dap - delete a paragraph
ci' - change text inside quote ''
. - repeat last action (example: ci' or /cucumber + daw, then n + .)

some shortcuts
x -> dl similar to del (delete character under the cursor)
X -> dh similar to backspace (delete character before the cursor)
s -> del + insert mode


{operator}{a|i}{text-object}


= - format code
u - undo
c-r - redo

/{character} - search word starting with {character} -> enter, then n to alternate/repeat

