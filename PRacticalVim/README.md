# Practical Vim

## Start a clean, factory resetted vim

$: `nvim -u NONE`

`-u NONE` do not source the vimrc file

For this lesson, use `nvim -u essential.vim`

```vim
" essential.vim
set nocompatible
filetype plugin on
colorscheme morning
hi Normal guibg=NONE ctermbg=NONE
```

## Compound Commands

| Compound Command | Eq in longhand | Explanation                                             |
| ---------------- | -------------- | ------------------------------------------------------- |
| `C`              | `c$`           | Replace text from cursor to end and drop in insert mode |
| `s`              | `cl`           | Replace char under cursor and drop in insert mode       |
| `S`              | `^C` or `cc`   | Replace entire line and drop in insert mode             |

Repeat a `{motion}` with `;`

`f{char}` to find next {char}
`;` repeat previous motion

## Repeatable actions

| Intend                              | Act                 | Repeat | Reverse |
| ----------------------------------- | ------------------- | ------ | ------- |
| Make a change                       | {edit}              | `.`    | `u`     |
| Scan line for next {char}           | `f{char}` `t{char}` | `;`    | `,`     |
| Scan document for next match        | /pattern`<CR>`      | `n`    | `N`     |
| Perform substitution                | :s/target/replace   | `&`    | `u`     |
| Execute sequence of changes (macro) | `qx{macro}q`        | `@x`   | `u`     |
| Repeat any Ex command               | `:{command}`        | `@:`   | `u`     |

## Search

### `:substitute` command

`:%s/search/replace/g`

`%s//<replace>/g` Replace currently hightlighted word (when using `*`)

### `*` key

Will search for the word under the cursor

### Enable and stop Search highlights

`:nohlsearch` `:noh` to stop current search highlights
`:set hls` to enable hightlights if disabled

| Trigger | Effect                                      |
| ------- | ------------------------------------------- |
| `c`     | Change                                      |
| `d`     | Delete                                      |
| `y`     | Yank                                        |
| `g~`    | Swap case                                   |
| `gu`    | Make lowercase                              |
| `gU`    | Make uppercase                              |
| `>`     | Shift right                                 |
| `<`     | Shift left                                  |
| `=`     | Autoindent                                  |
| `!`     | Filter {motion} through an external program |

`gu` and `gU` can be combined, just like `gc`:
`gUaw` uppercase current word
`gUU` uppercase current line
`gUap` uppercase current paragraph

## Keystrokes available while in insert mode

`C-h` or `<backspace>` Delete back one character
`C-w` Delete back one word
`C-u` Delete back to the start of the line
`C-j` Go down one line

### Get back to normal mode

`Esc` or `C-[` Switch to normal mode
`C-o` Switch to Insert Normal mode

### Insert normal mode

`<C-o>{command}` Entrer Insert Normal Mode to execute {command}
`<C-r>{register}` Paste {register}: `+` or `*` System clipboard, `0` Default register
`<C-r>={expression}` Evaluate {expression}
`<C-v>u{code}` Insert special unicode character, in hexadecimal

## Ex Commands

`:1` Jump to the top of the file
`$` Jump to the bottom of the file
`:p` Print the current line
You can combine the command, ex: `:1p` Jump to the top and print line
Or specifiy a range, ex: `:1,5p` Print from line 1 to 5

`:<{start},{end}>{command}`

`:.,$p` Print from current line to end of document
`:%p` Print entire document, similar to `:%s/{search}/{replace}` for the substitution command

`<{start}+n, {end}-n>{command}` Using range with offset

| Symbol     | Address                                                            |
| ---------- | ------------------------------------------------------------------ |
| 1          | First line of the file                                             |
| $          | Last line for the file                                             |
| 0          | Virtual line above first line of the file                          |
| .          | Line where the cursor is placed                                    |
| 'm         | Line containing mark `m`                                           |
| '<         | Start of visual selection                                          |
| '>         | End of visual selection                                            |
| %          | The entire file (shorthand for :1,$                                |
|            | \_                                                                 |
| `:6t.`     | Copy line 6 to just below the current line                         |
| `:6t`      | Copy the curret line to just below line 6                          |
| `:t.`      | Duplicate the current line, = `yyp` but doesn't override registers |
| `:t$`      | Copy the current line to the end of the file                       |
| `:'<,'>t0` | Copy the visually selected `'<,'>` lines to the start of the file  |

`:copy` or `:t` ex command to copy a line, ex `6t.` copy 6th line and paste it after cursor
`:move` or `:m` ex command to move a line, ex `:'<,'>m$` Move visually selected lines to end of file
`:normal` or `:norm` ex command to execute normal mode chords, ec `:%norm A;` add ; to end of every line

`@:` Repeat last Ex command

### Reveal list of possible completion

Use `C-d` to show a list of suggestions, then `tab` / `shift-tab` to cycle through the list

### Copy word that was under cursor while in command mode

Use `C-r C-w` to copy the word into the command mode
`C-r C-a` to copy the WORD

### The Command line window

`q:` show history of EX commands
`q/` show history of searches
`:<C-f>` Switch to command line window when in command line mode

### Invoking external programs

`:!{cmd} %` Invoke external `{cmd}`, and passing the current file with `%`
`:r !{cmd}` Read the `{cmd}` output and write it into buffer
`:{range}w !{cmd}` Pipe/write the selected content into the `{cmd}`

`:2,$!sort -t',' -k2`
Sort the second field `-k2` from line 2 to end of document `2,$` using comma as seperator `-t','`

`!{motion}` Shortcut for setting up a range, ex. `!G` to open the prompt with the `:.,$` range

### Run Ex commands from a script

Let's write a script in a seperate file `batch.vim`, we can then apply the script to the
current buffer using `:source batch.vim`

Here is on example of a vimscript

```vim
global/href/join
vglobal/href/delete
%normal A: http://vimcasts.org
%normal yi"$p
%substitute/\v^[^\>]+\>\s//g
```

(note: since I struggled to yank/paste the code, I used `:r !cat
code/cmdline/batch.vim` to write the code in here)

#### Apply script to multiple files

Opening multiple files, and use `:argdo source batch.vim` to apply the script to all arguments

The command `:args` shows the arguments list, `:first` or `:next` to move around

## Working with files

### Buffer list

`:buffers` or `:ls` Open buffer list
`:bnext` or `:bprev` Switch or next or previous buffer in the list
`C-6` Switch the alternate file, ie. previously opened buffer
`:bufdo` Apply an ex command to all the buffers (see also `:argdo`)
`:buffer {bufname}`

#### Deleting buffers

`:bdelete {number}` Delete a buffer

### Splitting Windows

`<c-w>s` or `:sp` Split horizontally
`<c-w>v` `:vsp` Split vertically

Move around with `<c-w><c-{hjkl}>` or `<c-w>{hjkl}`

`<C-w>c` or `:clo(se)` Close active window
`<C-w>o` or `:on(ly)` Keep only active window

#### Using tabs

`<C-w>T` move current window in a tab
`gt` switch to next tab
`gT` switch to previous tab

## Opening files

`:e %<Tab>` Expand active buffer full file path
`:e %:h<Tab>` Expand active buffer path, h(ead) of the file

### Opening the File Explorer `netrw`

`:e(dit) {path}` Open file explorer in `{path}`
`:E(xplore)` Open file explorer for current buffer directory
`:Se(xplore)` or `Ve(xplore)` Open file explorer horizontally or vertically

#### Using vim as superuser

`:w !sudo tee % > /dev/null`
